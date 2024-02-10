import { FLICKR } from './constants';

interface photosetProps {
  id: string;
}
export const getPhotosets = async () => {
  const getPhotosetsUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR.api_key}&user_id=${FLICKR.user_id}&format=json&nojsoncallback=true`;
  const response = await fetch(getPhotosetsUrl);
  return response && response.ok
    ? (await response.json()).photosets.photoset.map((p:photosetProps) => p.id)
    : 'Error while fetching user\'s photosets';
};

export const getPhotos = async (photoSetId:string, sizes:string[]) => {
  const sizesParam = sizes.join(',');
  const getPhotosUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR.api_key}&photoset_id=${photoSetId}&extras=${sizesParam}&format=json&nojsoncallback=true`;
  const response = await fetch(getPhotosUrl);
  return response && response.ok
    ? (await response.json()).photoset.photo
    : `Error while reading photoset=${photoSetId}`;
};
