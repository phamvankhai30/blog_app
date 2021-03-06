import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topBar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [input, setInput] = useState("");

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="topBarLink">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="topBarLink">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="topBarLink">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="topBarLink">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="topBarLink">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="topBarLink">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className="searchBox">
          <input
            type="text"
            placeholder="Type to search"
            className="searchText"
            autoFocus={true}
            value={input}
            name="search"
            onChange={(e) => setInput(e.target.value)}
          />

          <Link
            to={`/?search=${input}`}
            className="link searchItem fa-solid fa-magnifying-glass"
          ></Link>
        </div>
      </div>
    </div>
  );
}
