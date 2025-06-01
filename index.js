import{a as c,S as y,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="50385354-3e4bea1f358fcf603a5420cc4",u="https://pixabay.com/api/";c.defaults.baseURL=u;async function h(o){return c.get(`${u}`,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const s=o.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:d,downloads:p})=>`<li class="gallery-element">
    <a href="${r}">
    <img class="gallery-element-img" src=${a} alt=${e}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${t}
        </li>
        <li>
        <p>Views</p>${i}
        </li>
        <li>
        <p>Comments</p>${d}
        </li>
        <li>
        <p>Downloads</p>${p}
        </li>
    </ul>
    
    </div>
    
    </li>`);f.insertAdjacentHTML("beforeend",s.join("")),L.refresh()}function v(){f.innerHTML=""}function w(){m.classList.add("is-active")}function $(){m.classList.remove("is-active")}const n=document.querySelector(".form");n.addEventListener("submit",async o=>{o.preventDefault();const s=n.elements["search-text"].value.trim();if(s){v(),w();try{const r=(await h(s)).data.hits;r.length>0?b(r):l.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-toast"})}catch(a){l.show({message:a,class:"custom-toast"})}finally{$()}n.elements["search-text"].value=""}});
//# sourceMappingURL=index.js.map
