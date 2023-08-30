import { useEffect, useState } from 'react';
import { transformGiphyResult } from '../service/utils';
import GIPHYApi from '../service/GIPHYApi';

export const useAnimations = () => {
  const [gifs, setGifs] = useState();
  const [stickers, setStickers] = useState();
  useEffect(() => {
    const loadAnimations = async () => {
      const fetchGifs = await GIPHYApi.getAnimations();
      const transformed = transformGiphyResult(fetchGifs);
      setGifs(transformed);
    };
    const loadStickers = async () => {
      const fetchStickers = await GIPHYApi.getStickers();
      const transformed = transformGiphyResult(fetchStickers);
      setStickers(transformed);
    };
    loadAnimations();
    loadStickers();
  }, []);

  return { gifs, stickers };
};
