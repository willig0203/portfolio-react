import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const { user_name, user_email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .send(
        "contact_service",
        "template_ca98o5h",
        formState,
        "RT-mQAoqHwGWcvLSI"
      )
      .then(
        (result) => {
          setFormState({ user_name: "", user_email: "", message: "" });
          alert("Email Sent!");
          e.target.reset();
        },
        (error) => {
          alert("Email Error!");
        }
      );
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form className="form" id="contact-form" onSubmit={handleSubmit}>
        <div className="flex-row">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            defaultValue={user_name}
            onBlur={handleChange}
            name="user_name"
          />
        </div>
        <div className="flex-row">
          <label htmlFor="email">Email address:</label>
          <input
            id="email"
            type="email"
            defaultValue={user_email}
            name="user_email"
            onBlur={handleChange}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows={5}
            cols={50}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="button" data-testid="buttontag" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
