import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import encodeUrl from '../../utils/encode-url';
import Alert from '../Common/Alert';

const ALERT_TIMEOUT = 3000;

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const defaultAlertState = {
  type: '',
  text: '',
  message: '',
  show: false
};

const Form = () => {
  const [alertState, setAlertState] = useState({ ...defaultAlertState });

  const { register, unregister, handleSubmit, errors, reset } = useForm();

  const onSubmit = async data => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeUrl({ 'form-name': 'contact', ...data })
      });
      reset();

      setAlertState({
        type: 'success',
        text: '!',
        message: 'Message successfully sent !',
        show: true
      });
    } catch (error) {
      setAlertState({
        type: 'error',
        text: 'Error !',
        message: 'Message was not sent. Please try again !',
        show: true
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlertState({ ...defaultAlertState });
    }, ALERT_TIMEOUT);
  }, [alertState]);

  useEffect(() => {
    return () => {
      unregister();
    };
  }, []);

  return (
    <>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" ref={register} />
          </label>
        </p>
        <div className="input-control">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="contact-input"
            // placeholder="Your name..."
            ref={register({ required: true })}
          />

          <span className="input-line"></span>
          <p className="contact-error">{errors.name && 'Name is required.'}</p>
        </div>
        <div className="input-control">
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            id="subject"
            type="text"
            className="contact-input"
            // placeholder="Subject..."
            ref={register({ required: true, minLength: 3 })}
          />
          <span className="input-line" />
          <p className="contact-error">
            {errors.subject &&
              'The subject should be at least 3 characters long.'}
          </p>
        </div>
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            className="contact-input"
            // placeholder="Your email..."
            ref={register({ required: true, pattern: emailRegex })}
          />
          <span className="input-line" />
          <p className="contact-error">
            {errors.email && 'The entered email is not valid.'}
          </p>
        </div>
        <div className="input-control">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="h-48 contact-input"
            // placeholder="Please enter your message..."
            ref={register({ required: true, minLength: 20 })}
          />
          <span className="input-line" />
          <p className="contact-error">
            {errors.message &&
              'The message should be at least 20 characters long.'}
          </p>
        </div>

        <div className="mt-4 input-control">
          <button className="round-button hover:bg-transparent hover:scale-x-105 hover:text-purple-500 hover:border-purple-700">
            Send message
          </button>
        </div>
      </form>

      <Alert
        type={alertState.type}
        text={alertState.text}
        title={alertState.message}
        show={alertState.show}
      />
    </>
  );
};
Form.propTypes = {};

export default Form;
