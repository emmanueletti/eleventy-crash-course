const EleventyFetch = require('@11ty/eleventy-fetch');

const getProducts = async () => {
  const url = 'https://fakestoreapi.com/products';
  const product = await EleventyFetch(url, { type: 'json' });
  return product;
};

module.exports = getProducts;
