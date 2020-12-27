const humberger = document.querySelector('.header .navbar .nav-list .humberger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item= document.querySelectorAll('.header .navbar .nav-list ul');
const header = document.querySelector('.header .container');


humberger.addEventListener('click', () => {
    humberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})
document.addEventListener('scroll',()=>{
    var scroll_position= window.scrollY;
    if(scroll_position >250){
        header.style.backgroundColor = '#29323c'
    }
    else{
        header.style.backgroundColor = 'transparent'
    }
});
