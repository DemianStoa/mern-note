require('dotenv').config()

const allowedOrigins = [
    process.env.CLIENT
]

module.exports = allowedOrigins