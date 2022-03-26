import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singlepost.css";
import axios from "axios";
export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="Cảnh " className="singlePostImg" />
        )}
      </div>

      <h1 className="siglePostTitle">
        {post.title}
        <div className="singlePostEdit">
          <i className="singlePostItem fa-solid fa-pen-to-square"></i>
          <i className="singlePostItem fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            <Link className="link" to={`/?user=${post.username}`}>
              {post.username}
            </Link>
          </b>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
}
