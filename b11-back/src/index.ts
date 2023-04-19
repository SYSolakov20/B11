import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import { PrismaClient } from '@prisma/client'

import IndexRouter from './routes/index.routes'
import { register as registerAuth } from './auth'

if (process.env.NODE_ENV === 'development') dotenv.config()

const app = express()
const prisma = new PrismaClient()

app.get('/', (req, res) => res.send('welcome!'))

app.use(express.json())
app.use(passport.initialize())

registerAuth(passport, prisma)

app.use(IndexRouter)

if (process.env.PORT != null) app.listen(process.env.PORT)
else app.listen(8080)
