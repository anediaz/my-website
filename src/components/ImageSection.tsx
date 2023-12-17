import React, { useState, useEffect } from 'react';
import { Gallery, PhotoProps } from 'react-ikusi';
import { sufflePhotos, transformToGalleryPhoto } from '../helpers';
import { getPhotos } from '../service/FlickrAPI';
import {
  SIZES_URLS,
  PHOTOSET_ID,
  imageSectionConfigurations,
} from '../service/constants';

const { original: def, large1024: big } = SIZES_URLS;

export const ImageSection = () => {
  const [photos, setPhotos] = useState<PhotoProps[]>([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await getPhotos(PHOTOSET_ID, [
        def,
        big,
      ]);
      setPhotos(transformToGalleryPhoto(result, 'original', 'large1024'));
    }
    // Execute the created function directly
    loadPhotos();
  }, []);

  return (
    <div className="image-section">
      {photos.length ? (
        <Gallery
          photos={sufflePhotos(photos)}
          configurations={imageSectionConfigurations}
        />
      ) : null}
    </div>
  );
};
