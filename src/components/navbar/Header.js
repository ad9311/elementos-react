import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Header = () => {
  const localtion = useLocation();
  const { element } = useSelector((state) => state.inspect.selection);

  const isInspecting = () => {
    if (localtion.pathname.includes('details')) {
      return true;
    }
    return false;
  };

  return (
    <header>
      <Navbar />
      {isInspecting()
        ? <h1>{element.name}</h1>
        : <h1>Elementos</h1> }
    </header>
  );
};

export default Header;
