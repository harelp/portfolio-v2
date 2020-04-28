import React from 'react';
import PageTitles from '../PageTitles';
import { smallProjs } from '../helper';

const SmallLayout = ({ scrollTo }) => {
  const slogan = 'Some Of My Experimental and College Projects.';

  const renderBox = smallProjs.map((el, i) => {
    return (
      <a
        href={el.website}
        target="_blank"
        className="small_box"
        key={i}
        rel="noopener noreferrer"
      >
        {el.name}
      </a>
    );
  });

  return (
    <div ref={scrollTo}>
      <PageTitles slogan={slogan}></PageTitles>
      <div className="small_container wrapper">{renderBox} </div>
    </div>
  );
};

export default SmallLayout;
