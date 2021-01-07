const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express();
const apiRoutes = require('./routes/api')


//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())


//Routes
app.use('/api', apiRoutes)

//Server
const port = process.env.PORT || 3000 
app.listen(port, () => {
    console.log(`app is listening to port: ${port}`)
})