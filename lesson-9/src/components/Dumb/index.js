import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Dumb = ({ text }) => <div className="dumb">{text}</div>;

Dumb.propTypes = {
  text: PropTypes.string.isRequired
};

export default Dumb;
