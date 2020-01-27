$(document).ready(function (){
    sliderHero();
    sliderTestimonials();
});


// hero
//-----------------------------------------------
function sliderHero() {
    $(".hero-slider").on('beforeChange', function() {
        animateBackgroundScale.play();
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
    
    let animateBackgroundScale = anime({
        targets: '.hero-background',
        keyframes: [
            {scale: '0.9'},
            {scale: '1'},
        ],
        duration: 1000,
        easing: 'easeInOutBack'
    })
    
    
    
    let path = $('svg.scene path');
    let pathData = path.attr('pathdata').split(';');
    pathData.splice(pathData.length, 0, path.attr("d"));
    
    let pathAnim = anime({
        targets: 'svg.scene path',
        duration: 8000,
        easing: 'cubicBezier(.5, 0, .5, .5)',
        y: 10,
        d: pathData,
        loop: true,
    });
}


// testimonials
//----------------------------------------------
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