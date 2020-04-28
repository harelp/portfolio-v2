import React from 'react';
const PageTitles = (props) => {
  return (
    <div className="title">
      <div className="wrapper">
        <h4>{props.txt} </h4>
        <h2>{props.slogan} </h2>
      </div>
    </div>
  );
};

export default PageTitles;
