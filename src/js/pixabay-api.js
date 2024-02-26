import axios from 'axios';
export async function fetchArticles(query, currentPage) {
  const API_KEY = '42557363-2349d8dc8525cd1cea516a01b';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}`;
  const params = {
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
    per_page: 15,
    page: currentPage,
    safesearch: true,
  };
  const res = await axios.get(url, { params });
  return res.data;
}