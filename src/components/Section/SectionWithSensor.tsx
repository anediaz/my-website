import React, { useEffect, useRef } from 'react';
import { Section } from './Section';
import { SectionType } from '../../service/constants';

interface SectionWithSensorProps {
  id: SectionType;
  children: React.ReactNode;
  onChangeVisibility?: (visible: boolean, id: SectionType) => void;
  title?: string;
  className: string;
}

export const SectionWithSensor = ({
  children, onChangeVisibility = () => {}, id, title, className,
}: SectionWithSensorProps) => {
  const callbackRef = useRef(onChangeVisibility);
  useEffect(() => { callbackRef.current = onChangeVisibility; });

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => callbackRef.current(entry.isIntersecting, id),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return (
    <Section title={title} id={id} className={className}>
      <>{children}</>
    </Section>
  );
};
