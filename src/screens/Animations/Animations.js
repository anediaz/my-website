import React from 'react';
import { Gallery } from 'react-ikusi';
import './Animations.css';
import { useAnimations } from '../../hooks/useAnimations.tsx';

import { animationsConfigurations } from '../../service/constants';

const Animations = () => {
  const { gifs, stickers } = useAnimations();
  return (
    <div className="Animations">
      <div className="title" />
      <div className="container">
        <div className="stickers">
          <div className="subtitle">
            <i className="fa fa-angle-double-right symbol" aria-hidden="true" />
            Stickers
          </div>
          <Gallery
            photos={stickers || []}
            configurations={animationsConfigurations}
          />
        </div>
        <div className="gifs">
          <div className="subtitle">
            <i className="fa fa-angle-double-right symbol" aria-hidden="true" />
            Gifs
          </div>
          <Gallery
            photos={gifs || []}
            configurations={animationsConfigurations}
          />
        </div>
      </div>
    </div>

  );
};

export default Animations;
