import axios from 'axios';
export let per_page = 15;

export async function fetchPhotos(query, currentPage) {
  const API_KEY = '42557363-2349d8dc8525cd1cea516a01b';
  const BASE_URL = 'https://pixabay.com/api/';
  const END_POINT = '';
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
    per_page: per_page,
    page: currentPage,
    safesearch: true,
  };
  const res = await axios.get(url, { params });
  return res.data;
}