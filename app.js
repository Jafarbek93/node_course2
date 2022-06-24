const express = require('express')
const mongoose = require('mongoose')
const jfrRouter = require('./routers/jfr.js')

const url = 'mongodb://localhost/jafarDBex'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open',  () => {
    console.log('connected...')
})

app.use(express.json())
app.use('/jfr', jfrRouter)

app.listen(8080, () => {
    console.log('Server is listening')
})