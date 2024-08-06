import React from 'react'
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom'


function Homepage() {
    const [listOfPosts, setListOfPosts] = useState([])  
    let navigate = useNavigate()


    useEffect(() => {
      axios.get("http://localhost:4000/posts").then((response) => {
        setListOfPosts(response.data)
      })
    }, [])


    return (
      <>
        <div>
          {listOfPosts.map((value, key) => (
            <div
              className="post"
              key={key}
              onClick={() => navigate(`/posts/byId/${value.id}`)}
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
