(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();var i;(i=document.querySelector("#scroll-down"))==null||i.addEventListener("click",()=>{var o;window.scrollTo({top:((o=document.querySelector("#about-me"))==null?void 0:o.offsetTop)-20})});var n;(n=document.querySelector("#toggle-theme"))==null||n.addEventListener("click",()=>{document.documentElement.classList.toggle("light-theme")});const d=window.matchMedia("(prefers-color-scheme: light)").matches;d&&document.documentElement.classList.add("light-theme");
