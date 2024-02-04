import { PhotoProps } from 'react-ikusi';
import { FlickrSizeProps } from '../service/constants';

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

/**
 * Transforms Flickr result to Photo to be displayed inside Gallery
 * @param result FlickrAPI result data
 * @param def Default picture object
 * @param big Big picture object
 * @returns Serialized Photo
 */
export const transformToGalleryPhoto = (result: FlickrResult[], def: FlickrSizeProps, big:FlickrSizeProps):PhotoProps[] => result.map((r) => ({
  src: r[def.url],
  width: r[def.width],
  height: r[def.height],
  bigSrc: r[big.url],
  id: r.id,
}));

/** Props of a image to be displayed individually (not inside Gallery component) */
export type ImageProps = Pick<PhotoProps, 'src' | 'bigSrc'|'id'> & {tag?:string};

/**
 * Transforms Flickr result to Photo to be displayed indivially
 * @param result FlickrAPI result data
 * @param def Default picture object
 * @param big Big picture object
 * @returns Serialized Photo
 */
export const transformToPhoto = (result: FlickrResult[], def: FlickrSizeProps, big:FlickrSizeProps):ImageProps[] => {
  const transformed = result.map((r) => ({
    src: r[def.url],
    bigSrc: r[big.url],
    id: r.id,
    tag: r.tags,
  }));
  return transformed;
};
