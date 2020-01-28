$(document).ready(function (){
    typingHeroSubheading();
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


async function typingHeroSubheading(){
    let phrases = ['fresh methods', 'creative approach', 'attention to detail'];
    let span = document.querySelector('.typed');
    let phraseIndex = 0;
    
    while (true) {
        let phrase = phrases[phraseIndex];
        
        for (let letter of phrase) {
            await appendLetter(span, letter, 100);
        }
        await appendLetter(span, '', 1500);
        while(span.textContent != ''){
            await deleteLetter(span, 50);
        }
        
        (phraseIndex == 2) ? phraseIndex = 0: phraseIndex += 1;
    }
}

function appendLetter(el, letter, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            el.textContent += letter;
            resolve();
        }, delay);
    })
}
function deleteLetter(el, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            el.textContent = el.textContent.slice(0, -1);
            resolve();
        }, delay);
    })
}