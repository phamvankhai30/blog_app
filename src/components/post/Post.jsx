import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://static1.ohman.vn/YanNews/20190718/4dd70df5-f540-4f8f-90f1-35063545a485.jpeg"
        alt="Cảnh đẹp"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Hôm nay trời thật là đẹp</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">xin chào các cậu</p>
    </div>
  );
}
