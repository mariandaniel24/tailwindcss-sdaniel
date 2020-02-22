import React from 'react';
import PropTypes from 'prop-types';
import Webp from '../Common/Webp';
import SectionContent from '../Common/SectionContent';

const About = () => {
  return (
    <SectionContent pageName="about" title="About me">
      <p className="mt-20 text-xl tracking-wider text-center text-gray-400">
        Hello, I am <span className="text-purple-600">Daniel</span>.
      </p>
      <p className="mt-8 font-normal text-gray-300 max-w-lg mx-auto tracking-tight leading-7">
        I am a self taught web developer, I am passionate about designing and
        developing user-friendly websites. I have the skills to create high
        quality web apps or improve existing websites for individuals and
        organisations, using the latest technologies.
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
