// Minimal helper script: mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if(btn && nav){
  btn.addEventListener('click', ()=>{
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });
}
