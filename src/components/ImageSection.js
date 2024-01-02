import React, { useState, useEffect } from 'react';
import { Gallery } from 'react-ikusi';
import { transformResult, sufflePhotos } from '../service/utils';
import FlickrAPI from '../service/FlickrAPI';
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
      const result = await FlickrAPI.getPhotos(PHOTOSET_ID, [
        `url${def}`,
        `url${big}`,
      ]);
      setPhotos(transformResult(result, def, big));
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
