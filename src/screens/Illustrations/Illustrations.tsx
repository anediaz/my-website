import React, { useReducer, useEffect } from 'react';
import { Gallery, PhotoProps } from 'react-ikusi';
import { IllustrationsAlbums } from '../../service/data';
import { getPhotos } from '../../service/FlickrAPI';
import { transformToGalleryPhoto } from '../../helpers';
import { SIZES, illustrationsConfigurations } from '../../service/constants';
import './Illustrations.css';

import { HamburgerMenu } from '../../components';

const { original: def, large1024: big } = SIZES;
const sizes = [def.url, big.url];

type ActionType = 'ADD_NEW_PHOTOS'|'SET_ALBUM';

const initialIllustrations = {
  selectedAlbum: '',
  loadedPhotos: [],
};

interface ActionProps {
  type: ActionType;
  selectedAlbum: string;
  newPhotos?: PhotoProps[] | [];
}

interface LoadedPhotosProps {
  albumId: string;
  photos: PhotoProps[];
}

interface StateProps {
  selectedAlbum:string;
  loadedPhotos: LoadedPhotosProps[] | [];
}

const illustrationsReducer = (state: StateProps, action: ActionProps): StateProps => {
  const { selectedAlbum, newPhotos, type } = action;
  switch (type) {
    case 'ADD_NEW_PHOTOS':
      return {
        selectedAlbum,
        loadedPhotos: [
          ...state.loadedPhotos,
          { albumId: selectedAlbum, photos: newPhotos || [] },
        ],
      };
    case 'SET_ALBUM':
      return {
        ...state,
        selectedAlbum,
      };
    default:
      return { ...state };
  }
};

const Illustrations = () => {
  const [illustrationsState, dispatch] = useReducer(
    illustrationsReducer,
    initialIllustrations,
  );

  useEffect(() => {
    const loadPhotos = async (selectedAlbum:string) => {
      const photos = await getPhotos(selectedAlbum, sizes);
      dispatch({
        type: 'ADD_NEW_PHOTOS',
        newPhotos: transformToGalleryPhoto(photos, 'original', 'large1024'),
        selectedAlbum,
      });
    };
    loadPhotos(IllustrationsAlbums[0].id);
  }, []);

  const getCurrentPhotos = (photos: LoadedPhotosProps[], albumId: string) => {
    const photosObject = photos.find((p) => p.albumId === albumId);
    return photosObject ? photosObject.photos : null;
  };

  const onSelectAlbum = async (selectedAlbum:string) => {
    const photosExist = getCurrentPhotos(
      illustrationsState.loadedPhotos,
      selectedAlbum,
    );
    if (photosExist) {
      dispatch({
        type: 'SET_ALBUM',
        selectedAlbum,
      });
    } else {
      const photos = await getPhotos(selectedAlbum, sizes);
      dispatch({
        type: 'ADD_NEW_PHOTOS',
        newPhotos: transformToGalleryPhoto(photos, 'original', 'large1024'),
        selectedAlbum,
      });
    }
  };

  const currentPhotos = getCurrentPhotos(
    illustrationsState.loadedPhotos,
    illustrationsState.selectedAlbum,
  );

  return (
    <div className="Illustrations">
      <div className="title" />
      <HamburgerMenu
        menuItems={IllustrationsAlbums}
        onSelectItem={onSelectAlbum}
        activeItem={illustrationsState.selectedAlbum}
      />
      <div className="container">
        <Gallery
          photos={currentPhotos || []}
          configurations={illustrationsConfigurations}
        />
      </div>
    </div>
  );
};

export default Illustrations;
