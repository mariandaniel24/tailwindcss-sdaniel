import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, text, title, show }) => {
  return (
    <div
      className={`z-10 flex contact-alert lg:rounded-full lg:inline-flex 
      ${
        type === 'success'
          ? 'bg-indigo-800 text-indigo-100'
          : 'bg-red-700 text-red-100'
      } 
      ${show ? 'alert-show' : ''}`}
      role="alert"
    >
      <span className="flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full">
        {text}
      </span>
      <span className="flex-auto mr-2 font-semibold text-left">{title}</span>
      {/* <svg
        className="w-4 h-4 opacity-75 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg> */}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
};

export default Alert;
