import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';
import { photosTemplate } from './js/render-functions.js';

// SimpleLightbox params
const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
  widthRatio: 0.9,
  scaleImageToRatio: true,
};

const lightbox = new SimpleLightbox('.gallery a', options);

const refs = {
  formElem: document.querySelector('.js-search-form'),
  photoListElem: document.querySelector('.js-photo-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

let query;
let page;
let maxPage;

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  page = 1;
  if (!query) {
    showError('Empty field');
    return;
  }
  showLoader();
  try {
    const data = await fetchPhotos(query, page);
    if (data.totalHits === 0) {
      showError('Нічого не знайдено!');
    }
    maxPage = Math.ceil(data.totalHits / 15);
    
    refs.photoListElem.innerHTML = '';
    renderPhotos(data.hits);
    lightbox.refresh(); 

  } catch (err) {
    showError(err);
  }

  hideLoader();
  checkBtnVisibleStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  showLoader();
  const data = await fetchPhotos(query, page);
  renderPhotos(data.hits);
  lightbox.refresh();
  hideLoader();
  checkBtnVisibleStatus();
  const height = refs.photoListElem.firstElementChild.getBoundingClientRect().height;
  scrollBy({
    behavior: 'smooth',
    top: 10,
  });
}
function renderPhotos(photos) {
  const markup = photosTemplate(photos);
  refs.photoListElem.insertAdjacentHTML('beforeend', markup);

}
function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}
function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

function showError(msg) {
  iziToast.error({
    title: 'Error',
    message: msg,
  });
}

function checkBtnVisibleStatus() {
  if (page >= maxPage || (page === maxPage - 1 && totalHits % perPage === 0)) {

    hideLoadBtn();
    if (page > 1) { showError("We're sorry, but you've reached the end of search results."); }
  } else {
    showLoadBtn();
  }
}
