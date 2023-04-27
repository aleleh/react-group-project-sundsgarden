import { useState } from "react";

function Login() {
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

  // Handle form submission by sending a request to the server
  function handleSubmit(e) {
    e.preventDefault();
    // Fetch data from the server
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // Check if there is a user with matching email and password
        const user = data.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );
        // If the user is found, display success message
        if (user) {
          console.log("User found:", { ...user, password: "[hidden]" });
          setSuccessMessage("User found");
          setErrorMessage("");
        } else {
          // If the user is not found display error message
          setErrorMessage("User not found");
          setSuccessMessage("");
        }
      })
      // Handle errors by displaying an error message
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
        setSuccessMessage("");
      });
  }

  // Render the login form and display message based on state
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
