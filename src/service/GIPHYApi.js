const apiKey = '94QJKxaINxpr3Px6fWMIZtiyOPAKmXJF';
const searchTerm = '@ane_naiz';
const limit = 25;
const offset = 0;
const animationsSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;
const stickersSearchUrl = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;
const getAnimations = async () => {
  const response = await fetch(animationsSearchUrl);
  return response && response.ok
    ? (await response.json()).data
    : { Error: 'Error while fetching user\'s giphy' };
};

const getStickers = async () => {
  const response = await fetch(stickersSearchUrl);
  return response && response.ok
    ? (await response.json()).data
    : { Error: 'Error while fetching user\'s giphy' };
};

const GIPHYApi = {
  getAnimations, getStickers,
};

export default GIPHYApi;