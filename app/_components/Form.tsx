"use client";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormStatus("Pending...");

    try {
      const response = await fetch("https://formspree.io/f/xpzvnerd", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
        console.error("Error submitting form:", response);
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
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
          <span className="reqText">An <span className="required">*</span> indicates a required field.</span>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/xpzvnerd" method="POST">
            <div className="nameFields">
              <label htmlFor="firstName">First Name<span className="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />

              <label htmlFor="lastName">Last Name<span className="required">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="email">Email<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@address.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="subject">Subject<span className="required">*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Brief description of your message"
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="buttonContainer">
              <button type="submit">Send</button>
            </div>
          </form>
          {isSubmitting && (
            <div className="loading">
              <p>Submitting...</p>
            </div>
          )}
          {formStatus === "success" && ( // Success message based on formStatus
            <div className="successMessage">
              <p>Thank you for your message, I&apos;ll get back to you shortly!</p>
            </div>
          )}
          {formStatus === "error" && (
            <div className="errorMessage">
              <p>Error submitting form. Please try again.</p>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default Form;


