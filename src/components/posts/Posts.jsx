import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((pos, index) => (
        <Post post={pos} key={index} />
      ))}
    </div>
  );
}
