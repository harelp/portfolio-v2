import React, { useEffect, useState } from 'react';
const SkillBox = (props) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (num === props.icon.length - 1) setNum(0);
      else setNum(num + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="skill_box">
      <div className="skill_icon">
        <img src={props.icon[num]} alt="frontend"></img>
      </div>
      <div className="skill_heading">{props.element.title}</div>
      <div className="skill_container">
        {props.element.lang.map((el) => {
          return <div key={el}>{el} </div>;
        })}
      </div>
    </div>
  );
};

export default SkillBox;
