$(document).ready(function (){
    document.onmousemove = moveImageWithMouse;
});

function moveImageWithMouse(event) {
    let $image = $('.main-list-item-image');
    
    let shiftX = -(document.documentElement.clientWidth - event.clientX) / 16;
    let shiftY = event.clientY / 16;
    
    $image.css('transform', `translate(${shiftX}px, ${shiftY}px)`);
}