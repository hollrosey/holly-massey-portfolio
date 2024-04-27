import React from "react";
import "./Form.css";

const Form: React.FC = () => {
  return (
    <>
      <div className="bodyContainer">
        <div className="formContainer">
          <form>
            <div className="nameFields">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@address.com"
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Brief description of your message"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
            ></textarea>
            <div className="buttonContainer">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
