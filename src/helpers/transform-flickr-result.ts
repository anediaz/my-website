import { FlicrSizeType, SIZES } from '../service/constants';

interface FlickrResult {
  'url_n': string;
  'url_o': string;
  'url_m': string;
  'url_c': string;
  'url_l': string;
  'width_n': string;
  'width_o': string;
  'width_m': string;
  'width_c': string;
  'width_l': string;
  'height_n': string;
  'height_o': string;
  'height_m': string;
  'height_c': string;
  'height_l': string;
  id: string
}

export const transformFlickrResult = (result: FlickrResult[], def: FlicrSizeType, big:FlicrSizeType) => result.map((r) => ({
  src: r[SIZES[def].url],
  width: r[SIZES[def].width],
  height: r[SIZES[def].height],
  bigSrc: r[SIZES[big].url],
  id: r.id,
}));
