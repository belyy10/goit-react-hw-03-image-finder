// import axios from 'axios';

// const API_KEY = '30103924-a4773e2d607068596576fe7b3';

// export const fetchImg = async ({ search, page }) => {
//   const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&lang=en&lang=uk&per_page=12&page=${page}`;
//   try {
//     const response = await axios.get(url);
//     const images = normalizePicture(response.data.hits);
//     const pages = Math.ceil(response.data.totalHits / 12);
//     return { images, pages };
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// const normalizePicture = images => {
//   const normalizedData = images.map(
//     ({ id, tags, webformatURL, largeImageURL }) => {
//       return { id, tags, webformatURL, largeImageURL };
//     }
//   );
//   return normalizedData;
// };
