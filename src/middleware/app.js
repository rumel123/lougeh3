const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
//const  {encrypt,decrypt} = require('../function/app')

const middleware = require('./authorization')
const middlewares = middleware({jwt,dotenv})

const services = Object.freeze({
    middlewares
})

module.exports = services
module.exports = { middlewares }