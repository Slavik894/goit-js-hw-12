import{a as f,S as $,i as u}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const P="50385354-3e4bea1f358fcf603a5420cc4",p="https://pixabay.com/api/",y=15;f.defaults.baseURL=p;async function g(r,t){return f.get(`${p}`,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y}})}const h=document.querySelector(".gallery"),L=document.querySelector(".loader"),x=new $(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const t=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:n,comments:S,downloads:q})=>`<li class="gallery-element">
    <a href="${a}">
    <img class="gallery-element-img" src=${o} alt=${e}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${s}
        </li>
        <li>
        <p>Views</p>${n}
        </li>
        <li>
        <p>Comments</p>${S}
        </li>
        <li>
        <p>Downloads</p>${q}
        </li>
    </ul>
    
    </div>
    
    </li>`);h.insertAdjacentHTML("beforeend",t.join("")),x.refresh()}function O(){h.innerHTML=""}function b(){L.classList.add("is-active")}function w(){L.classList.remove("is-active")}const c=document.querySelector(".form"),d=document.querySelector(".load-more-btn");let l,i=1,m=0;c.addEventListener("submit",async r=>{if(r.preventDefault(),l=c.elements["search-text"].value.trim(),!!l){i=1,O(),b();try{const t=await g(l,i),o=t.data.hits,a=t.data.totalHits;o.length>0?(v(o),setTimeout(()=>{const e=document.querySelector(".gallery-element");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},0),m=Math.ceil(a/y),i<m&&d.classList.add("is-active")):u.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-toast"})}catch(t){u.show({message:t,class:"custom-toast"})}finally{w()}c.elements["search-text"].value=""}});d.addEventListener("click",async()=>{b();try{i++;const t=(await g(l,i)).data.hits;t.length>0&&v(t),i<m&&d.classList.add("is-active")}catch{u.show({message:"We're sorry, but you've reached the end of search results."})}finally{w()}});
//# sourceMappingURL=index.js.map
