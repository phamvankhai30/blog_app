import "./topBar.css";

export default function TopBar() {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="http://1.bigdata-vn.com/wp-content/uploads/2021/10/1634135506_659_TOP-101-hinh-nen-hot-girl-Trung-Quoc-dep-hut.jpg"
          alt="Meow Meow"
        />
        <i className="searchItem fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
