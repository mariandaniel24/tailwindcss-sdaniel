import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <header
      className="w-full min-h-screen px-4 bg-center bg-cover shadow"
      style={{ backgroundImage: `url('img/header.jpg')` }}
    >
      <NavigationBar />
      <HeaderContent />
    </header>
  );
};

export default Header;
