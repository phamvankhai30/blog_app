import { Link } from "react-router-dom";
import "./post.css";
export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} alt="Cảnh đẹp" />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categoryies.map((c) => {
            <span className="potsCat">{c.name}</span>;
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
