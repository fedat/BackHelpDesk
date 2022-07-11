const { config } = require('dotenv');
config()

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    },
    jwtSecret: process.env.JWT_SECRET,
    emailSender: process.env.EMAIL_SENDER,
    emailPassword: process.env.EMAIL_PASSWORD
}