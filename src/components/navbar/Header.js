import React from 'react';
// import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Header = () => {
  // const inspection = useSelector((state) => state.inspect.inspection);
  console.log('Hey');
  return (
    <header>
      <Navbar />
      <h1>Elementos</h1>
    </header>
  );
};

export default Header;
