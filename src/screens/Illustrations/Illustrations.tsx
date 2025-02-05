import React, { useEffect } from 'react';
import { Gallery, PhotoProps } from 'react-ikusi';
import { IllustrationsAlbums } from '../../service/data';
import { illustrationsConfigurations } from '../../service/constants';
import './Illustrations.css';

import { HamburgerMenu, LoaderInline } from '../../components';
import { usePhotos } from '../../hooks/usePhotos';
import { usePrevious } from '../../hooks/usePrevious';

const Illustrations = () => {
  const [photosetId, setPhotosetId] = React.useState<string>(IllustrationsAlbums[0].id);
  const [illustrationsState, setIllustrationsState] = React.useState<Record<string, PhotoProps[]>>({});
  const { photos } = usePhotos({ photosetId, shouldFetch: !illustrationsState[photosetId] });
  const previousPhotos = usePrevious(photos);

  useEffect(() => {
    if (photos?.length && previousPhotos !== photos && !illustrationsState[photosetId]) {
      setIllustrationsState((prevState) => ({
        ...prevState,
        [photosetId]: photos,
      }));
    }
  }, [illustrationsState, photos, photosetId, previousPhotos]);
  return (
    <div className="Illustrations">
      <div className="title"/>
      <HamburgerMenu
        menuItems={IllustrationsAlbums}
        onSelectItem={(album:string) => setPhotosetId(album)}
        activeItem={photosetId}
      />
      <div className="container">
        {illustrationsState[photosetId] ? (
          <Gallery
            photos={illustrationsState[photosetId]}
            configurations={illustrationsConfigurations}
          />
        )
          : <LoaderInline />}

      </div>
    </div>
  );
};

export default Illustrations;
