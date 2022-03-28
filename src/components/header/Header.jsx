import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitelRN">M E R N</span>
        <span className="headerTitelBlog">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://photo-cms-plo.zadn.vn/Uploaded/2022/bpcbzqvp/2020_03_04/binh-minh-da-lat-dep-nap-long-1_kabt.jpg"
        alt="Đà lạt"
      />
    </div>
  );
}
