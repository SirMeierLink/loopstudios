const print = console.log;

const menu = document.querySelector('.fa-bars');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.fa-xmark');

menu.addEventListener('click', ()=> {
    modal.style.display = 'block';
});

close_modal.addEventListener('click', ()=> {
    modal.style.display = 'none';
})