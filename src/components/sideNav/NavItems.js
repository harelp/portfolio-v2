import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpen } from '../../store/actions';

const NavItems = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    props.scrollToref(props.scrollTo);
    dispatch(isOpen());
  };
  return <div onClick={handleClick}>{props.item}</div>;
};

export default NavItems;
