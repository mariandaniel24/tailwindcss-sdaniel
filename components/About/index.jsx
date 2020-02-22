import React from 'react';
import PropTypes from 'prop-types';
import Webp from '../Common/Webp';
import SectionContent from '../Common/SectionContent';
import { ABOUT_DESCRIPTION } from '../../utils/about';
const About = () => {
  return (
    <SectionContent pageName="about" title="About me">
      <p className="mt-20 text-xl tracking-wider text-center text-gray-400">
        Hello, I am <span className="text-purple-600">Daniel</span>.
      </p>
      <p className="mt-8 font-normal text-gray-300 max-w-lg mx-auto tracking-tight leading-7">
        {ABOUT_DESCRIPTION}
      </p>
      <img
        src="img/about-me.svg"
        alt="Web design illustration - sDaniel"
        className="mt-20 max-w-full sm:max-w-sm mx-auto h-auto filter-svg"
      />
    </SectionContent>
  );
};

About.propTypes = {};

export default About;
