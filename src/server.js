const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const router = require('./router')

app.disable('x-powered-by')
app.use(morgan(`:method :url\nSTATUS :status CONTENT-LENGTH :res[content-length]\n:response-time ms`))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(5000, 'localhost', (error) => {
    error ? console.log(error) : console.log('Denzel\'s server listening 5000 port')
})
