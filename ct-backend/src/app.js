import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import adminRouter from './routes/admin.route'
import sidebarRouter from './routes/sidebar.route'
import handleErrors from './middlewares/errors.middleware'
import ticketRouter from './routes/ticket.route'
import featureRouter from './routes/feature.route'
import commentRouter from './routes/comment.route'
import organizationRouter from './routes/organization.route'
import { userOrg } from "./middlewares/check_org.middleware"
import isAuthenticated from "./middlewares/isAuthenticated.middleware"

dotenv.config()
const build = path.join('var', 'www', 'contribution-tracker', 'frontend', 'dist')
console.log("build path :" + build);
const publicPath = path.join('var', 'www', 'contribution-tracker', 'frontend', 'public')
console.log("public path :" + publicPath)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(build))
app.use(express.static(publicPath))
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

if (process.env.NODE_ENV == 'develpoment') app.use(require('morgan')('dev'))

app.options('*', cors())

app.use(
  cors({
    origin: '*',
  })
)

app.use('/api/v1', sidebarRouter)
app.use('/api/v1', indexRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/tickets', ticketRouter)
app.use('/api/v1/feature', featureRouter)
app.use('/api/v1/comments', userOrg, commentRouter)
app.use('/api/v1/organizations', organizationRouter)

//serve dist/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});
// app.get('/', async (req, res, next) => {
//   let options = {
//     root: path.join(__dirname, '../../frontend/dist')
//   };

//   let fileName = 'index.html';
//   res.sendFile(fileName, options, (err) => {
//     if (err) {
//       next(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// });

app.use(handleErrors)

export default app
