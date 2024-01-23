import{i as a,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d=document.querySelector(".form-search"),u=document.querySelector(".search-box"),f=document.querySelector(".gallery"),m="https://pixabay.com/api",h="23963114-6d0d5d874ae460d9125bacd21";d.addEventListener("submit",function(t){t.preventDefault();const r=encodeURIComponent(u.value.trim());if(r.trim()===""){a.error({title:"Error",message:"Nothing found"});return}g();const i=`${m}/?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(s=>s.json()).then(s=>{p(s.hits)}).catch(s=>{console.error(s),v()})});function p(t){if(f.innerHTML="",t.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=y(t);galleryList.innerHTML=r,new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function y(t){return t.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:n,downloads:l})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${s}"
              width="360"
            />
          </a>
          <div class="imfo-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${e}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${o}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${n}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${l}</p>
            </div>
          </div>
        </li>`).join("")}function g(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function v(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
