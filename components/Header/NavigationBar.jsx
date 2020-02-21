import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavLink from './NavLink';
import Logo from './Logo';
import links from '../../utils/links';

const Hamburger = ({ isOpen, toggleHamburger }) => {
  return (
    <button
      className={`hamburger z-20 outline-none sm:block sm:hidden sm:block ${
        isOpen ? 'open' : ''
      }`}
      onClick={toggleHamburger}
      type="button"
    >
      <span />
      <span />
      <span />
    </button>
  );
};
Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleHamburger: PropTypes.func.isRequired
};

const NavigationBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body.classList.add('overflow-y-hidden');
    } else {
      body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  const handleLinkChange = e => {
    const href = e.target.name;
    router.replace(href);
    setIsOpen(false);
  };

  return (
    <nav className="container flex items-center justify-between pt-8 mx-auto">
      <Link href="/#">
        <a title={`View Home - sDaniel Web Developer`}>
          <Logo />
        </a>
      </Link>

      <ul
        className={`fixed top-0 right-0 z-10 flex flex-col items-center justify-center w-screen h-screen transition-all duration-200 bg-purple-100 sm:static sm:flex-row sm:justify-between sm:w-auto sm:h-auto sm:bg-transparent ${
          isOpen ? '' : 'nav-closed'
        }`}
      >
        {links.map(link => {
          return (
            <NavLink
              key={`${link.href}_navlink`}
              link={link}
              handleLinkChange={handleLinkChange}
            />
          );
        })}
      </ul>
      <Hamburger isOpen={isOpen} toggleHamburger={toggleHamburger} />
    </nav>
  );
};

export default NavigationBar;
