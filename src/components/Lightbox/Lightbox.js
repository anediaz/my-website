import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import ImageWithLoader from '../ImageWithLoader/ImageWithLoader';
import LoaderInline from '../Loader/LoaderInline';
import './Lightbox.css';

const Lightbox = ({ src, onClick = () => {} }) => {
  useEffect(() => {
    const handleEsc = (event) => {
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
      <ImageWithLoader alt="lightbox" image={src} loader={<LoaderInline height="80" width="80" />} />
    </div>
  );
};

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Lightbox;
