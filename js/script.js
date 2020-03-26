window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_list'),
    menuItem = document.querySelectorAll('.header_list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_list_active');
        })
    })
})