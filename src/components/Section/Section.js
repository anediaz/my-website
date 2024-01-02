import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({
  id, title, className, children,
}) => (
  <div id={id} className={`Section ${className}`}>
    {title && (
    <div className="title">
      <h3>{title}</h3>
    </div>
    )}
    <div className="content">{children}</div>
  </div>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
