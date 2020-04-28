import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isOpen } from '../../store/actions';

const Hamburger = () => {
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  return (
    <div
      className={toggle ? 'nav_toggle is-active' : 'nav_toggle'}
      onClick={() => dispatch(isOpen())}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Hamburger;
