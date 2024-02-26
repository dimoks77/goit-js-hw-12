import{a as g,S as y,i as b}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function u(e,o){const n="42557363-2349d8dc8525cd1cea516a01b",s="https://pixabay.com/api/",r={key:n,q:e,orientation:"horizontal",per_page:15,page:o,safesearch:!0};return(await g.get(s,{params:r})).data}function v(e){return`

  <li class="gallery-item">
  <a href="${e.webformatURL}" class="image-link">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
  </a>
  <div class="comments">
      <div class="desc">
          <p class="label">Likes</p>
          <p class="value">${e.likes}</p>
      </div>
      <div class="desc">
          <p class="label">Views</p>
          <p class="value">${e.views}</p>
      </div>
      <div class="desc">
          <p class="label">Comments</p>
          <p class="value">${e.comments}</p>
      </div>
      <div class="desc">
          <p class="label">Downloads</p>
          <p class="value">${e.downloads}</p>
      </div>
  </div>
</li>

`}function E(e){return e.map(v).join("")}const w={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},a={formElem:document.querySelector(".js-search-form"),photoListElem:document.querySelector(".js-article-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let c,i,p;a.formElem.addEventListener("submit",S);a.btnLoadMore.addEventListener("click",P);async function S(e){if(e.preventDefault(),c=e.target.elements.query.value.trim(),i=1,!c){d("Empty field");return}f();try{const o=await u(c,i);o.totalHits===0&&d("Нічого не знайдено!"),p=Math.ceil(o.totalHits/15),a.photoListElem.innerHTML="",m(o.hits)}catch(o){d(o)}h(),L(),e.target.reset()}async function P(){i+=1,f();const e=await u(c,i);m(e.hits),h(),L(),a.photoListElem.firstElementChild.getBoundingClientRect().height,scrollBy({behavior:"smooth",top:10})}function m(e){const o=E(e);a.photoListElem.insertAdjacentHTML("beforeend",o),new y(".gallery a",w).refresh()}function M(){a.btnLoadMore.classList.remove("hidden")}function T(){a.btnLoadMore.classList.add("hidden")}function f(){a.loadElem.classList.remove("hidden")}function h(){a.loadElem.classList.add("hidden")}function d(e){b.error({title:"Error",message:e})}function L(){i>=p?T():M()}
//# sourceMappingURL=commonHelpers.js.map
