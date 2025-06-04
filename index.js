import{a as g,S as B,i as m}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const P="50385354-3e4bea1f358fcf603a5420cc4",p="https://pixabay.com/api/",y=15;g.defaults.baseURL=p;async function h(r,t){const o=await g.get(`${p}`,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y}});return{images:o.data.hits,totalHits:o.data.totalHits}}const L=document.querySelector(".gallery"),v=document.querySelector(".loader"),f=document.querySelector(".load-more-btn"),x=new B(".gallery a",{captionsData:"alt",captionDelay:250});function w(r){const t=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:l,comments:H,downloads:$})=>`<li class="gallery-element">
    <a href="${a}">
    <img class="gallery-element-img" src=${o} alt=${e}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${s}
        </li>
        <li>
        <p>Views</p>${l}
        </li>
        <li>
        <p>Comments</p>${H}
        </li>
        <li>
        <p>Downloads</p>${$}
        </li>
    </ul>
    
    </div>
    
    </li>`);L.insertAdjacentHTML("beforeend",t.join("")),x.refresh()}function O(){L.innerHTML=""}function b(){v.classList.add("is-active")}function S(){v.classList.remove("is-active")}function q(){f.classList.add("is-active")}function i(){f.classList.remove("is-active")}const d=document.querySelector(".form");let c,n=1,u=0;i();d.addEventListener("submit",async r=>{if(r.preventDefault(),c=d.elements["search-text"].value.trim(),!c){i();return}n=1,u=0,O(),b();try{const t=await h(c,n),o=t.images,a=t.totalHits;o.length>0?(w(o),setTimeout(()=>{const e=document.querySelector(".gallery-element");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},0),u=Math.ceil(a/y),n<u?q():i()):(m.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-toast"}),i())}catch(t){m.show({message:t,class:"custom-toast"}),i()}finally{S()}d.elements["search-text"].value=""});f.addEventListener("click",async()=>{b();try{n++;const t=(await h(c,n)).images;t.length>0&&(w(t),setTimeout(()=>{const o=document.querySelector(".gallery-element");if(o){const a=o.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}},0)),n<u?q():(m.show({message:"We're sorry, but you've reached the end of search results.",class:"custom-toast"}),i())}catch(r){m.show({message:r,class:"custom-toast"}),i()}finally{S()}});
//# sourceMappingURL=index.js.map
