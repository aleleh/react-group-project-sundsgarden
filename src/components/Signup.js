import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
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
    /* an asynchronus function with an event as its argument*/
    event.preventDefault();
    /* prevent default stops the refreshing of the page after submit */
    const user = await axios
    /* uses axios to find useres in /users*/
      .get("/users")
    /* This function checks if the email variable matches any of the returned email objects found */
      .then((res) => checkEmail(res.data, email));

    if (user) {
      /* if a truthy value returns alert below */
      alert("User already exists!");
    } else {
      /* if false, creates a new user object and displays alert */
      const user = { name, email, password };
      axios.post("/users", user).then(alert("User created!"));
    }
  };

  return (
    /* standard sign up form */
    <div className="form-container">
      <div className="input-container">
        <h3> Sign Up!</h3>

        <label htmlFor="name">Full Name</label>
        <form id="form" className="form-layout" >
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            /* inline onChange variable to handle form input */
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
            Sign Up!
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
