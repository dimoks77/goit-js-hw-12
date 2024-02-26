import{a as g,S as y,i as b}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function u(e,s){const i="42557363-2349d8dc8525cd1cea516a01b",t="https://pixabay.com/api/",o={key:i,q:e,orientation:"horizontal",per_page:15,page:s,safesearch:!0};return(await g.get(t,{params:o})).data}function v(e){return`

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

`}function E(e){return e.map(v).join("")}const w={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},r={formElem:document.querySelector(".js-search-form"),articleListElem:document.querySelector(".js-article-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let l,a,m;r.formElem.addEventListener("submit",S);r.btnLoadMore.addEventListener("click",M);async function S(e){if(e.preventDefault(),l=e.target.elements.query.value.trim(),a=1,!l){d("Empty field");return}p();try{const s=await u(l,a);s.totalResults===0&&d("Sorry!"),m=Math.ceil(s.totalResults/15),r.articleListElem.innerHTML="",f(s.hits)}catch(s){d(s)}h(),L(),e.target.reset()}async function M(){a+=1,p();const e=await u(l,a);f(e.hits),h(),L(),r.articleListElem.firstElementChild.getBoundingClientRect().height,scrollBy({behavior:"smooth",top:10})}function f(e){const s=E(e);r.articleListElem.insertAdjacentHTML("beforeend",s),new y(".gallery a",w).refresh()}function R(){r.btnLoadMore.classList.remove("hidden")}function q(){r.btnLoadMore.classList.add("hidden")}function p(){r.loadElem.classList.remove("hidden")}function h(){r.loadElem.classList.add("hidden")}function d(e){b.error({title:"Error",message:e})}function L(){a>=m?q():R()}
//# sourceMappingURL=commonHelpers.js.map
