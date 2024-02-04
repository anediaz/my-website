import { useEffect, useState } from 'react';
import { PhotoProps } from 'react-ikusi';
import { transformToGalleryPhoto } from '../helpers';
import { getPhotos } from '../service/FlickrAPI';
import { SIZES } from '../service/constants';

const defDefault = SIZES.original;
const bigDefault = SIZES.large1024;

export const useGallery = (photosetId:string, def = defDefault, big = bigDefault) => {
  const [photos, setPhotos] = useState<PhotoProps[]>();
  const [isPhotosFailed, setIsPhotosFailed] = useState(false);
  useEffect(() => {
    const loadPhotos = async () => {
      const fetchPhotos = await getPhotos(photosetId, [
        def.url,
        big.url,
      ]);
      if (typeof fetchPhotos === 'string') {
        setIsPhotosFailed(true);
        return;
      }
      const transformed = transformToGalleryPhoto(fetchPhotos, def, big);
      setPhotos(transformed);
    };
    loadPhotos();
  }, []);

  return {
    photos, isPhotosFailed,
  };
};
