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

router.post('/stock/register', (req, res) => {
  if (typeof req.body.name !== 'string') {
    res.status(400)
    res.json({ error: true, message: 'bad form' })
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
      res.status(400)
      res.json({ error: true, message: 'no one is logged in' })
      return
    }

    const user = req.user as User

    if (user.role === 'USER') {
      res.status(403)
      res.json({ error: true, message: 'insufficient permissions' })
      return
    }

    res.status(500)
    res.json({ error: true, message: 'not implemented' })
  }
)

router.put('/stock/:id/sell', (req, res) => {
  res.status(500)
  res.json({ error: true, message: 'not implemented' })
})

router.put('/stock/:id/buy', (req, res) => {
  res.status(500)
  res.json({ error: true, message: 'not implemented' })
})

export default router
