import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitelRN">React & Node</span>
        <span className="headerTitelBlog">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://2sao.vietnamnetjsc.vn/images/2017/08/17/14/36/thac-nuoc-01.jpg"
        alt="Thác nước"
      />
    </div>
  );
}
