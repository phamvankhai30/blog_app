import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerFrom" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username ..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email ..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password ..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerFromButton" type="submit">
          Register
        </button>
        {error && <span className="error">Something went wrong!</span>}
        <p className="registerFbGg">Hoặc</p>
        <button className="registerFB">
          <i className="iconFb fa-brands fa-facebook"></i>
          <p> Đăng ký bằng Facebook</p>
        </button>
        <button className="registerFB">
          <i className="iconFb fa-brands fa-google"></i>
          <p> Đăng ký bằng Google</p>
        </button>
      </form>
      <button className="registerLoginFrom">
        <Link to="/login" className="topBarLink">
          Login
        </Link>
      </button>
    </div>
  );
}
