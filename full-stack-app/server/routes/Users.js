const express = require('express')
const router = express.Router()
const {Users} = require('../models')

const bcrypt = require("bcrypt")

//insert into our user table
router.post("/", async (req, res) => {
//getting data for user
    const {username, password} = req.body //assuming that whatever post request we do we nee dpassword and username
//destructruring the object, taking password and username 
    bcrypt.hash(password, 10).then((hash) => { //time to hash the password, this will hash our password
        //tell to add user to our users database
        Users.create({
            username: username,
            password: hash
        })
        res.json("success")
    })
})

router.post('/login', async(req, res) => {
    const {username, password} = req.body
    //before login we need a form with two fields to provide username and password
    //first wee need to check if user exist in the table
    const user = await Users.findOne({where: {username: username} }) //go to user table find a only one user where username column is equal to login
    //if there is no value user == 0
    if (!user) res.json({error: "User doesn't exist"}) 
    //if exist- we need to compare the password that user input with password in our table
    //we can hash password again that user provide and compare to hash passowrd in table
    bcrypt.compare(password, user.password).then((match) => {//if its true its the same
        if (!match) 
            return res.json({error: "Wrong Username And Password Combination" });

        return res.json("You logged IN")
    })

})

module.exports = router