import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function Registration() {
    const initialValues = {
        username: "",
        password:""
      };
     //Fields validation- object that contains each field that we need in our form, 
     // we specifying with Yup field requirements
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
      });
      //we have to get data from the form, all values that person provide (data)
      const onSubmit = (data) => {
        axios.post("http://localhost:4000/auth", data).then(() => {
            console.log(data) //make API request to localhost and then send 'data' (values from input)
        })
      }
  return (
    <div>
      <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="formContainer">
              <label>Username: </label>
              <ErrorMessage name="username" component="span" />
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="username"
                placeholder="(Ex. John123...)"
              />
                <label>Password: </label>
              <ErrorMessage name="password" component="span" />
              <Field
                autocomplete="off"
                id="inputCreatePost"
                name="password"
                placeholder="Your password"
                type="password"
              />
    
              <button type="submit"> Register </button>
            </Form>
          </Formik>
    </div>
  )
}

export default Registration
