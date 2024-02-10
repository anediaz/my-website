import { useEffect, useState } from 'react';
import { FormattedGiphyResult, formatGiphyResult } from '../helpers';
import { getStickers, getAnimations } from '../service/GIPHYApi';

export const useAnimations = () => {
  const [gifs, setGifs] = useState<FormattedGiphyResult[] | undefined>();
  const [isGifsFailed, setIsGifsFailed] = useState(false);
  const [stickers, setStickers] = useState<FormattedGiphyResult[] | undefined>();
  const [isStickersFailed, setIsStickersFailed] = useState(false);
  useEffect(() => {
    const loadAnimations = async () => {
      const fetchGifs = await getAnimations();
      if (typeof fetchGifs === 'string') {
        setIsGifsFailed(true);
        return;
      }
      const transformed = formatGiphyResult(fetchGifs);
      setGifs(transformed);
    };
    const loadStickers = async () => {
      const fetchStickers = await getStickers();
      if (typeof fetchStickers === 'string') {
        setIsStickersFailed(true);
        return;
      }
      const transformed = formatGiphyResult(fetchStickers);
      setStickers(transformed);
    };
    loadAnimations();
    loadStickers();
  }, []);

  return {
    gifs, stickers, isGifsFailed, isStickersFailed,
  };
};
