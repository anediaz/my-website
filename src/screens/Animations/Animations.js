import React, { useEffect, useState } from 'react';
import { Gallery } from 'react-ikusi';
import './Animations.css';
import GIPHYApi from '../../service/GIPHYApi';
import { transformGiphyResult } from '../../service/utils';
import { animationsConfigurations } from '../../service/constants';

const Animations = () => {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const loadAnimations = async () => {
      const fetchGifs = await GIPHYApi.getAnimations();
      const transformed = transformGiphyResult(fetchGifs);
      setAnimations(transformed);
    };
    loadAnimations();
  }, []);

  return (
    <div className="Animations">
      <div className="title" />
      <div className="container">
        <Gallery
          photos={animations || []}
          configurations={animationsConfigurations}
        />
      </div>
    </div>
  );
};

export default Animations;
