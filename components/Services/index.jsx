import React from 'react';
import PropTypes from 'prop-types';
import SectionContent from '../Common/SectionContent';
import ServiceItem from './ServiceItem';
import SERVICES from '../../utils/services';

const Services = () => {
  return (
    <SectionContent pageName="services" title="Services">
      <div className="flex flex-row flex-wrap justify-center items-center items-stretch mt-20">
        {SERVICES.map((service, i) => (
          <ServiceItem
            key={`service_${i}`}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </SectionContent>
  );
};

Services.propTypes = {};

export default Services;
