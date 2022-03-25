import { Link } from "react-router-dom";
import "./post.css";
export default function Post({ post }) {
  return (
    // https://static1.ohman.vn/YanNews/20190718/4dd70df5-f540-4f8f-90f1-35063545a485.jpeg
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Cảnh đẹp"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Với ảnh đẹp nó chứa đựng một vẻ đẹp riêng, chứa đựng những thông điệp
        nhắn nhủ đến người xem. Khi ngắm nhìn chúng, bạn không thể tránh khỏi
        cảm giác đắm say hòa chung chút bồi hồi, xao xuyến trước sức hút kì lạ
        của những cảnh đẹp thiên nhiên, bao hoài niệm một thuở lần lượt ùa về
        trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi không thôi. Hãy tải
        nhanh những hình ảnh đẹp này để làm hình nền máy tính nhe bao hoài niệm
        một thuở lần lượt ùa về trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi
        không thôi
      </p>
    </div>
  );
}
