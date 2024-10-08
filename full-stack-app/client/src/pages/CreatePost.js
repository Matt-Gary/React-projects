import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
      };
     //Fields validation- object that contains each field that we need in our form, 
     // we specifying with Yup field requirements
      const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
      });
      //submit
      const onSubmit = (data) => {
        axios.post("http://localhost:4000/posts", data).then((response) => {
            navigate('/') //redirected to home page after clicking submit 
            alert("Post created")
        });
      };

      let navigate = useNavigate()
      return (
        <div className="createPostPage">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="formContainer">
              <label>Title: </label>
              <ErrorMessage name="title" component="span" />
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="title"
                placeholder="(Ex. Title...)"
              />
              <label>Post: </label>
              <ErrorMessage name="postText" component="span" />
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="postText"
                placeholder="(Ex. Post...)"
              />
              <label>Username: </label>
              <ErrorMessage name="username" component="span" />
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="username"
                placeholder="(Ex. John123...)"
              />
    
              <button type="submit"> Create Post</button>
            </Form>
          </Formik>
        </div>
      );
}

export default CreatePost
