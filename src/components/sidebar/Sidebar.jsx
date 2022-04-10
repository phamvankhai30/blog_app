import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");

      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      {/* about me */}
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cuoixastress.com/wp-content/uploads/2021/06/anh-hot-girl-lanh-lung-9.gif"
          alt="Hình cute phô mai que"
        />
        <p>
          My name is Thu and I’m a Vietnamese. I am twenty-four years old. I
          live in Ho Chi Minh city in the south of Vietnam.
        </p>
      </div>
      {/* categories */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c.name}`} key={index} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      {/* follow me */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/KhaiKaPa30/"
            style={{ color: "inherit" }}
          >
            <i className="sidebarIcon fa-brands fa-facebook"></i>
          </a>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
