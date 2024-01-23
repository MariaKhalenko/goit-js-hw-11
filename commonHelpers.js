import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector(".form-search"),h=document.querySelector(".search-box"),a=document.querySelector(".gallery"),f="https://pixabay.com/api",m="23963114-6d0d5d874ae460d9125bacd21";d.addEventListener("submit",function(s){s.preventDefault();const o=encodeURIComponent(h.value.trim());if(o.trim()===""){l.error({title:"Error",message:"Nothing found"});return}showLoader();const i=`${f}/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(r=>r.json()).then(r=>{p(r.hits)}).catch(r=>{console.log(r)}),hideLoader()});function p(s){if(a.innerHTML="",s.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=y(s);a.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function y(s){return s.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${r}"
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
              <p class="quantity">${t}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${n}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${c}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
