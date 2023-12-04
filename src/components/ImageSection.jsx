import React, { useState, useEffect } from 'react';
import { Gallery } from 'react-ikusi';
import { sufflePhotos, transformFlickrResult } from '../helpers';
import { getPhotos } from '../service/FlickrAPI';
import {
  SIZES,
  PHOTOSET_ID,
  imageSectionConfigurations,
} from '../service/constants';

const { original: def, large1024: big } = SIZES;

const ImageSection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function loadPhotos() {
      const result = await getPhotos(PHOTOSET_ID, [
        def.url,
        big.url,
      ]);
      setPhotos(transformFlickrResult(result, 'original', 'large1024'));
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

export default ImageSection;
