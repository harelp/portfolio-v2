import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/main.scss';

import Nav from './components/navbar/Nav';
import Layout from './components/start/Layout';
import WorkLayout from './components/work/WorkLayout';
import SmallLayout from './components/small/SmallLayout';
import SkillsLayout from './components/skills/SkillsLayout';
import ContactLayout from './components/contact/ContactLayout';
import CaseLayout from './components/cases/CaseLayout';
import SideNav from './components/sideNav/SideNav';
import { scrollToref } from './components/helper';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  let prevScrollpos = window.pageYOffset;

  const start = useRef();
  const work = useRef();
  const experiments = useRef();
  const skills = useRef();
  const contract = useRef();

  useEffect(() => {
    window.addEventListener('touchmove', () => {
      window.addEventListener('scroll', handleScroll);
    });
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) setIsScrolling(false);
    else setIsScrolling(true);

    prevScrollpos = currentScrollPos;
    //getDocHeight() && setIsScrolling(false);
  };

  const nav = <Nav></Nav>;
  const sideNav = (
    <SideNav
      scrollToref={scrollToref}
      scrollTo={[start, work, experiments, skills, contract]}
    ></SideNav>
  );

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => {
            return (
              <div>
                {!isScrolling && nav}
                {!isScrolling && sideNav}
                <Layout
                  scrollToref={scrollToref}
                  scrollTo={{ work, start }}
                ></Layout>
                <WorkLayout link={routerProps} scrollTo={work}></WorkLayout>
                <SmallLayout scrollTo={experiments}></SmallLayout>
                <SkillsLayout scrollTo={skills}></SkillsLayout>
                <ContactLayout scrollTo={{ contract, start }}></ContactLayout>
              </div>
            );
          }}
        />
        <Route
          exact
          path="/cases/:name"
          render={(routeProps) => (
            <CaseLayout name={routeProps.match.params.name}></CaseLayout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
