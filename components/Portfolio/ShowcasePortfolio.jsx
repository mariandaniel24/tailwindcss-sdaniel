import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import PROJECTS from '../../utils/projects';

const ShowcasePortfolio = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center w-full mt-4">
      {PROJECTS.map((project, i) => (
        <PortfolioItem key={`${project.name}_${i}`} project={project} />
      ))}
    </div>
  );
};

ShowcasePortfolio.propTypes = {};

export default ShowcasePortfolio;
