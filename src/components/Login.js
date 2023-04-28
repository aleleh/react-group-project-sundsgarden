import { useState } from "react";

function Login() {
  // Initialize state variables for form data
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // Initialize state variables for error message adn suces message
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // handle input field changes by updating the form data state
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

// Handle form submisson by sending a request to fake json server
function handleSubmit(e) {
  e.preventDefault();
  // Fetch data from the server
  fetch("http://localhost:5000/users")
  .then((res) => res.json())
  .then((data) => {
    //check if there is a user with matching email and pw
    const user = data.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
    // if user is found, display success message
    if (user) {
      console.log("User found:", { ...user, password: "[hidden]" });
      setSuccessMessage("User found");
      setErrorMessage("");
    } else {
      // if user not found, display error message
      setErrorMessage("User not found");
      setSuccessMessage("");
}
  })
  // handle errors by displaying error message
  .catch((error) => {
    console.errorr("Error", error);
    setErrorMessage("An error occurred. Please try again.");
    setSuccessMessage("");
  });
}

  // Render the login from and display message based on state
  return (
    <div>
      <h2>Login Form</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Login;
