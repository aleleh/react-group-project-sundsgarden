/* import { useState } from "react";
import axios from "axios";

function Signup() {
  /* Declares three state variables - all with an empty string from start
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    /* This function uses the find method to check for a matching  email address in users
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // makes a .get request to the fake json server to retrieve user data//
    // uses .then to call the check email function, checks the res data returned for a matching email //
    const user = await axios
      .get("http://localhost:5000/users")
      .then((res) => checkEmail(res.data, email));

    //If statement that checks if user is a truthy value, then it returns alert //
    if (user) {
      alert("User already exists!");
      //else statement to create newUser variable from user input//
    } else {
      const newUser = { name, email, password };
      //variable which holds an object which is being sent to the fake json server //
      axios
      // New user variable being sent to the j-son server using the Post method. //
        .post("http://localhost:5000/users", newUser)
      // .Then handles the successful promise with a callback function //
        .then(() => {
          //once complete alert below displays//
          alert("User created!");
        })
        // catches failed promise and logs to console with callback function //
        .catch((error) => {
          console.error("Error:", error);
          //displays error alert//
          alert("An error occurred while processing your request.");
        });
    }
  };

  return (
    /* standard sign up form 
    <div className="form-container">
      <h3> Sign Up!</h3>      
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            /* inline onChange variable to handle form input 

            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
        </div>

        <button type="submit" className="submit-btn pointer">
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default Signup; */
