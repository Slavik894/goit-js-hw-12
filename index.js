import{a as f,S as $,i as d}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P="50385354-3e4bea1f358fcf603a5420cc4",p="https://pixabay.com/api/",y=15;f.defaults.baseURL=p;async function h(a,t){return await f.get(`${p}`,{params:{key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y}})}const g=document.querySelector(".gallery"),v=document.querySelector(".loader"),x=new $(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:l,comments:S,downloads:q})=>`<li class="gallery-element">
    <a href="${i}">
    <img class="gallery-element-img" src=${r} alt=${e}>
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
        <p>Comments</p>${S}
        </li>
        <li>
        <p>Downloads</p>${q}
        </li>
    </ul>
    
    </div>
    
    </li>`);g.insertAdjacentHTML("beforeend",t.join("")),x.refresh()}function H(){g.innerHTML=""}function b(){v.classList.add("is-active")}function w(){v.classList.remove("is-active")}const m=document.querySelector(".form"),o=document.querySelector(".load-more-btn");let n,c=1,u=0;o.classList.remove("is-active");m.addEventListener("submit",async a=>{if(a.preventDefault(),n=m.elements["search-text"].value.trim(),!n){o.classList.remove("is-active");return}c=1,u=0,H(),b();try{const t=await h(n,c),r=t.data.hits,i=t.data.totalHits;r.length>0?(L(r),setTimeout(()=>{const e=document.querySelector(".gallery-element");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},0),u=Math.ceil(i/y),c<u?o.classList.add("is-active"):o.classList.remove("is-active")):(d.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-toast"}),o.classList.remove("is-active"))}catch(t){d.show({message:t,class:"custom-toast"}),o.classList.remove("is-active")}finally{w()}m.elements["search-text"].value=""});o.addEventListener("click",async()=>{b();try{c++;const t=(await h(n,c)).data.hits;t.length>0&&(L(t),setTimeout(()=>{const r=document.querySelector(".gallery-element");if(r){const i=r.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}},0)),c<u?o.classList.add("is-active"):(d.show({message:"We're sorry, but you've reached the end of search results.",class:"custom-toast"}),o.classList.remove("is-active"))}catch{d.show({message:"We're sorry, but you've reached the end of search results.",class:"custom-toast"}),o.classList.remove("is-active")}finally{w()}});
//# sourceMappingURL=index.js.map
