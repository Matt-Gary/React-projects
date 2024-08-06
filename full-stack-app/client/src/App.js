import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Homepage from './pages/Homepage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post'

function App() {
  return (
    <div className="App"> 
    <Router>
      <div className='navbar'>
      <Link to="/createpost"> Create a Post</Link>
      <Link to="/"> Go Homepage</Link>  
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/posts/byId/:id" element={<Post/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
