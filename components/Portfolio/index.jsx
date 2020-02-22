import React from 'react';
import PropTypes from 'prop-types';
import ShowcasePortfolio from './ShowcasePortfolio';
import SectionContent from '../Common/SectionContent';

const Portfolio = () => {
  return (
    <SectionContent title="Portfolio" pageName="portfolio">
      <p className="mt-20 font-normal tracking-wide text-center text-gray-400">
        Some of my recent projects...
      </p>
      <ShowcasePortfolio />
    </SectionContent>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
