import { useState, useEffect } from "react";
import axios from "axios";

function Signup() {
  /* Declares three state variables - all with an empty string from start*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    /* This function uses the find method to check for a matching  email address in users*/
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    // Using the try/catch method to handle errors //
    // makes a get request to the fake json server and saves it in the reposonse variable //
    const response = await axios.get("http://localhost:5000/users");
    //checks if the inputted email already exists in the returned response.data, assigns this object to the user variable //
    const user = checkEmail(response.data, email);

    //If statement that checks if user is a truthy value, then it returns alert // 
    if (user) {
      alert("User already exists!");
      //else statement to create newUser variable from user input//
    } else {
      const newUser = { name, email, password };
      //new user object is being sent to the fake json server // 
      await axios.post("http://localhost:5000/users", newUser);
      //once complete alert below displays//
      alert("User created!");
    }
    // error handling to log error message to console//
  } catch (error) {
    console.error("Error:", error.message);
    //displays error alert//
    alert("An error occurred while processing your request.");
  }
};

  return (
    /* standard sign up form */
    <div className="form-container">
      <div className="input-container">
        <h3> Sign Up!</h3>

        <label htmlFor="name">Full Name</label>
        <form id="form" className="form-layout" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            /* inline onChange variable to handle form input */
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />

          <input
            type="password"
            name="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <button type="submit" className="submit-btn">
            Sign Up!
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
