import { Router } from 'express'
import passport from 'passport'
import prisma from '../../prisma'

const router = Router()

router.get('/user/@me', passport.authenticate('session'), (req, res) => {
  res.json(req.user)
})

router.get('/user/:id', (req, res) => {
  prisma.user
    .findUnique({ where: { id: parseInt(req.params.id) } })
    .then((user) => {
      if (user != null) {
        res.json(user)
      } else {
        res.status(404)
        res.json({
          error: true,
          message: 'User with id ' + req.params.id + ' not found'
        })
      }
    })
    .catch((err) => {
      res.status(500)
      res.json({
        error: true,
        message: err.toString()
      })
    })
})

export default router
