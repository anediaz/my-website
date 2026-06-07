import React, { useState } from 'react';
import './ImageWithLoader.css';

interface ImageWithLoaderProps {
  id: string;
  src: string;
  alt: string;
  className?:string;
  url?: string;
  loader?: React.ReactNode;
  fetchPriority?: 'high' | 'low' | 'auto';
  onClick?: () => void;
  onLoad?: () => void;
}

export const ImageWithLoader = ({
  id, className, src, alt, loader, url, fetchPriority, onClick = () => {}, onLoad = () => {},
}:ImageWithLoaderProps) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
    onLoad();
  };
  const img = <img src={src} className={!loading ? 'loaded' : ''} aria-label={id} alt={alt} title={alt} {...(fetchPriority && { fetchpriority: fetchPriority })} onLoad={handleOnLoad} />;
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
