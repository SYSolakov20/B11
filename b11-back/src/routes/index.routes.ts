import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/', passport.authenticate('session'), (req, res) => {
  res.json(req.user)
})
router.get('/login', (req, res) => res.send('try /api/auth/:strategy'))

export default router
