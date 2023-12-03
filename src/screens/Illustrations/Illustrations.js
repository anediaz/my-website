import React, { useReducer, useEffect } from 'react';
import { Gallery } from 'react-ikusi';
import { illustrations } from '../../service/data.json';
import FlickrAPI from '../../service/FlickrAPI';
import { transformResult } from '../../service/utils';
import { SIZES, illustrationsConfigurations } from '../../service/constants.ts';
import './Illustrations.css';

import { HamburgerMenu } from '../../components';

const { original: def, large1024: big } = SIZES;
const sizes = [`url${def}`, `url${big}`];

const ACTION_TYPES = {
  ADD_NEW_PHOTOS: 'ADD_NEW_PHOTOS',
  SET_ALBUM: 'SET_ALBUM',
};

const initialIllustrations = {
  selectedAlbum: '',
  loadedPhotos: [],
};

const illustrationsReducer = (state, action) => {
  const { selectedAlbum, newPhotos } = action;
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_PHOTOS:
      return {
        selectedAlbum,
        loadedPhotos: [
          ...state.loadedPhotos,
          { albumId: selectedAlbum, photos: newPhotos },
        ],
      };
    case ACTION_TYPES.SET_ALBUM:
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
    const loadPhotos = async (selectedAlbum) => {
      const photos = await FlickrAPI.getPhotos(selectedAlbum, sizes);
      dispatch({
        type: ACTION_TYPES.ADD_NEW_PHOTOS,
        newPhotos: transformResult(photos, def, big),
        selectedAlbum,
      });
    };
    loadPhotos(illustrations.albums[0].id, sizes);
  }, []);

  const getCurrentPhotos = (photos, albumId) => {
    const photosObject = photos.find((p) => p.albumId === albumId);
    return photosObject ? photosObject.photos : null;
  };

  const onSelectAlbum = async (selectedAlbum) => {
    const photosExist = getCurrentPhotos(
      illustrationsState.loadedPhotos,
      selectedAlbum,
    );
    if (photosExist) {
      dispatch({
        type: ACTION_TYPES.SET_ALBUM,
        selectedAlbum,
      });
    } else {
      const photos = await FlickrAPI.getPhotos(selectedAlbum, sizes);
      dispatch({
        type: ACTION_TYPES.ADD_NEW_PHOTOS,
        newPhotos: transformResult(photos, def, big),
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
        menuItems={illustrations.albums}
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
