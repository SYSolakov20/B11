import dotenv from 'dotenv'
import express, { Router } from 'express'
import passport from 'passport'
import session, { type SessionOptions } from 'express-session'
import prisma from './prisma'

import IndexRouter from './routes/index.routes'
import AuthRouter from './routes/api/auth.routes'
import UserRouter from './routes/api/user.routes'
import StockRouter from './routes/api/stock.routes'

import { register as registerAuth } from './auth'

if (process.env.NODE_ENV === 'development') dotenv.config()

const app = express()
const sessConfig: SessionOptions = {
  resave: false,
  saveUninitialized: true,
  secret: 'secret',
  cookie: { secure: false }
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  if (sessConfig.cookie != null) {
    sessConfig.cookie.secure = true
  }
}

app.use(express.json())
app.use(passport.initialize())
app.use(session(sessConfig))

registerAuth(passport, prisma)

const apiRouter = Router()
apiRouter.use(UserRouter)
apiRouter.use(AuthRouter)
apiRouter.use(StockRouter)

app.use('/api', apiRouter)
app.use(IndexRouter)

if (process.env.PORT != null) app.listen(process.env.PORT)
else app.listen(8080)
