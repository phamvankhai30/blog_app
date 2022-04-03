import "./contact.css";
export default function Contact() {
  return (
    <>
      <div className="boder-contact">
        <div className="contact">
          <div className="title">CONTACT</div>
          <div className="content">
            Liên hệ với chúng tôi nếu bạn cần giúp đỡ
          </div>
          <form className="contact-form">
            <div className="contact-label">
              <label>Your Name</label>
              <br />
              <input className="input-contact" autoFocus={true} />
            </div>
            <div className="contact-label">
              <label>Your Email</label>
              <br />
              <input className="input-contact" />
            </div>
            <div className="contact-label">
              <label>Your message</label>
              <br />
              <textarea className="input-message"></textarea>
            </div>
            <div>
              <button className="btnSubmit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
