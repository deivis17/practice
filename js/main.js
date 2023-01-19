const btn = document.querySelector('.fa-bars');
const navMin = document.querySelector('.nav-min');

btn.addEventListener('click',()=>{
    navMin.classList.toggle('show');
})

ScrollReveal().reveal('.container', {delay:100});
ScrollReveal().reveal('.slideshow', {delay:400});
ScrollReveal().reveal('.grid',{delay:400});
ScrollReveal().reveal('.social',{delay:400});
ScrollReveal().reveal('.links',{delay:400});