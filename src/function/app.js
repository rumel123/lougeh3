const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//preparation
const encrypts = require('./encrypt')

const decrypts = require('./decrypt')

const token = require('./token')

//attaching imports
const encrypt = encrypts({jwt,dotenv,token})

const decrypt = decrypts({jwt,dotenv})

const tokens = token({})
 
const services = Object.freeze({
    decrypt,encrypt,tokens
})
 
module.exports = services
module.exports = {encrypt,decrypt,tokens}