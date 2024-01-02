import React, { useState } from 'react';
import './ImageWithLoader.css';
import * as PropTypes from 'prop-types';

const ImageWithLoader = ({
  cls, image, alt, loader, url, onClick = () => {}, onLoad = () => {},
}) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => {
    setLoading(false);
    onLoad();
  };
  const img = <img src={image} className={!loading ? 'loaded' : ''} role="presentation" alt={alt} title={alt} onLoad={handleOnLoad} onClick={onClick} />;
  return (
    <div className={`ImageWithLoader ${cls || ''}`}>
      {loading && loader}
      {url
        ? <a href={url} target="_blank" rel="noopener noreferrer">{img}</a>
        : img}
    </div>
  );
};

ImageWithLoader.propTypes = {
  cls: PropTypes.string,
  image: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
  loader: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
};

export default ImageWithLoader;
