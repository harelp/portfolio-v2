import React from 'react';
import { useSelector } from 'react-redux';
import { items } from '../helper';
import NavItems from './NavItems';

const SideNav = (props) => {
  const toggle = useSelector((state) => state.toggle);

  const item = items.map((el, i) => {
    return (
      <NavItems
        item={el}
        key={el}
        scrollTo={props.scrollTo[i]}
        scrollToref={props.scrollToref}
      ></NavItems>
    );
  });

  return (
    <div
      className="sideNav"
      style={{
        display: toggle ? 'block' : 'none',
      }}
    >
      <div className="sideNav_container">
        <div className="sideNav_links">{item}</div>
      </div>
      <div className="sideNav_resume">
        <a
          href="https://drive.google.com/file/d/164uTG4jaSmRDwKvLLkNVcgtjqMQIp10s/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
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
        </a>
      </div>
    </div>
  );
};

export default SideNav;
