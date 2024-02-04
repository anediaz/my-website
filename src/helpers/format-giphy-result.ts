import { GiphyResult } from '../service/GIPHYApi';

export interface FormattedGiphyResult {
    src: string;
    width: number;
    height: number;
    bigSrc: string;
    id: string;
}

export const formatGiphyResult = (result:GiphyResult[]):FormattedGiphyResult[] => result.map(({ images, id }) => {
  const { original } = images;
  const serialized = {
    src: original.url,
    width: Math.floor(original.width),
    height: Math.floor(original.width),
    bigSrc: original.url,
    id,
  };
  return serialized;
});
