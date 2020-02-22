import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = ({ pageName, title, className, children }) => {
  return (
    <section
      id={pageName}
      className={`w-full min-h-screen pt-6 pb-32 ${className}`}
    >
      <div className="container px-4 mx-auto">
        <h2 className="font-normal text-center text-white text-lg md:text-xl lg:text-2xl xl:text-3xl wow fadeInDown">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

SectionContent.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string
};

SectionContent.defaultProps = {
  className: '',
  children: <></>
};

export default SectionContent;
