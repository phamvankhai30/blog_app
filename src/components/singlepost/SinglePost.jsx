import { Link } from "react-router-dom";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Cảnh "
          className="singlePostImg"
        />
      </div>

      <h1 className="siglePostTitle">
        Hôm nay trời thật đẹp ...
        <div className="singlePostEdit">
          <i className="singlePostItem fa-solid fa-pen-to-square"></i>
          <i className="singlePostItem fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            <Link className="link" to="/posts?username=kapa">
              KaPa
            </Link>
          </b>
        </span>
        <span className="singlePostDate"> 1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Với ảnh đẹp nó chứa đựng một vẻ đẹp riêng, chứa đựng những thông điệp
        nhắn nhủ đến người xem. Khi ngắm nhìn chúng, bạn không thể tránh khỏi
        cảm giác đắm say hòa chung chút bồi hồi, xao xuyến trước sức hút kì lạ
        của những cảnh đẹp thiên nhiên, bao hoài niệm một thuở lần lượt ùa về
        trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi không thôi. Hãy tải
        nhanh những hình ảnh đẹp này để làm hình nền máy tính nhe.xao xuyến
        trước sức hút kì lạ của những cảnh đẹp thiên nhiên, bao hoài niệm một
        thuở lần lượt ùa về trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi
        không thôi.Với ảnh đẹp nó chứa đựng một vẻ đẹp riêng, chứa đựng những
        thông điệp nhắn nhủ đến người xem. Khi ngắm nhìn chúng, bạn không thể
        tránh khỏi cảm giác đắm say hòa chung chút bồi hồi, xao xuyến trước sức
        hút kì lạ của những cảnh đẹp thiên nhiên, bao hoài niệm một thuở lần
        lượt ùa về trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi không thôi.
        Hãy tải nhanh những hình ảnh đẹp này để làm hình nền máy tính nhe.xao
        xuyến trước sức hút kì lạ của những cảnh đẹp thiên nhiên, bao hoài niệm
        một thuở lần lượt ùa về trong tâm hồn, khiến bạn chỉ muốn ngắm nhìn mãi
        không thôi
      </p>
    </div>
  );
}
