import type { User } from '@prisma/client'
import prisma from '../../prisma'
import passport from 'passport'
import { Router } from 'express'

const router = Router()

router.get('/stock/available', (req, res) => {
  prisma.stock.findMany().then((stocks) => {
    res.json(stocks)
  })
})

router.post('/stock/register', passport.authenticate('session'), (req, res) => {
  if (req.user == null) {
    res.status(403)
    res.json({ error: true, message: 'please log in' })
    return
  }

  if ((req.user as User).role !== 'ADMIN') {
    res.status(403)
    res.json({ error: true, message: 'insufficient permissions' })
    return
  }

  // TODO: implement validation with Zod
  if (typeof req.body.name !== 'string') {
    res.status(400)
    res.json({ error: true, message: 'bad form' })
    return
  }

  prisma.stock
    .create({
      data: {
        name: req.body.name
      }
    })
    .then((stock) => res.json(stock))
    .catch((err) => res.json({ error: true, message: err.toString() }))
})

router.get('/stock/:id/availability', (req, res) => {
  prisma.ownedStock.findMany({ where: { stockId: parseInt(req.params.id) } })
})

router.post(
  '/stock/:id/register',
  passport.authenticate('session'),
  (req, res) => {
    if (req.user == null) {
      res.status(403)
      res.json({ error: true, message: 'please log in' })
      return
    }

    const user = req.user as User

    if (user.role === 'USER') {
      res.status(403)
      res.json({ error: true, message: 'insufficient permissions' })
      return
    }

    // TODO: implement validation with Zod
    if (
      req.body.stockId == null ||
      req.body.ownedByUserId == null ||
      req.body.quantity == null ||
      req.body.measuringUnit == null
    ) {
      res.status(400)
      res.json({ error: true, message: 'bad form' })
      return
    }

    let { stockId, ownedByUserId, quantity, measuringUnit } = req.body
    stockId = parseInt(stockId)
    ownedByUserId = parseInt(ownedByUserId)
    quantity = parseFloat(quantity)

    prisma.ownedStock
      .create({
        data: {
          stockId,
          ownedByUserId,
          quantity,
          measuringUnit,
          isUpForSelling: false
        }
      })
      .then((created) => res.json(created))
  }
)

router.put(
  '/stock/:id/sell/:ownedId',
  passport.authenticate('session'),
  (req, res) => {
    if (req.user == null) {
      res.json({ error: true, message: 'please log in' })
      res.status(403)
      return
    }

    prisma.ownedStock
      .findFirst({
        where: {
          id: parseInt(req.params.ownedId),
          stockId: parseInt(req.params.id)
        }
      })
      .then((stock) => {
        if (stock == null) {
          res.status(404)
          res.json({ error: true, message: 'stock is not existent' })
          return
        }

        if (stock?.ownedByUserId !== (req.user as User).id) {
          res.status(403)
          res.json({ error: true, message: 'stock not owned by this user' })
          return
        }

        prisma.ownedStock
          .update({ where: { id: stock.id }, data: { isUpForSelling: true } })
          .then((updated) => res.json(updated))
      })
  }
)

router.put(
  '/stock/:id/buy/:ownedId',
  passport.authenticate('session'),
  (req, res) => {
    if (req.user == null) {
      res.json({ error: true, message: 'please log in' })
      res.status(403)
      return
    }

    prisma.ownedStock
      .findFirst({
        where: {
          id: parseInt(req.params.ownedId),
          stockId: parseInt(req.params.id)
        }
      })
      .then((stock) => {
        if (stock == null) {
          res.status(404)
          res.json({ error: true, message: 'stock is not existent' })
          return
        }

        if (stock?.isUpForSelling !== true) {
          res.status(403)
          res.json({ error: true, message: 'stock is not up for selling' })
          return
        }

        prisma.ownedStock
          .update({
            where: { id: stock.id },
            data: { isUpForSelling: false, ownedByUserId: (req.user as User).id }
          })
          .then((updated) => res.json(updated))
      })
  }
)

export default router
