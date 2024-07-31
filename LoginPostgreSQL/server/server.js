const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json()) //if server receive json request it say to server that it's json request
app.use(cors())  // corse make sure it's save localhost:3000- app server - and server localhost:4000

//define endpoint
app.get("/adduser", (req,res) => {
    console.log(req.body)
    res.send("Respose received: " + req.body)
})


app.listen(4000, () => console.log("Server on localhost:4000"))