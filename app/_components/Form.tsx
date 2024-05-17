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
  const [formStatus, setFormStatus] = useState("Pending...");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setFormStatus("Pending..."); 
  
    try {
      const response = await fetch("https://formspree.io/f/xpzvnerd", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        setFormStatus("Success!"); // Set status to "success" on success
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" }); // Reset form data
      } else {
        setFormStatus("error"); // Set status to "error" on failure
        console.error("Error submitting form:", response); // Log the error
      }
    } catch (error) {
      setFormStatus("error"); // Set status to "error" on any other error
      console.error("Error submitting form:", error); // Log the error
    }
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
          {formStatus === "success" && (
      <div className="success-message">Thank you for your message, I&apos;ll get back to you shortly!</div>
    )}
    {formStatus === "error" && (
      <div className="error-message">Error submitting form. Please try again.</div>
    )}
        </div>
      </div>
    </>
  );
};

export default Form;
