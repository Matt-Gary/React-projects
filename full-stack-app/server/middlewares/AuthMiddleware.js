const {verify} = require("jsonwebtoken") //to verify token


const validateToken = (req, res, next) => { //next funstion you call whe you want to request move forward 
//grab token from front end, we passed through the headers
    const accessToken = req.header("accessToken")
    //ask if there was actually something send in the request
    if (!accessToken) return res.json({error: "User not logged in"})
        //if they have token we need to check if is valid

    try {
        //validToken is our payload data without hash- it's username and ID that we send to create token
        const validToken = verify(accessToken, "importantsecret")//represent if token is valid or not
        req.user = validToken //to access username in our request
        if (validToken) {
            return next() //moving foward with request
        }
    } catch (err){
        return res.json({error: err})
    }

}

module.exports = {validateToken} //exports to access from anywhere in app