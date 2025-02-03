import { PhotoProps } from 'react-ikusi';
import { SizeKeys } from '../service/constants';

const urlKey = (key: string) => `url${key}`;
const widthKey = (key: string) => `width${key}`;
const heightKey = (key: string) => `height${key}`;

const urls: string[] = [];
const sizes: string[] = [];
Object.values(SizeKeys).forEach((k: string) => {
  urls.push(urlKey(k));
  sizes.push(widthKey(k));
  sizes.push(heightKey(k));
});

type FlickrResult = { [K in typeof urls[number]]: string }
  & { [K in typeof sizes[number]]: number }
  & {
    id: string;
    title: string;
    tags?: string;
  };

/**
 * Transforms Flickr result to Photo to be displayed inside Gallery
 * @param result FlickrAPI result data
 * @param def Default picture object
 * @param big Big picture object
 * @returns Serialized Photo
 */

export interface TransformedPhotoProps extends PhotoProps {
  tag?: string;
}
export const transformToPhoto = (result: FlickrResult[], def: SizeKeys, big: SizeKeys): TransformedPhotoProps[] => {
  // calculate attribute names to get information from result
  const urlAttribute = urlKey(def);
  const widthAttribute = widthKey(def);
  const heightAttribute = heightKey(def);
  const bigUrlAttribute = urlKey(big);
  // map result to PhotoProps
  return result.map((r) => ({
    src: r[urlAttribute],
    width: r[widthAttribute],
    height: r[heightAttribute],
    bigSrc: r[bigUrlAttribute],
    id: r.id,
    title: r.title,
    tag: r.tags,
  }));
};
