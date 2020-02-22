import React from 'react';
import Logo from '../Header/Logo';
// import links from '../../utils/links';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="w-full min-h-0 px-4 pt-4 pb-12 footer-pattern bg-sdaniel-200">
      <div className="flex flex-col flex-wrap items-center justify-center">
        <Logo />
        <div className="px-4 py-2 border-purple-600 shadow-sm border-1">
          <p className="font-semibold tracking-tighter text-center text-purple-400 uppercase select-none">
            <span>Email </span>
          </p>
          <a
            href="mailto:contact@sdaniel.me"
            className="mt-4 font-medium tracking-wide text-gray-300"
          >
            sm24.daniel@gmail.com
          </a>
        </div>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
