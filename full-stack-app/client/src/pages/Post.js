import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; //let us to use parameters in our app in react router
import axios from "axios";

function Post() {
  let { id } = useParams(); //getting value that we pass in our params in App.js path="/posts/byId/:id"
  const [postObject, setPostObject] = useState({}); // create state that will hold that data and allow us to dispaly it
  const [comments, setComments] = useState([])
  //create state taht hold value from comment inpu
  const [newComment, setNewComment] = useState("")


  useEffect(() => { //fetching data based on that ID immediately after render a page
    axios.get(`http://localhost:4000/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    //fetching comments
    axios.get(`http://localhost:4000/comments/${id}`).then((response) => {
      setComments(response.data)
    });
  },[id]);
  //Function that will add comments every time when button is clicked
  //function make a post request
  const addComment = () => {
    axios
    .post('http://localhost:4000/comments', {
      commentBody: newComment, //passed new comment to the comment body taht we wanna add
      PostId: id //passes the post Id so it recognize which post we are talking about
    },//we passing headers- config object 
    {
      headers: {
        accessToken: sessionStorage.getItem("accessToken") //must be the same that we created in our middleware.js const accessToken = req.header("accessToken") and pass actual token
      }
    }
  )
    .then((response) => { 
      if (response.data.error) { 
        alert(response.data.error) //if error return error
      } else {
      const commentToAdd = {commentBody: newComment} //setting variable with a new comment
      setComments([...comments, commentToAdd])  //automatically add comment and refresh a page, 
      //grabbing all comments (...comments) and adding new one
      setNewComment("") //clean the value inside the input field
      }
    })
  }
  
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer"> 
          <input type="text" value= {newComment} placeholder = "comments" onChange={(event)=>{setNewComment(event.target.value)}}/> 
          <button onClick={addComment}> Add Comment</button>
        </div> 
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;