import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post'
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App"> 
    <Router>
      <div className='navbar'>
      <Link to="/createpost"> Create a Post</Link>
      <Link to="/"> Go Homepage</Link> 
      <Link to="/login"> Login</Link>  
      <Link to="/registration"> Registration</Link>  
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/posts/byId/:id" element={<Post/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
