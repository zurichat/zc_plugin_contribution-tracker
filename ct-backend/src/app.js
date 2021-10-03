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

dotenv.config()
const build = path.join('home', 'trackercontrib', 'contribution-tracker', 'frontend', 'build')
console.log("build path :" + build);
const publicPath = path.join('home', 'trackercontrib', 'contribution-tracker', 'frontend', 'public')
console.log("public path :" + publicPath)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(build))
app.use('/public', express.static(publicPath))

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


app.get('/', function(req, res, next){
    var options = {
       root: path.join(__dirname, '../../frontend/dist')
    };
     
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

export default app