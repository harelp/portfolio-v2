import React from 'react';
import PageTitles from '../PageTitles';
import WorkProject from './WorkProject';
import { projects } from '../helper';

const slogan = 'Some Of My Latest Web Designs and Apps.';

const WorkLayout = (props) => {
  return (
    <div ref={props.scrollTo}>
      <PageTitles slogan={slogan}></PageTitles>
      {projects.map((el, key) => {
        return (
          <WorkProject
            key={key}
            project={el}
            linkTo={el.linkTo}
            link={props.link}
          ></WorkProject>
        );
      })}
    </div>
  );
};

export default WorkLayout;
