import React from 'react';
const Layout = (props) => {
  return (
    <div ref={props.scrollTo.start} className="wrapper">
      <div className="start_container">
        <h1>Hi there</h1>
        {/* <h1>I am Harel Peri.</h1> */}
        <h2>
          My name is Harel and I build things for the web. I specialize in
          building beautiful interfaces and modern experiences that improve
          user's everyday life.
        </h2>
        {/* <h2>
          Front-end developer based in Canada focused on building beautiful
          interfaces & modern experiences that improve user's everyday life.
        </h2> */}
        <button
          className="btn btn_action"
          onClick={() => props.scrollToref(props.scrollTo.work)}
        >
          See My Work
        </button>
      </div>
    </div>
  );
};

export default Layout;
