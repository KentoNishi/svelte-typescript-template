import{y as b,$ as v,I as L,S as a,i as u,s as f,e as k,t as w,a as d,b as E,c as O,n as m,d as p,f as _,X as P,g as S,m as q,h as l,j as c,k as x,l as I,o as N,p as j,q as A}from"./vendor.b00a0d5b.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};C();const R="modulepreload",h={},W="/svelte-ts-template/",B=function(r,n){return!n||n.length===0?r():Promise.all(n.map(e=>{if(e=`${W}${e}`,e in h)return;h[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":R,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((g,y)=>{i.addEventListener("load",g),i.addEventListener("error",y)})})).then(()=>r())};b("en",()=>B(()=>import("./en.9805afb4.js"),[]));v({fallbackLocale:"en",initialLocale:L()});function D(s){let r,n=s[0]("hello_world")+"",e;return{c(){r=k("div"),e=w(n)},m(t,o){d(t,r,o),E(r,e)},p(t,[o]){o&1&&n!==(n=t[0]("hello_world")+"")&&O(e,n)},i:m,o:m,d(t){t&&p(r)}}}function F(s,r,n){let e;return _(s,P,t=>n(0,e=t)),[e]}class K extends a{constructor(r){super();u(this,r,F,D,f,{})}}function $(s){let r,n;return r=new K({}),{c(){S(r.$$.fragment)},m(e,t){q(r,e,t),n=!0},i(e){n||(l(r.$$.fragment,e),n=!0)},o(e){c(r.$$.fragment,e),n=!1},d(e){x(r,e)}}}function T(s){let r,n,e=!s[0]&&$();return{c(){e&&e.c(),r=I()},m(t,o){e&&e.m(t,o),d(t,r,o),n=!0},p(t,[o]){t[0]?e&&(j(),c(e,1,1,()=>{e=null}),N()):e?o&1&&l(e,1):(e=$(),e.c(),l(e,1),e.m(r.parentNode,r))},i(t){n||(l(e),n=!0)},o(t){c(e),n=!1},d(t){e&&e.d(t),t&&p(r)}}}function V(s,r,n){let e;return _(s,A,t=>n(0,e=t)),[e]}class X extends a{constructor(r){super();u(this,r,V,T,f,{})}}new X({target:document.getElementById("app")});