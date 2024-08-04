

const express = require("express")
const cors = require("cors")
const pool = require("./database")


const app = express()

app.use(express.json()) //if server receive json request it say to server that it's json request
app.use(cors())  // corse make sure it's save localhost:3000- app server - and server localhost:4000
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; img-src 'self' http://localhost:4000;");
    next();
});

//define endpoint
app.post("/adduser", async (req, res) => {
    const { username, password } = req.body; // Destructure for easier access

    // For security, never directly insert user inputs into your SQL queries. Use parameterized queries instead.
    const insertSTM = `INSERT INTO accounts (username, password) VALUES('$1', '$2');`;
;

    try {
        const response = await pool.query(insertSTM, [username, password]);
        console.log("Data Saved", response);
        res.status(201).send("User added");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});




app.listen(4000, () => console.log("Server on localhost:4000"))
