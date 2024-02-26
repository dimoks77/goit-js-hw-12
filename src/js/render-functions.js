function articleTemplate(article) {
  const { pageURL, previewURL, webformatURL, tags, likes, views, comments, downloads } = article;
  return `

  <li class="gallery-item">
  <a href="${article.webformatURL}" class="image-link">
      <img class="gallery-image" src="${article.webformatURL}" alt="${article.tags}">
  </a>
  <div class="comments">
      <div class="desc">
          <p class="label">Likes</p>
          <p class="value">${article.likes}</p>
      </div>
      <div class="desc">
          <p class="label">Views</p>
          <p class="value">${article.views}</p>
      </div>
      <div class="desc">
          <p class="label">Comments</p>
          <p class="value">${article.comments}</p>
      </div>
      <div class="desc">
          <p class="label">Downloads</p>
          <p class="value">${article.downloads}</p>
      </div>
  </div>
</li>

`;
}
export function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}


