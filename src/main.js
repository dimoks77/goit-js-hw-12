import { fetchImages } from './js/pixabay-api';
import { handleResponse } from './js/render-functions';
const form = document.querySelector('#form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const more = document.querySelector('#loadmore');

loader.style.display = 'none';
let page;
let userInput;

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = document.getElementById('search').value.trim();
    if (!userInput) {
      return;
    }
    loader.style.display = 'inline-block';
    more.style.display = 'inline-block';
    gallery.innerHTML = '';
    fetchImages(userInput,1)
      .then(data => handleResponse(data, gallery))
      .finally(() => {
        loader.style.display = 'none';
      });
  });
  
  
  more.addEventListener('click', event => {
    event.preventDefault();
    page++;
    console.log(page);
    fetchImages(userInput,page)
      .then(data => handleResponse(data, gallery))
      .finally(() => {
        loader.style.display = 'none';
      });
  });
});


