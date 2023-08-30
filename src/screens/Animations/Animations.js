import React, { useEffect, useState } from 'react';
import { Gallery } from 'react-ikusi';
import './Animations.css';
import GIPHYApi from '../../service/GIPHYApi';
import { transformGiphyResult } from '../../service/utils';
import { animationsConfigurations } from '../../service/constants';

const Animations = () => {
  const [animations, setAnimations] = useState([]);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const loadAnimations = async () => {
      const fetchGifs = await GIPHYApi.getAnimations();
      const transformed = transformGiphyResult(fetchGifs);
      setAnimations(transformed);
    };
    const loadStickers = async () => {
      const fetchStickers = await GIPHYApi.getStickers();
      const transformed = transformGiphyResult(fetchStickers);
      setStickers(transformed);
    };
    loadAnimations();
    loadStickers();
  }, []);

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
            photos={animations || []}
            configurations={animationsConfigurations}
          />
        </div>
      </div>
    </div>

  );
};

export default Animations;
