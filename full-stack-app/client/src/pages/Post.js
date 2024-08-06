import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; //let us to use parameters in our app in react router
import axios from "axios";

function Post() {
  let { id } = useParams(); //getting value that we pass in our params in App.js path="/posts/byId/:id"
  const [postObject, setPostObject] = useState({}); // create state that will hold that data and allow us to dispaly it

  useEffect(() => { //fetching data based on that ID
    axios.get(`http://localhost:4000/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  },[id]);
  
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Post;