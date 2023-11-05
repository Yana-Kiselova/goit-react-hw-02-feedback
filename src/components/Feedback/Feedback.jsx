import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ keys, feedbackAdd }) => {
  return (
    <>
      {keys.map(key => (
        <button
          className={css.button}
          type="button"
          key={key}
          onClick={() => feedbackAdd(key)}
        >
          {key}
        </button>
      ))}
    </>
  );
};
Feedback.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  feedbackAdd: PropTypes.func,
};
