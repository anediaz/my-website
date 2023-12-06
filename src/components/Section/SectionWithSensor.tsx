import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Section } from './Section';

interface SectionWithSensorProps {
  id: string;
  children: React.ReactNode;
  onChangeVisibility?: (visible:boolean, id:string) => void;
  title?: string,
  className: string;
}

export const SectionWithSensor = ({
  children, onChangeVisibility = () => {}, id, title, className,
}:SectionWithSensorProps) => (
  <VisibilitySensor
    scrollCheck
    partialVisibility
    onChange={(visible: boolean) => onChangeVisibility(visible, id)}
  >
    <Section title={title} id={id} className={className}>
      <>{children}</>
    </Section>
  </VisibilitySensor>
);
