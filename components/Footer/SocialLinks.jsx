import React from 'react';
// import PropTypes from 'prop-types';
import { Linkedin, Github } from './SocialIcons';

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center mt-10">
      <a className="social-circle" title="sDaniel Linkedin page">
        <Linkedin size="20" />
      </a>
      <a className="social-circle" title="sDaniel Github page">
        <Github size="20" />
      </a>
    </div>
  );
};

SocialLinks.propTypes = {};

export default SocialLinks;
