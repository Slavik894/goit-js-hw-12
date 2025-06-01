import{a as c,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="50385354-3e4bea1f358fcf603a5420cc4",u="https://pixabay.com/api/";c.defaults.baseURL=u;function h(i){return c.get(`${u}`,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:a,comments:d,downloads:p})=>`<li class="gallery-element">
    <a href="${o}">
    <img class="gallery-element-img" src=${s} alt=${e}>
    </a>
    <div class="element-description">
    <ul class="description-list">
        <li>
        <p>Likes</p>${t}
        </li>
        <li>
        <p>Views</p>${a}
        </li>
        <li>
        <p>Comments</p>${d}
        </li>
        <li>
        <p>Downloads</p>${p}
        </li>
    </ul>
    
    </div>
    
    </li>`);f.insertAdjacentHTML("beforeend",r.join("")),L.refresh()}function v(){f.innerHTML=""}function $(){m.classList.add("is-active")}function q(){m.classList.remove("is-active")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(v(),$(),h(r).then(s=>{const o=s.data.hits;o.length>0?b(o):n.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"custom-toast"})}).catch(s=>n.show({message:s,class:"custom-toast"})).finally(()=>{q()}),l.elements["search-text"].value="")});
//# sourceMappingURL=index.js.map
