import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/auth/logout', (req, res, next) => {
  req.logout((err) => {
    if (err != null) next(err)
    else res.redirect('/')
  })
})

router.get('/auth/discord', passport.authenticate('discord'))
router.get('/auth/github', passport.authenticate('github'))

router.get(
  '/auth/callback/discord',
  passport.authenticate('discord', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

router.get(
  '/auth/callback/github',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

export default router
