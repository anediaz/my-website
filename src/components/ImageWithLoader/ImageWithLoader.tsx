import React, { useState } from 'react';
import './ImageWithLoader.css';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?:string;
  url?: string;
  loader?: React.ReactNode;
  onClick?: () => void;
  onLoad?: () => void;
}

export const ImageWithLoader = ({
  className, src, alt, loader, url, onClick = () => {}, onLoad = () => {},
}:ImageWithLoaderProps) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
    onLoad();
  };
  const img = <img src={src} className={!loading ? 'loaded' : ''} alt={alt} title={alt} onLoad={handleOnLoad} />;
  const onClickHandler = () => (url ? {} : onClick());
  return (
    <div className={`ImageWithLoader ${className}`} onClick={onClickHandler} role="button" onKeyDown={onClickHandler} tabIndex={0}>
      {loading && loader}
      {url
        ? <a href={url} target="_blank" rel="noopener noreferrer">{img}</a>
        : img}
    </div>
  );
};
