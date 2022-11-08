window.addEventListener('DOMContentLoaded', () => {
    
    function openMenuByButton(btn, menu, menuLink, menuActiveClass, btnActiveClass) {
        const buttonClass = document.querySelector(btn),
              menuClass = document.querySelector(menu),
              menuItem = document.querySelectorAll(menuLink);

        buttonClass.addEventListener('click', () => {
            menuClass.classList.toggle(menuActiveClass);
            buttonClass.classList.toggle(btnActiveClass);
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                menuClass.classList.toggle(menuActiveClass);
                buttonClass.classList.toggle(btnActiveClass);
            });
        });
    }

    openMenuByButton('.hamburger', '.menu', '.menu_link', 'menu_active', 'hamburger_active');

});