export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=XXDSvZIrCYW1OFlNGtrH9DXKRF4t4Vd3&q=${category}&limit=30`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
