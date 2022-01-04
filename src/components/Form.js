import React, { useState } from "react";


function Form() {
  const initialValues = {username: "", email: "" , password: "" };
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormValues({...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {} ;
    //const regex = validate email 
    if (!values.username) {
      errors.username = "Username required";
    }
    if (!values.email) {
      errors.username = "Email required";
    }
    if (!values.password) {
      errors.username = "Password required";
    }
  return errors;  
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1> Login Form</h1>
        <div className= "ui divider"></div>
        <div className= "ui form">
          <div className="field">
            <label> Username </label>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={formValues.username}
            onChange={handleChange}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formValues.email}
            onChange={handleChange}/>
            </div>
          <div className="field">
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            onChange={handleChange}/>

      
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
      </div>
  )
}

export default Form;
