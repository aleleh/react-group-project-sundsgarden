import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Initialize state variables for form data
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // Initialize state variables for error message and success message
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  // Handle input field changes by updating the form data state
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

// Handle form submisson by sending a request to fake json server
function handleSubmit(e) {
  e.preventDefault();
   // Demo user credentials
   const demoUser = {
    email: "demo",
    password: "demo"
  };

  // Check if entered email and password match the demo user credentials
  if (
    formData.email === demoUser.email &&
    formData.password === demoUser.password
  ) {
    console.log("User found:", { ...demoUser, password: "[hidden]" });
    setSuccessMessage("User found");
    setErrorMessage("");
    navigate("/Game");

    // Store user information in localStorage
    localStorage.setItem("user", JSON.stringify(demoUser.id));
  } else {
    // Display error message if credentials do not match
    setErrorMessage("User not found");
    setSuccessMessage("");
  }
}
  // Render the login form and display message based on state
  return (
    <div className="form-container">
      <h2>Email: demo </h2>
      <h2>Password: demo</h2>
      <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="email-login">Email:</label>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          id="email-login"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
      <label htmlFor="password-login">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          id="password-login"
          onChange={handleChange}
        />
      </div>
        <button className="login-btn pointer" type="submit">
          Log in
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Login;
