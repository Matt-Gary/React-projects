import React, {useState, useContext} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //we want to access the function which is able to change the authstate
    const {setAuthState}= useContext(AuthContext) //access function which is able to change state out Authstate

    let navigate = useNavigate()
    
    const Login = () => {
     //create object containing password and username
        const data = {username: username, password: password}
        //make request to our login route
        axios.post("http://localhost:4000/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error) //if there is error it will display error for us
            } else {
                   //we want to set some sort of items into our session storage
                localStorage.setItem("accessToken", response.data ) //fisrt value is the key for your value, second value for item
            //acctual token that we received
                setAuthState(true) //change Authstate to true
                navigate("/")
            }
        })
    }

    //onchange-> we're setting out state to be equal whatever we provide in input
  return (
    <div className="loginContainer">
        <label>Username</label>
        <input type="text" onChange={(event)=> {
            setUsername(event.target.value)
        }}/>
        <label>Password</label>
        <input type="password" onChange={(event)=> {
            setPassword(event.target.value)
        }}/>
        <button onClick={Login}>Login</button>
      
    </div>
  )
}

export default Login
