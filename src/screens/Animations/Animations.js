import React, { useEffect, useState } from 'react';
import './Animations.css';
import GIPHYApi from '../../service/GIPHYApi';

const Animations = () => {
  const [animations, setAnimations] = useState([]);
  const renderImg = (url) => {
    const img = <img src={url} alt="gif" style={{ height: '400px', width: '400px' }} />;
    return img;
  };

  useEffect(() => {
    const loadAnimations = async () => {
      const fetchGifs = await GIPHYApi.getAnimations();
      setAnimations(fetchGifs);
    };
    loadAnimations();
  }, []);

  return (
    <div className="Animations">
      <div className="title" />
      {animations.map(renderImg)}
    </div>
  );
};

export default Animations;
