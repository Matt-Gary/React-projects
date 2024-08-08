import React, {useState} from 'react'
import axios from "axios"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const Login = () => {
     //create object containing password and username
        const data = {username: username, password: password}
        //make request to our login route
        axios.post("http://localhost:4000/auth/login", data).then((response) => {
            console.log(response.data)
        })


    }

    //onchange-> we're setting out state to be equal whatever we provide in input
  return (
    <div>
        <input type="text" onChange={(event)=> {
            setUsername(event.target.value)
        }}/>
        <input type="text" onChange={(event)=> {
            setPassword(event.target.value)
        }}/>
        <button onClick={Login}>Login</button>
      
    </div>
  )
}

export default Login
