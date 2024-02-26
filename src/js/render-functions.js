function photoTemplate(item) {
  const { pageURL, previewURL, webformatURL, tags, likes, views, comments, downloads } = item;
  return `

  <li class="gallery-item">
  <a href="${item.webformatURL}" class="image-link">
      <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}">
  </a>
  <div class="comments">
      <div class="desc">
          <p class="label">Likes</p>
          <p class="value">${item.likes}</p>
      </div>
      <div class="desc">
          <p class="label">Views</p>
          <p class="value">${item.views}</p>
      </div>
      <div class="desc">
          <p class="label">Comments</p>
          <p class="value">${item.comments}</p>
      </div>
      <div class="desc">
          <p class="label">Downloads</p>
          <p class="value">${item.downloads}</p>
      </div>
  </div>
</li>

`;
}
export function photosTemplate(articles) {
  return articles.map(photoTemplate).join('');
}


