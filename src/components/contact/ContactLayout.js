import React from 'react';
import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';
import PageTitles from '../PageTitles';

const ContactLayout = (props) => {
  return (
    <div ref={props.scrollTo.contract}>
      <PageTitles slogan="Get in touch" txt="What's Next?"></PageTitles>
      <div className="contact_container wrapper">
        <ContactForm></ContactForm>
        <ContactSocial scrollTo={props.scrollTo.start}></ContactSocial>
      </div>
    </div>
  );
};

export default ContactLayout;
