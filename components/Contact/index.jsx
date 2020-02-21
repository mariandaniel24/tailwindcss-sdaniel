import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import SectionContent from '../Common/SectionContent';

const Contact = () => {
  return (
    <SectionContent
      title="Contact Me"
      pageName="contact"
      className="border border-l-0 border-r-0 border-purple-900"
    >
      <Form />
    </SectionContent>
  );
};

Contact.propTypes = {};

export default Contact;
