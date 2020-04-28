import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/main.scss';

import Loader from './components/Loader.js';
import Nav from './components/navbar/Nav.js';
import Layout from './components/start/Layout.js';
import WorkLayout from './components/work/WorkLayout.js';
import SmallLayout from './components/small/SmallLayout.js';
import SkillsLayout from './components/skills/SkillsLayout.js';
import ContactLayout from './components/contact/ContactLayout.js';
import SideNav from './components/sideNav/SideNav.js';
import { scrollToref } from './components/helper.js';

function App() {
  const [isLoaded, setIsloaded] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  let prevScrollpos = window.pageYOffset;

  const start = useRef();
  const work = useRef();
  const experiments = useRef();
  const skills = useRef();
  const contract = useRef();

  useEffect(() => {
    let subscribe = true;

    if (subscribe === true && isLoaded === false) {
      setTimeout(function () {
        setIsloaded(true);
      }, 2700);
    }
    window.addEventListener('touchmove', () => {
      window.addEventListener('scroll', handleScroll);
    });
    window.addEventListener('scroll', handleScroll);

    return () => (subscribe = false);
  });

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) setIsScrolling(false);
    else setIsScrolling(true);

    prevScrollpos = currentScrollPos;
    //getDocHeight() && setIsScrolling(false);
  };

  const loader = <Loader></Loader>;
  const nav = <Nav isLoaded={isLoaded}></Nav>;
  const sideNav = (
    <SideNav
      scrollToref={scrollToref}
      scrollTo={[start, work, experiments, skills, contract]}
    ></SideNav>
  );

  const mainPage = (
    <div>
      <Layout scrollToref={scrollToref} scrollTo={{ work, start }}></Layout>
      <WorkLayout scrollTo={work}></WorkLayout>
      <SmallLayout scrollTo={experiments}></SmallLayout>
      <SkillsLayout scrollTo={skills}></SkillsLayout>
      <ContactLayout scrollTo={{ contract, start }}></ContactLayout>
    </div>
  );
  return (
    <Router>
      {!isLoaded && loader}
      {!isScrolling && nav}
      {!isScrolling && sideNav}

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return mainPage;
          }}
        />
        <Route exact path="/test" component={WorkLayout} />
      </Switch>
    </Router>
  );
}

export default App;
