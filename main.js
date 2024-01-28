const btn = document.querySelector(".nav-btn");

const nav = document.querySelector("nav");

btn.addEventListener("click", ()=> { 
    nav.classList.toggle("toggle");
})