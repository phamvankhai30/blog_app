import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import "./singlepost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          <span>
            <i className="clsHeart fa-solid fa-heart"></i>
            <i className="clsShare fa-solid fa-share"></i>
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {user ? (
          <>
            <div className="comment">
              <span>
                <img src={PF + user.profilePic} alt="" className="imgCmt" />
              </span>
              <span>
                <input
                  type="text"
                  className="inputCmt"
                  placeholder="Viết bình luận ..."
                  onFocus={true}
                />
              </span>
            </div>
            <div className="cancel-ok">
              <div>
                <button className="btnCancel">HỦY</button>
              </div>
              <div>
                <button className="btnComment">BÌNH LUẬN</button>
              </div>
            </div>
          </>
        ) : null}
        <div className="userCmt">
          <div>
            <img
              src="https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-4.jpg"
              alt=""
              className="userImgCmt"
            />
          </div>
          <div className="useCmtTime">
            <p className="usercomment1">
              Khai Pham <span style={{ marginLeft: "25px" }}>10/04/2022</span>
            </p>
            <p>Các bạn đã làm rất tốt. Hãy cố gắng thêm nhé !</p>
          </div>
        </div>
        <div className="like-dislike">
          <div>
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
          <div className="thubms">
            <i class="fa-solid fa-thumbs-down"></i>
          </div>
          <div>PHẢN HỒI</div>
        </div>

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
