const express = require("express")
const cors = require("cors")
const db = require('./models') //connect database

const app = express()
app.use(express.json()) //allow to access the body being parse (send in json)
app.use(cors())


//Routers
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter)
//Route for comments
const commentsRouter = require('./routes/Comments')
app.use("/comments",commentsRouter)
//Route for users
const usersRouter = require('./routes/Users')
app.use("/auth",usersRouter)

db.sequelize.sync().then(() => {
    app.listen(4000, () => console.log("Server on localhost:4000"))
})

