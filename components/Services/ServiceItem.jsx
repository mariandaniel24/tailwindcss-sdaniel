import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="service-item">
      <ReactSVG
        beforeInjection={svg => {
          svg.classList.add('service-svg');
        }}
        src={icon}
        role="img"
        aria-label={title}
        className="-mt-12 h-16 w-16 shadow-sdaniel bg-sdaniel-transparent mx-auto"
      />
      <h4 className="font-normal text-xl uppercase tracking-wider text-white mt-4">
        {title}
      </h4>
      <p className="text-gray-400 mt-4 text-sm">{description}</p>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default ServiceItem;
