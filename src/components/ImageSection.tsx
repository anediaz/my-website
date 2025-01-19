import { Gallery } from 'react-ikusi';
import { sufflePhotos } from '../helpers';
import {
  PHOTOSET_ID,
  imageSectionConfigurations,
} from '../service/constants';
import { usePhotos } from '../hooks/usePhotos';

export const ImageSection = () => {
  const { photos, isPhotosFailed } = usePhotos({ photosetId: PHOTOSET_ID });

  return (
    <div className="image-section">
      {isPhotosFailed ? <div>Failed to load images</div> : null}
      {photos && photos.length ? (
        <Gallery
          photos={sufflePhotos(photos)}
          configurations={imageSectionConfigurations}
        />
      ) : null}
    </div>
  );
};
