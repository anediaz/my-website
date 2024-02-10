import React from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  title?: string;
  className: string;
  children: React.ReactNode;
}

export const Section = ({
  id, title, className, children,
}:SectionProps) => (
  <div id={id} className={`Section ${className}`}>
    {title ? (
      <div className="title">
        <h3>{title}</h3>
      </div>
    ) : null}
    <div className="content">{children}</div>
  </div>
);
