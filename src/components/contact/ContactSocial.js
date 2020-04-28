import React from 'react';
import { social } from '../skills/icons';

import { scrollToref } from '../helper';
const ContactSocial = (props) => {
  return (
    <div className="contact_social">
      <div className="contact_icons">
        <a
          className="skill_icon"
          target="_blank"
          href="https://github.com/harelp"
          rel="noopener noreferrer"
        >
          <img src={social[1]} alt="github icon"></img>
        </a>
        <a
          className="skill_icon"
          target="_blank"
          href="https://www.linkedin.com/in/harelperi/"
          rel="noopener noreferrer"
        >
          <img src={social[2]} alt="linkedin icon"></img>
        </a>
        <div
          className="skill_icon top"
          onClick={() => scrollToref(props.scrollTo)}
        >
          <img src={social[0]} alt="facebook icon"></img>
        </div>
      </div>

      <h4>Made by Harel - 2020</h4>
    </div>
  );
};

export default ContactSocial;
