import React from 'react'
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom' //help to navigate to other places in our application


function Homepage() {
    const [listOfPosts, setListOfPosts] = useState([])  
    let navigate = useNavigate() // assigning variable to function, lets us change the route 


    useEffect(() => {
      axios.get("http://localhost:4000/posts").then((response) => {
        setListOfPosts(response.data)
      })
    }, [])


    return (
      <>
        <div>
          {listOfPosts.map((value, key) =>(
            <div
              className="post"
              key={key}
              onClick={() => navigate(`/posts/byId/${value.id}`)} //redirect to the particular path (id) after clicking post
            >
              <div className="title">{value.title}</div>
              <div className="body">{value.postText}</div>
              <div className="username">{value.username}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
export default Homepage
