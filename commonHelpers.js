import{i as l,S as y}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".form-search"),p=document.querySelector(".search-box"),u=document.querySelector(".gallery"),a=document.querySelector(".loader"),f="https://pixabay.com/api",h="23963114-6d0d5d874ae460d9125bacd21";a.style.display="none";c.addEventListener("submit",function(n){n.preventDefault();const r=encodeURIComponent(p.value.trim());if(r.trim()===""){l.error({title:"Error",message:"Nothing found"});return}function i(e){if(u.innerHTML="",a.style.display="block",a.style.display="none",e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none";return}const t=m(e);u.innerHTML=t,new y(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh(),c.reset()}const s=`${f}/?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(e=>e.json()).then(e=>{i(e.hits)}).catch(e=>{console.error(e)})});function m(n){return n.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:o,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${s}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${e}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${t}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${o}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${d}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
