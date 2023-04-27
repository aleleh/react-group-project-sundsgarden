import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const [info, setInfo] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { ...info, id: uuidv4() };
    setUser([...user, newUser]);
    setInfo({ name: "", email: "", password: "" });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="form-container">
      <div className="input-container">
        <h3> Sign Up!</h3>

        <label htmlFor="name">Full Name</label>
        <form id="form" onSubmit={handleSubmit} className="form-layout">
          <input
            type="text"
            name="name"
            value={info.name}
            id="name"
            onChange={handleChange}
            placeholder="Full Name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={info.email}
            id="email"
            onChange={handleChange}
            placeholder="Email Address"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={info.password}
            id="password"
            onChange={handleChange}
            placeholder="***********"
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
