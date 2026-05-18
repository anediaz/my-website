import { FLICKR_USER_ID } from "./constants";

interface photosetProps {
  id: string;
}

const PHOTOS_CACHE_PREFIX = 'flickr:photos:';
const PHOTOS_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

type CacheEntry<T> = { value: T; expiresAt: number };

const readCache = <T>(key: string): T | null => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (!entry || typeof entry.expiresAt !== 'number') return null;
    if (Date.now() > entry.expiresAt) {
      localStorage.removeItem(key);
      return null;
    }
    return entry.value;
  } catch {
    return null;
  }
};

const writeCache = <T>(key: string, value: T) => {
  try {
    const entry: CacheEntry<T> = { value, expiresAt: Date.now() + PHOTOS_CACHE_TTL_MS };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // ignore quota / privacy-mode errors
  }
};

export const getPhotosets = async () => {
  const getPhotosetsUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${import.meta.env.VITE_FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=true`;
  try {
    const response = await fetch(getPhotosetsUrl);
    return response.ok
      ? (await response.json()).photosets.photoset.map((p: photosetProps) => p.id)
      : 'Error while fetching user\'s photosets';
  } catch {
    return 'Error while fetching user\'s photosets';
  }
};

export const getPhotos = async (photoSetId: string, sizes: string[]) => {
  const sizesParam = sizes.join(',');
  const cacheKey = `${PHOTOS_CACHE_PREFIX}${photoSetId}:${sizesParam}`;
  const cached = readCache<unknown[]>(cacheKey);
  if (cached) return cached;

  const getPhotosUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${import.meta.env.VITE_FLICKR_API_KEY}&photoset_id=${photoSetId}&extras=${sizesParam}&format=json&nojsoncallback=true`;
  try {
    const response = await fetch(getPhotosUrl);
    if (!response.ok) return `Error while reading photoset=${photoSetId}`;
    const photos = (await response.json()).photoset.photo;
    writeCache(cacheKey, photos);
    return photos;
  } catch {
    return `Error while reading photoset=${photoSetId}`;
  }
};
