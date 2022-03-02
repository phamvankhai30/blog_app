import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitel">Update your Acount</span>
          <span className="settingDeleteTitel">Delete Acount</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              className="settingPPImg"
              src="https://sunglasshutusa.com/hinh-anh-dep-full-hd/imager_580.jpg"
              alt="Cảnh đẹp"
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="KaPa" />
          <label>Email</label>
          <input type="email" placeholder="phamvankhai306@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Mật khẩu" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
