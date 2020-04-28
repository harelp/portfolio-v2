import React, { useState } from 'react';
import axios from 'axios';
const ContactForm = () => {
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setisSubmitting(true);
    try {
      await axios({
        method: 'POST',
        url: 'https://getform.io/f/1e7f3d82-435a-4059-b38a-43f7a2fb4287',
        data: new FormData(evt.target),
      });
      alert('Thank you, I will be in touch with you soon!');
    } catch (error) {
      alert(error);
    }

    setisSubmitting(false);
  };
  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Hi, My name is"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="My email is"
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <input
          type="text"
          name="message"
          placeholder="Contacting you for"
          className="textbox"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="contact_button">
        <button className="btn_submit" type="submit" disabled={isSubmitting}>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
