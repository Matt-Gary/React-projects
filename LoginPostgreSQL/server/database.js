const {Pool} = require("pg")

const pool = new Pool({
    user:"postgres",
    password:"Mineralna1!",
    host: "localhost",
    port: 5432,
    database:"yt_login_system"
})

module.exports = pool;