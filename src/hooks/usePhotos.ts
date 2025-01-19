import { useEffect, useState } from 'react';
import { TransformedPhotoProps, transformToPhoto } from '../helpers';
import { getPhotos } from '../service/FlickrAPI';
import { SizeKeys } from '../service/constants';

const defDefault = SizeKeys.medium800;
const bigDefault = SizeKeys.large;

interface usePhotosProps {
  photosetId: string,
  withTags?: boolean,
  shouldFetch?: boolean,
  def?: SizeKeys,
  big?: SizeKeys
}

export const usePhotos = ({
  photosetId, withTags = false, shouldFetch = true, def = defDefault, big = bigDefault,
}: usePhotosProps) => {
  const [photosState, setPhotosState] = useState({ isPhotosFailed: false, photos: <TransformedPhotoProps[]>[] });
  useEffect(() => {
    // method that fetches and transforms photos to the right format
    const loadPhotos = async (id: string) => {
      const params = [
        `url${def}`,
        `url${bigDefault}`,
        ...(withTags ? ['tags'] : []),
      ];
      const result = await getPhotos(id, params);
      if (typeof result === 'string') {
        setPhotosState({ isPhotosFailed: true, photos: [] });
        return;
      }
      const transformed = transformToPhoto(result, def, big);
      setPhotosState({ isPhotosFailed: false, photos: transformed });
    };
    if (shouldFetch) {
      loadPhotos(photosetId);
    }
  }, [big, def, photosetId, shouldFetch, withTags]);

  return photosState;
};
