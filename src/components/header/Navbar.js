import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../store/elements/arrangeReducer';
import { toggle } from '../../utils/utils';
import Menu from './Menu';

const Navbar = () => {
  const dispatch = useDispatch();
  const { menuOn } = useSelector((state) => state.arrange);
  const handleShowMenu = () => {
    dispatch(showMenu(toggle(menuOn)));
  };

  const menu = (displayClass) => (
    <div className={displayClass}>
      <Menu />
    </div>
  );

  return (
    <nav>
      <NavLink exact to="/">Back</NavLink>
      <h4>Elementos</h4>
      <button type="button" onClick={handleShowMenu}>Sort</button>
      {menuOn ? menu('d-block') : menu('d-none')}
    </nav>
  );
};

export default Navbar;
