import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import adminRouter from './routes/admin.route'
import handleErrors from './middlewares/errors.middleware'
import ticketRouter from './routes/ticket.route'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


if (process.env.NODE_ENV == 'develpoment') app.use(require('morgan')('dev'))

app.options('*', cors())

app.use(
  cors({
    origin: '*',
  })
)

app.use('/api/v1', indexRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/ticket', ticketRouter)

app.use(handleErrors)

export default app