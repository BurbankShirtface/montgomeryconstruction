import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./Form.css";

const Form = () => {
  const [state, handleSubmit] = useForm("xvoedrnw");
  if (state.succeeded) {
    return (
      <p className="submit-message gold">
        Thank you. Your request has been sent.
        <br />
        <br />
        We will be in touch within 24 hours, guaranteed! If you haven't heard
        from us, please submit another message and ensure your contact
        information is correct, or give us a call or text at (519) 441-0833.{" "}
        <br />
        <br />
        Have a good day!
      </p>
    );
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          className="input"
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="[0-9]{3}[-][0-9]{3}[-][0-9]{4}"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <input
          className="input"
          id="referral"
          type="text"
          name="referral"
          placeholder="How did you hear about us?"
        />
        <textarea
          className="contact-input-message input"
          id="message"
          name="message"
          placeholder="Message..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="contact-submit-button bold"
          type="submit"
          disabled={state.submitting}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
