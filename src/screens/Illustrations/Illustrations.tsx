import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Gallery, PhotoProps } from 'react-ikusi';
import { IllustrationsAlbums } from '../../service/data';
import { illustrationsConfigurations } from '../../service/constants';
import './Illustrations.css';

import { HamburgerMenu, LoaderInline } from '../../components';
import { usePhotos } from '../../hooks/usePhotos';
import { usePrevious } from '../../hooks/usePrevious';

const Illustrations = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  
  const getCategoryAlbum = (categoryParam?: string) => {
    if (!categoryParam) return IllustrationsAlbums[0];
    const album = IllustrationsAlbums.find(album => album.ariaLabel === categoryParam);
    return album || IllustrationsAlbums[0];
  };

  const getAlbumByPhotosetId = (photosetId: string) => {
    return IllustrationsAlbums.find(album => album.id === photosetId);
  };

  const initialAlbum = getCategoryAlbum(category);
  const [photosetId, setPhotosetId] = React.useState<string>(initialAlbum.id);
  const [illustrationsState, setIllustrationsState] = React.useState<Record<string, PhotoProps[]>>({});
  const { photos } = usePhotos({ photosetId, shouldFetch: !illustrationsState[photosetId] });
  const previousPhotos = usePrevious(photos);

  useEffect(() => {
    const categoryAlbum = getCategoryAlbum(category);
    if (categoryAlbum.id !== photosetId) {
      setPhotosetId(categoryAlbum.id);
    }
  }, [category, photosetId]);

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
        onSelectItem={(albumId: string) => {
          const selectedAlbum = getAlbumByPhotosetId(albumId);
          if (selectedAlbum) {
            navigate(`/illustrations/${selectedAlbum.ariaLabel}`);
          }
        }}
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
