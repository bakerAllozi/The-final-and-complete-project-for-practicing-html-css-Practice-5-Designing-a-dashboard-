'use strict';
const header2 = document.querySelector('.header2');
const list = document.querySelector('.list');
const clos = document.querySelector('.clos');
list.addEventListener('click' , function(){
    header2.classList.add('hi')
});
clos.addEventListener('click' , function(){
    header2.classList.remove('hi')
});


