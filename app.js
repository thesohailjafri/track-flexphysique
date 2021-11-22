require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

//routers
const authRouter = require('./routers/authRouter')
const weightRouter = require('./routers/weightRouter')



//midelware imports
const authenticationMiddleware = require('./middlewares/authenticationMw')
const notFoundMiddleware = require('./middlewares/notFoundMw')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMw')
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

//connection to database
const connectDB = require('./db/connect')

//dev comfort
const morgan = require('morgan')
app.use(morgan('tiny'))

// middleware
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))


//routes
app.get('/', (req, res) => { res.send('Having a good day ee') })

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/weight', authenticationMiddleware, weightRouter)


//end-middelware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

//server setup
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log({
            error
        })
    }
}
start()