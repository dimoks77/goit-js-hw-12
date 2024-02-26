import{a as m,i as f,S as y}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const g="42557363-2349d8dc8525cd1cea516a01b",h="https://pixabay.com/api/",v="",b=15;let L=1;function c(o){const s=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:L}),n=`${h}${v}?${s}`;return m.get(n).then(r=>r.data).catch(r=>{throw console.error("Error fetching data:",r),r})}function d(o,s){if(o.hits.length===0)f.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const n={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},r=o.hits.map(e=>`
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
              `).join("");s.insertAdjacentHTML("afterbegin",r),new y(".gallery a",n).refresh(),form.reset()}}const w=document.querySelector("#form"),i=document.querySelector(".loader"),l=document.querySelector(".gallery"),p=document.querySelector("#loadmore");i.style.display="none";let u,P;document.addEventListener("DOMContentLoaded",()=>{w.addEventListener("submit",o=>{o.preventDefault();const s=document.getElementById("search").value.trim();s&&(i.style.display="inline-block",p.style.display="inline-block",l.innerHTML="",c(s).then(n=>d(n,l)).finally(()=>{i.style.display="none"}))}),p.addEventListener("click",o=>{o.preventDefault(),u++,console.log(u),c(P).then(s=>d(s,l)).finally(()=>{i.style.display="none"})})});
//# sourceMappingURL=commonHelpers.js.map
