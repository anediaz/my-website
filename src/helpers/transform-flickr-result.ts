import { PhotoProps } from 'react-ikusi';
import { FlicrSizeType, SIZES } from '../service/constants';

interface FlickrResult {
  'url_n': string;
  'url_o': string;
  'url_m': string;
  'url_c': string;
  'url_l': string;
  'width_n': number;
  'width_o': number;
  'width_m': number;
  'width_c': number;
  'width_l': number;
  'height_n': number;
  'height_o': number;
  'height_m': number;
  'height_c': number;
  'height_l': number;
  id: string;
  tags?: string;
}

export const transformToGalleryPhoto = (result: FlickrResult[], def: FlicrSizeType, big:FlicrSizeType):PhotoProps[] => result.map((r) => ({
  src: r[SIZES[def].url],
  width: r[SIZES[def].width],
  height: r[SIZES[def].height],
  bigSrc: r[SIZES[big].url],
  id: r.id,
}));

export type ImageProps = Pick<PhotoProps, 'src' | 'bigSrc'|'id'> & {tag?:string};

export const transformToPhoto = (result: FlickrResult[], def: FlicrSizeType, big:FlicrSizeType):ImageProps[] => result.map((r) => ({
  src: r[SIZES[def].url],
  bigSrc: r[SIZES[big].url],
  id: r.id,
  tag: r.tags,
}));
