import React from 'react';
import PropTypes from 'prop-types';

function Cross({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3638 2.05025C13.7544 1.65972 13.7544 1.02656 13.3638 0.636033C12.9733 0.245508 12.3401 0.245509 11.9496 0.636033L6.99987 5.58579L2.05014 0.636061C1.65962 0.245537 1.02645 0.245537 0.635928 0.636061C0.245404 1.02659 0.245404 1.65975 0.635928 2.05028L5.58565 7L0.635911 11.9497C0.245387 12.3403 0.245386 12.9734 0.635911 13.364C1.02643 13.7545 1.6596 13.7545 2.05012 13.364L6.99987 8.41421L11.9496 13.364C12.3402 13.7545 12.9733 13.7545 13.3638 13.364C13.7544 12.9735 13.7544 12.3403 13.3638 11.9498L8.41408 7L13.3638 2.05025Z"
        fill="#1C1C21"
      />
    </svg>
  );
}

Cross.propTypes = {
  className: PropTypes.string,
};

Cross.defaultProps = {
  className: '',
};

export default Cross;
