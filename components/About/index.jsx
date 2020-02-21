import React from 'react';
import PropTypes from 'prop-types';
import SectionContent from '../Common/SectionContent';

const About = () => {
  return (
    <SectionContent pageName="about" title="About me">
      <p className="mt-20 text-xl font-thin tracking-wider text-center text-gray-400 ">
        Hello, I am Daniel.
      </p>
    </SectionContent>
  );
};

About.propTypes = {};

export default About;
