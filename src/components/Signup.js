import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("User already exists!");
    } else {
      const user = { name, email, password };
      axios.post("/users", user).then(alert("User created!"));
    }
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <h3> Sign Up!</h3>

        <label htmlFor="name">Full Name</label>
        <form id="form" className="form-layout">
          <input
            type="text"
            name="name"
            value={name}
            id="name"
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
