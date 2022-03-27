import { Link } from "react-router-dom";
import "./post.css";
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="Cảnh đẹp" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categoryies.map((c, index) => {
            <span className="potsCat" key={index}>
              {c.name}
            </span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
