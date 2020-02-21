import React from 'react';
import PropTypes from 'prop-types';
import Webp from '../Common/Webp';

const PortfolioItem = ({ project }) => {
  const { folder, title, description, images, thumbnail, website } = project;
  const fullThumbnail = `img/projects/${folder}/${thumbnail}`;
  return (
    <div className="portfolio-item">
      <Webp
        src={fullThumbnail}
        alt={`${title} - ${thumbnail.split(['.'][0])} image`}
      />
      <div className="info-box">
        <h5 className="text-xl font-bold tracking-wide text-center text-purple-600 uppercase">
          {title}
        </h5>
        <p className="info-box-description" style={{ maxHeight: 100 }}>
          {description}
        </p>
        <a
          className="round-button info-box-button hover:bg-transparent hover:scale-x-105 hover:text-purple-500 hover:border-purple-700"
          rel="noopener"
          target="_blank"
          href={website}
        >
          Open website
        </a>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  project: PropTypes.shape({
    folder: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    thumbnail: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  })
};

export default PortfolioItem;
