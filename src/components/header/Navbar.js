import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../store/elements/arrangeReducer';
import { toggle } from '../../utils/utils';
import Menu from './Menu';
import Back from '../../img/back.svg';
import Gear from '../../img/gear.svg';
import style from './Header.module.css';

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
    <nav className={style.navbar}>
      <div className="con-1 d-flex justify-between align-items-center">
        <NavLink exact to="/" className={style.icon}><img src={Back} alt="back" /></NavLink>
        <h4>Elementos</h4>
        <button
          className={`border-none bg-transparent ${style.icon}`}
          type="button"
          onClick={handleShowMenu}
        >
          <img src={Gear} alt="settings" />
        </button>
      </div>
      {menuOn ? menu('d-block') : menu('d-none')}
    </nav>
  );
};

export default Navbar;
