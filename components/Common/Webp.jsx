import React from 'react';

import PropTypes from 'prop-types';
export const Webp = ({ src, alt, className }) => {
  const imgExt = '.' + src.split('.')[1];

  const sourceType = imgExt === 'png' ? 'image/png' : 'image/jpeg';
  const imgPath = src.split('.')[0];
  return (
    <picture>
      <source srcSet={imgPath + '.webp'} type="image/webp" />
      <source srcSet={src} type={sourceType} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

Webp.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

Webp.defaultProps = {
  className: ''
};

export default Webp;
