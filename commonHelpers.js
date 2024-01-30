import{i as l,S as y}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const c=document.querySelector(".form-search"),f=document.querySelector(".search-box"),u=document.querySelector(".gallery"),a=document.querySelector(".loader"),p="https://pixabay.com/api",m="23963114-6d0d5d874ae460d9125bacd21";a.style.display="none";c.addEventListener("submit",function(n){n.preventDefault();const r=encodeURIComponent(f.value.trim());if(r.trim()===""){l.error({title:"Error",message:"Enter search data"});return}a.style.display="block";const i=new y(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250});function o(e){if(u.innerHTML="",e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=h(e);u.innerHTML=s,i.refresh()}c.reset();const t=`${p}/?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(t).then(e=>e.json()).then(e=>{o(e.hits)}).catch(e=>{console.error(e)}).finally(()=>{a.style.display="none"})});function h(n){return n.map(({webformatURL:r,largeImageURL:i,tags:o,likes:t,views:e,comments:s,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${o}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${t}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${e}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${s}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${d}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
