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
      navigate ("/Game");

      localStorage.setItem("user", JSON.stringify(user.id));

    } else {
      // if user not found, display error message
      setErrorMessage("User not found");
      setSuccessMessage("");
}
  })
  // Handle errors by displaying error message
  .catch((error) => {
    console.error("Error", error);
    setErrorMessage("An error occurred. Please try again.");
    setSuccessMessage("");
  });
}

  // Render the login form and display message based on state
  return (
    <div className="form-container">
      <h2>Already a user? Log in</h2>
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
        <button className="login-btn" type="submit">
          Log in
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Login;
