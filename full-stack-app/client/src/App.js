import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post'
import Login from './pages/Login';
import Registration from './pages/Registration';
import {AuthContext} from './helpers/AuthContext'
import { useState, useEffect } from 'react';

function App() {
  const [authState, setAuthState] = useState(false) //boolean checking if you are log in or not

  useEffect(()=> {
    if (localStorage.getItem('accessToken')) {
      setAuthState(true)
    }
  }, [])

  return (
    <div className="App"> 
    <AuthContext.Provider value={{authState, setAuthState}}>

      <Router>
        <div className='navbar'>
        <Link to="/createpost"> Create a Post</Link>
        <Link to="/"> Go Homepage</Link> 
        {!authState && (
          <>
          <Link to="/login"> Login</Link>  
        <Link to="/registration"> Registration</Link>  
          </>
        )}
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
