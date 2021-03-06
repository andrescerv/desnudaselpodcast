// based on https://www.signet.hr/learn-how-to-create-a-simple-blog-with-react-and-node/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');

mongoose.promise = global.Promise

const isProduction = process.env.NODE_ENV === 'production'

const app = express()

app.use(cors())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false}))

if(!isProduction) {
    app.use(errorHandler())
}

mongoose.connect('mongodb://localhost:27017/lightblog', { useNewUrlParser: true }, (err) => {
    if (err) {
        return res.status(400).json({message: err.message})
    }
    return console.log('Success: connected to localhost 27017.');
})
mongoose.set('debug', true)

// Add models
require('./models/Articles')
// Add routes
app.use(require('./routes'))

app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

if (!isProduction) {
    app.use((err, req, res) => {
        res.status(err.status || 500)

        res.json({
            errors: {
                message: err.message,
                error: err
            }
        })
    })
}

app.use((err,req, res) => {
    res.status(err.status || 500)

    res.json({
        errors: {
            message: err.message,
            error: {}
        }
    })
})

// const server = app.listen(8000, () => console.log('Server started on https://localhost:8000'))

let port = process.env.PORT
if (port == null || port == '') {
    port = 8000
    console.log('server started on https://localhost:8000');
}
app.listen(port)
