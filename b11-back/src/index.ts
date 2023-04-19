import express from 'express'
import IndexRouter from './routes/index.routes'

const app = express()

app.get('/', (req, res) => res.send('welcome!'))

app.use(express.json())
app.use(IndexRouter)

if (process.env.PORT != null) app.listen(process.env.PORT)
else app.listen(8080)
