import React from 'react';
import { Link } from 'react-router-dom';
import { casesArr } from './casehelper';
const CaseLayout = (props) => {
  const findObj = casesArr.filter((el) => props.name === el.name);

  const renderImage = findObj[0].images.map((img, i) => {
    return <img src={img} alt={props.name} key={i}></img>;
  });
  return (
    <div>
      <div className="casses_nav wrapper">
        <Link to="/" className="btn btn_action">
          <svg
            width="24"
            height="13"
            viewBox="0 0 24 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.131 7.267H0V5.733H21.131L16.596 1.084L17.653 0L24 6.505L22.942 7.59L22.937 7.584L17.653 13L16.596 11.916L21.131 7.266V7.267Z"
              fill="white"
            />
          </svg>
        </Link>
        <a href="/#" className="btn_submit">
          Visit
        </a>
      </div>
      <div className="casses_images">{renderImage}</div>
    </div>
  );
};

export default CaseLayout;
