import React from 'react';
import { LoaderCircle } from '../Loader/LoaderCircle';

interface ContainerProps {
    onClose: () => void;
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
}
export const ContainerWithCloseKeyInteraction = ({
  children, isLoading, onClose, className,
}: ContainerProps) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Escape': // ESC
        onClose();
        break;
      default:
        break;
    }
  };
  return isLoading ? <div className="fallback-style"><LoaderCircle /></div> : <div className={className} onKeyDown={onKeyDown} role="textbox" tabIndex={0}>{children}</div>;
};
