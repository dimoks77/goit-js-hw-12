import{a as y,S as b,i as v}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();async function p(e,o){const l="42557363-2349d8dc8525cd1cea516a01b",s="https://pixabay.com/api/",i={key:l,q:e,orientation:"horizontal",per_page:15,page:o,safesearch:!0};return(await y.get(s,{params:i})).data}function E(e){return`

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

`}function w(e){return e.map(E).join("")}const P={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},m=new b(".gallery a",P),r={formElem:document.querySelector(".js-search-form"),photoListElem:document.querySelector(".js-photo-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let n,a,u;r.formElem.addEventListener("submit",S);r.btnLoadMore.addEventListener("click",M);async function S(e){if(e.preventDefault(),n=e.target.elements.query.value.trim(),a=1,!n){c("Empty field");return}h();try{const o=await p(n,a);o.totalHits===0&&c("Нічого не знайдено!"),u=Math.ceil(o.totalHits/15),r.photoListElem.innerHTML="",f(o.hits),m.refresh()}catch(o){c(o)}L(),g(),e.target.reset()}async function M(){a+=1,h();const e=await p(n,a);f(e.hits),m.refresh(),L(),g(),r.photoListElem.firstElementChild.getBoundingClientRect().height,scrollBy({behavior:"smooth",top:10})}function f(e){const o=w(e);r.photoListElem.insertAdjacentHTML("beforeend",o)}function T(){r.btnLoadMore.classList.remove("hidden")}function $(){r.btnLoadMore.classList.add("hidden")}function h(){r.loadElem.classList.remove("hidden")}function L(){r.loadElem.classList.add("hidden")}function c(e){v.error({title:"Error",message:e})}function g(){a>=u||a===u-1&&totalHits%perPage===0?($(),a>1&&c("We're sorry, but you've reached the end of search results.")):T()}
//# sourceMappingURL=commonHelpers.js.map
