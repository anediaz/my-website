import { FLICKR } from './constants';

const getUrl = (photoSetId, sizes) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR.api_key}&photoset_id=${photoSetId}&extras=${sizes}&format=json&nojsoncallback=true`;

const photosetsUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR.api_key}&user_id=${FLICKR.user_id}&format=json&nojsoncallback=true`;

const getPhotosets = async () => {
  const response = await fetch(photosetsUrl);
  return response && response.ok
    ? (await response.json()).photosets.photoset.map((p) => p.id)
    : { Error: 'Error while fetching user\'s photosets' };
};

const getPhotos = async (photoSetId, sizes) => {
  const sizesParam = sizes.join(',');
  const response = await fetch(getUrl(photoSetId, sizesParam));
  return response && response.ok
    ? (await response.json()).photoset.photo
    : { Error: `Error while reading photoset=${photoSetId}` };
};

const FlickrAPI = {
  getPhotos,
  getPhotosets,
};

export default FlickrAPI;
