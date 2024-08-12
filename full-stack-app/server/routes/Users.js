const express = require('express')
const router = express.Router()
const {Users} = require('../models')

const bcrypt = require("bcrypt")

//to generate a token need to use a functionn called sign- create a token
const {sign} = require('jsonwebtoken')

//insert into our user table
router.post("/", async (req, res) => {
//getting data for user
    const {username, password} = req.body //assuming that whatever post request we do we nee dpassword and username
//destructruring the object, taking password and username 
    bcrypt.hash(password, 10).then((hash) => { //10- time to hash the password, this will hash our password-
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
        //after providing correct username and password we create a token
        //in sign we want to keep track of the username, and ID to have identifier
        //we grabbing our token and data inside the token is an object with username and id that its log in
        const accessToken = sign({username: user.username, id:user.id},"importantsecret") //put inside a data that we want to secure- turn into our token- it's gonna hash a data
        //we create access to this token to our access token:
        return res.json(accessToken) 
        //we gonna set that token into our session storage- whenerev we make any request we gonna use this token as a part of headers
    })

})
//route to check if token is valid
router.get('/auth', (req, res))
module.exports = router