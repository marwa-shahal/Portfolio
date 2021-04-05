import React from 'react';
import emailjs from 'emailjs-com'

const ContactMe = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_me',
        'template_z1m76v2',
         e.target,
        'user_cI5xaZmn4p0dmdOq5MY0u'
      )
      .then(
        (result) => {
          alert(`your message has been sent successfully`);
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-me" id="contact" style={{ margin: "auto" }}>
      <div className="contact-info container">
        <h1 className="contact-title">Get in touch</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input type="name" name="name" className="form-control" id="exampleFormControlInput1" required />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email"  name="email" className="form-control" id="exampleFormControlInput1" required />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">subject</label>
            <input type="subject"  name="subject" className="form-control" id="exampleFormControlInput1" required />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">message</label>
            <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required ></textarea>
          </div>
          <div className="form-group contact-btn">
            <button className=" btn btn-outline-light" type="submit" style={{ maxWidth: "15rem", marginTop: "2rem", paddingTop: "1rem", paddingBottom: "1rem" }} >Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;