import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../store/elements/arrangeReducer';
import { searchElement, toggle } from '../../utils/utils';
import Menu from './Menu';
import Back from '../../img/back.svg';
import Gear from '../../img/gear.svg';
import Forbidden from '../../img/forbidden.svg';
import style from './Header.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { elements } = useSelector((state) => state.periodicTable);
  const { menuOn } = useSelector((state) => state.arrange);
  const handleShowMenu = () => {
    dispatch(showMenu(toggle(menuOn)));
  };

  const menu = (displayClass) => (
    <div className={displayClass}>
      <Menu />
    </div>
  );

  const badPath = () => {
    const name = path.replace('/details/', '');
    const element = searchElement(name, elements);
    if ((path.includes('/details/') && element.name !== undefined) || path === '/') {
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
          {menuOn ? menu(style.menuOn) : menu(style.menuOff)}
        </nav>
      );
    }

    return (
      <nav className={style.navbar}>
        <div className="con-1 d-flex justify-between align-items-center">
          <NavLink exact to="/" className={style.icon}><img src={Back} alt="back" /></NavLink>
          <h4>Elementos</h4>
          <button
            className={`border-none bg-transparent ${style.icon}`}
            type="button"
          >
            <img src={Forbidden} alt="settings" />
          </button>
        </div>
      </nav>
    );
  };

  return badPath();
};

export default Navbar;
