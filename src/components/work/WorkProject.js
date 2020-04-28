import React, { useState, useRef } from 'react';
import { scrollToref } from '../helper';

const WorkHeader = (props) => {
  const [size, setSize] = useState(false);
  const { name, skills, description, color } = props.project;
  const focusTo = useRef();

  const renderSkills = skills.map((el, key) => {
    return <li key={key}>{el}</li>;
  });

  const expand = size && 'expand';

  const handleClick = () => {
    setTimeout(() => {
      scrollToref(focusTo);
    }, 1000);
    setTimeout(() => {
      props.link.history.push(`/cases/${props.linkTo}`);
    }, 2000);
    setSize(true);
  };
  return (
    <div
      ref={focusTo}
      className={expand ? 'expand' : 'work_project'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="project_mask">
        <div className="project_cover">
          <div></div>
          <div></div>
        </div>
        <div className="img" style={{ backgroundColor: color }}></div>
        {/* <img src={image} alt="test"></img> */}
      </div>

      <div className="wrapper">
        <div className="project_content">
          <div className="box_left">
            <h1>{name}</h1>
            <ul className="project_skills">{renderSkills}</ul>
          </div>

          <div className="box_right">
            <p>{description}</p>

            <span className="btn btn_view">
              View Project{' '}
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHeader;
