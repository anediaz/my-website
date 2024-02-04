import { useEffect, useState } from 'react';
import { ImageProps, transformToPhoto } from '../helpers';
import { getPhotos } from '../service/FlickrAPI';
import { SIZES } from '../service/constants';

const defDefault = SIZES.original;
const bigDefault = SIZES.large1024;

export const useTaggedPhotos = (photosetId:string, def = defDefault, big = bigDefault) => {
  const [photos, setPhotos] = useState<ImageProps[]>();
  const [isPhotosFailed, setIsPhotosFailed] = useState(false);
  useEffect(() => {
    const loadPhotos = async () => {
      const fetchPhotos = await getPhotos(photosetId, [
        def.url,
        big.url,
        'tags',
      ]);
      if (typeof fetchPhotos === 'string') {
        setPhotos([]);
        setIsPhotosFailed(true);
        return;
      }
      const transformed = transformToPhoto(fetchPhotos, def, big);
      setIsPhotosFailed(false);
      setPhotos(transformed);
    };
    loadPhotos();
  }, []);

  return {
    photos, isPhotosFailed,
  };
};
