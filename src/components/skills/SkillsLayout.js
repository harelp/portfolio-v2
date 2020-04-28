import React from 'react';
import PageTitles from '../PageTitles';
import SkillBox from './SkillBox';
import { front, back, db, tools } from './icons';
import { content } from './boxhelper';
const SkillsLayout = (props) => {
  const iconsArray = [front, back, db, tools];
  const renderSkillBox = content.map((el, i) => {
    return <SkillBox icon={iconsArray[i]} element={el} key={i}></SkillBox>;
  });
  return (
    <div ref={props.scrollTo}>
      <PageTitles slogan="Technologies I Like To Work With"></PageTitles>
      <div className="small_container wrapper">{renderSkillBox}</div>
    </div>
  );
};

export default SkillsLayout;
