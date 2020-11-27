const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const serverData = {
    mongoUrl: 'mongodb://localhost:27017/Flow',
    serverUrl: '0.0.0.0',
    PORT: 3000
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.contentType('application/json')
    next()
})
app.use(cors())

init(serverData)

async function init(serverData) {
    await mongoose.connect(serverData.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    mongoose.connection.once('open', () => {
        app.listen(serverData.PORT, serverData.serverUrl, (err) => {
            if (err) return new Error(`error in starting server, error: ${err}`)
            else console.log(`server started on \nPORT: ${serverData.PORT}\nURL: ${serverData.serverUrl}`)
        })

        app.use('/Catalog', require('./endPoints/Catalog.js'))
    })
    mongoose.connection.emit('open')
}
