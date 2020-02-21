/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ link, handleLinkChange }) => {
  const { name, href } = link;

  return (
    <li className="block my-2 sm:mx-3 sm:min-w-0">
      <a
        onClick={handleLinkChange}
        href={href}
        name={href}
        className="block w-full p-2 px-10 py-4 tracking-wide text-gray-700 hover:text-purple-600 sm:p-1 sm:text-gray-400 md:p-4"
        title={`  ${name} - sDaniel Web Developer`}
      >
        {name}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired,
  handleLinkChange: PropTypes.func.isRequired
};
export default NavLink;
