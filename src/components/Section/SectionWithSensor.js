import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import * as PropTypes from 'prop-types';
import Section from './Section';

const SectionWithSensor = ({
  children, onChangeVisibility = () => {}, id, title, className, isVisible,
}) => (
  <VisibilitySensor
    scrollCheck
    partialVisibility
    onChange={(visibility) => onChangeVisibility(visibility, id)}
  >
    <Section title={title} id={id} className={className} isVisible={isVisible}>
      {children}
    </Section>
  </VisibilitySensor>

);
SectionWithSensor.propTypes = {
  children: PropTypes.node.isRequired,
  onChangeVisibility: PropTypes.func,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default SectionWithSensor;
