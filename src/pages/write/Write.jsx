import "./write.css";
export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://sunglasshutusa.com/hinh-anh-dep-full-hd/imager_580.jpg"
        alt="Cảnh đẹp"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-file-image"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Tiêu đề"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Mô tả ..."
            className="writeInput writeText"
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
