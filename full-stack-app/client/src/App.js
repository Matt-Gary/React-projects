import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post'
import Login from './pages/Login';
import Registration from './pages/Registration';
import {AuthContext} from './helpers/AuthContext'
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [authState, setAuthState] = useState({
    username: "", 
    id: 0, 
    status: false //bolleen representing if we lgo in or not
  }) //creating object 
  //if Access token is in the storage, setAuthstate to true
  useEffect(()=> {
    //making request 
    axios.get('http://localhost:4000/auth/auth', {headers:{
      accessToken: localStorage.getItem("accessToken")
    }}).then((response) => {
      if (response.data.error) {
        setAuthState({...authState, status:false }) //we grabbing the authstate but we changing only status
      } else {
        setAuthState({
        username: response.data.username, 
        id: response.data.id, 
        status: true //bolleen representing if we lgo in or not
      })}
    })
  }, [authState])

  const logout = () => {
    localStorage.removeItem("accessToken")
    setAuthState({ //we clear state after log out 
      username: "", 
      id: 0, 
      status: false //bolleen representing if we lgo in or not
    })  }
  return (
    <div className="App"> 
    <AuthContext.Provider value={{authState, setAuthState}}>

      <Router>
        <div className='navbar'>
        <Link to="/createpost"> Create a Post</Link>
        <Link to="/"> Go Homepage</Link> 
        {!authState.status ? (
          <>
          <Link to="/login"> Login</Link>  
        <Link to="/registration"> Registration</Link>  
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        {authState.username}
        </div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/posts/byId/:id" element={<Post/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
