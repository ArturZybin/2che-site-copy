$(document).ready(function (){
    if (!document.querySelector('.hero')) return;
    
    sliderHero();
    sliderTestimonials();
    typingHeroSubheading();
});




function sliderHero() {
    $(".hero-slider").on('beforeChange', function() {
        backgroundScaleAnimation.play();
    })
    
    $(".hero-slider").slick({
        arrows: false,
        infinite: true,
        speed: 1600,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
    
    let backgroundScaleAnimation = anime({
        targets: '.hero-background',
        keyframes: [
            {scale: '0.9'},
            {scale: '1'},
        ],
        duration: 1000,
        easing: 'easeInOutBack'
    })
    
    
    
    let $path = $('svg.scene path');
    let pathData = $path.attr('pathdata').split(';');
    pathData.splice(pathData.length, 0, $path.attr("d"));
    
    let pathAnim = anime({
        targets: 'svg.scene path',
        duration: 8000,
        easing: 'cubicBezier(.5, 0, .5, .5)',
        y: 10,
        d: pathData,
        loop: true,
    });
}




function sliderTestimonials() {
    $('.testimonials-slider').slick({
        arrows: true,
        dots: false,
        speed: 800,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendArrows: $('.testimonials-arrows'),
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]
    })
}


async function typingHeroSubheading(){
    let span = document.querySelector('.typed');
    
    let phrases = ['fresh methods', 'creative approach', 'attention to detail'];
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