$(document).ready(function (){
    $('.header-burger').click(toggleMenu);
    
    window.onscroll = () => didScroll = true;
    
    let didScroll = false;
    setInterval(function() {
        if (didScroll) {
            scrollMenuChange();
            didScroll = false;
        };
    }, 250);
});



let lastPageYOffset = 0;

function scrollMenuChange() {
    if ($('.menu').hasClass('menu-opened')) {
        return;
    }
    
    let $header = $('.header');
    
    if (window.pageYOffset < 25) {
        $header.attr("class", "header");
        lastPageYOffset = 0;
    } else if (window.pageYOffset < 50) {
        $header.removeClass('header-hidden');
        $header.addClass('header-scrolled');
        lastPageYOffset = 0;
    } else {
        if (lastPageYOffset < window.pageYOffset) {

            $header.removeClass('header-scrolled');
            $header.addClass('header-hidden');
        } else if (!$header.hasClass('header-scrolled')) {
            
            $header.removeClass('header-hidden');
            $header.addClass('header-scrolled');
        }
    
        lastPageYOffset = window.pageYOffset;
    }
}


function toggleMenu() {
    let $menu = $('.menu');
    let $burger = $('.header-burger');
    
    if ($('.menu').hasClass('menu-opened')) {
        $menu.addClass('menu-closed');
        $menu.removeClass('menu-opened');
        $burger.addClass('header-burger-opened');
        $burger.removeClass('header-burger-closed');
    } else {
        $menu.addClass('menu-opened');
        $menu.removeClass('menu-closed');
        $burger.addClass('header-burger-closed');
        $burger.removeClass('header-burger-opened');
    }
}