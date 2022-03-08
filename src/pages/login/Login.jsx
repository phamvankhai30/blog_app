import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginFrom">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email ..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password ..."
        />
        <button className="loginFromButton">Login</button>
      </form>
      <button className="loginRegisterFrom">
        <Link to="/register" className="topBarLink">
          Register
        </Link>
      </button>
    </div>
  );
}
