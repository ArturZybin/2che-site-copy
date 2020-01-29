$(document).ready(function (){
    animateMacBook();
});

function animateMacBook() {
    let allKeyframes = {
        kriglBrewery: [
            {translateY: '-3%'},
            {translateY: '-9%'},
            {translateY: '-18%', duration: 4000},
            {translateY: '0'},
        ],
        festJazza: [
            {translateY: '-11%'},
            {translateY: '-37%'},
            {translateY: '-73%', duration: 4000},
            {translateY: '0'},
        ],
        mikagiGuitars: [
            {translateY: '-20%'},
            {translateY: '-40%'},
            {translateY: '-74%', duration: 4000},
            {translateY: '0'},
        ],
        ligoGroup: [
            {translateY: '-25%'},
            {translateY: '-50%'},
            {translateY: '-82%', duration: 4000},
            {translateY: '0'},
        ],
        rensArgoa: [
            {translateY: '-25%'},
            {translateY: '-50%'},
            {translateY: '-81.5%', duration: 4000},
            {translateY: '0'},
        ],
        cityOfKoprivnica: [
            {translateY: '-25%'},
            {translateY: '-50%'},
            {translateY: '-82%', duration: 4000},
            {translateY: '0'},
        ],
    }
    
    let macbookAnimation = anime({
        targets: '.macbook-screen .page',
        keyframes: allKeyframes[document.querySelector('.page').dataset.name],
        duration: 9000,
        delay: 2000,
        easing: 'cubicBezier(.36,.03,.22,.95)',
        loop: true,
    })
}