const {Pool} = require("pg")
const {response} = require("express")

const pool = new Pool({
    user:"postgres",
    password:"Mineralna1!",
    host: "localhost",
    port: 5432,
    database:"yt_login_system"
}
)
const createTableQry = `CREATE TABLE accounts (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) UNIQUE NOT NULL);`

pool.query(createTableQry).then((Response) => {
    console.log("Table created")
    console.log(response)
})
.catch((err)=> {
    console.log(err)
})

module.exports = pool