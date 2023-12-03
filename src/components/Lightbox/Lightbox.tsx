import React, { useEffect } from 'react';
import { ImageWithLoader } from '../ImageWithLoader/ImageWithLoader';
import LoaderInline from '../Loader/LoaderInline.js';
import './Lightbox.css';

interface LightboxProps {
  src: string;
  onClick?: () => void;
}

export const Lightbox = ({ src, onClick = () => {} }:LightboxProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClick]);

  return (
    <div className="lightbox">
      <div className="lightbox-layer" />
      <div className="close"><i className="fa fa-times-circle" aria-hidden="true" onClick={onClick} title="close" /></div>
      <ImageWithLoader alt="lightbox" src={src} loader={<LoaderInline height="80" width="80" />} />
    </div>
  );
};
