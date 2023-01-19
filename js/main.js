const btn = document.querySelector('.fa-bars');
const navMin = document.querySelector('.nav-min');

btn.addEventListener('click',()=>{
    navMin.classList.toggle('show');
})