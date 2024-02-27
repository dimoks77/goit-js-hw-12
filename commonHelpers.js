import{a as b,S as v,i as E}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();let u=15;async function p(e,t){const l="42557363-2349d8dc8525cd1cea516a01b",s="https://pixabay.com/api/",i={key:l,q:e,orientation:"horizontal",per_page:u,page:t,safesearch:!0};return(await b.get(s,{params:i})).data}function w(e){return`

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

`}function S(e){return e.map(w).join("")}const P={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},m=new v(".gallery a",P),a={formElem:document.querySelector(".js-search-form"),photoListElem:document.querySelector(".js-photo-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")};let n,r,f;a.formElem.addEventListener("submit",M);a.btnLoadMore.addEventListener("click",T);async function M(e){if(e.preventDefault(),n=e.target.elements.query.value.trim(),r=1,!n){c("Empty field");return}g();try{const t=await p(n,r);t.totalHits===0&&c("Нічого не знайдено!"),f=Math.ceil(t.totalHits/u),console.log("data.totalHits:",t.totalHits),a.photoListElem.innerHTML="",h(t.hits),m.refresh()}catch(t){c(t)}L(),y(),e.target.reset()}async function T(){r+=1,g();const e=await p(n,r);h(e.hits),m.refresh(),L(),y();const t=a.photoListElem.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*3.5})}function h(e){const t=S(e);a.photoListElem.insertAdjacentHTML("beforeend",t)}function $(){a.btnLoadMore.classList.remove("hidden")}function q(){a.btnLoadMore.classList.add("hidden")}function g(){a.loadElem.classList.remove("hidden")}function L(){a.loadElem.classList.add("hidden")}function c(e){E.error({title:"Error",message:e})}function y(){r>=f?(q(),r>1&&c("We're sorry, but you've reached the end of search results.")):$()}
//# sourceMappingURL=commonHelpers.js.map
