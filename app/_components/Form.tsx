"use client"
import React, { ChangeEvent, useState } from "react";
import "./Form.css";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Reset form data
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  interface FormEventWithTarget extends EventTarget {
    target: HTMLInputElement;
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };
  
  return (
    <>
      <div className="bodyContainer">
        <div className="formContainer">
          <form onSubmit={(e) => handleSubmit(e)} action="https://formspree.io/f/xpzvnerd" method="POST">
            <div className="nameFields">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@address.com"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Brief description of your message"
              value={formData.subject}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={(e) => handleChange(e)}
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
