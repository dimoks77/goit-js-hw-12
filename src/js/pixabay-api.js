import axios from 'axios';

const apiKey = '42557363-2349d8dc8525cd1cea516a01b';
const baseUrl = 'https://pixabay.com/api/';
const endPoint = '';
const perPage = 15; 
let currentPage = 1;

export function fetchImages(userInput) {
  const queryParams = new URLSearchParams({
    key: apiKey,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: currentPage
  });

  const url = `${baseUrl}${endPoint}?${queryParams}`;

  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it further if needed
    });
}