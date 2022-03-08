import { Link } from "react-router-dom";
import "./register.css";
export default function register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerFrom">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username ..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email ..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password ..."
        />
        <button className="registerFromButton">Register</button>
      </form>
      <button className="registerLoginFrom">
        <Link to="/login" className="topBarLink">
          Login
        </Link>
      </button>
    </div>
  );
}
