const apiKey = '94QJKxaINxpr3Px6fWMIZtiyOPAKmXJF';
const searchTerm = '@ane_naiz';
const limit = 25;
const offset = 0;
const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;

const getAnimations = async () => {
  const response = await fetch(searchUrl);
  return response && response.ok
    ? (await response.json()).data.map((a) => a.images.original.url)
    : { Error: 'Error while fetching user\'s photosets' };
};

// (await response.json()).photosets.photoset.map((p) => p.id)

const GIPHYApi = {
  getAnimations,
};

export default GIPHYApi;
