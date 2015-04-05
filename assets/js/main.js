'use strict';

var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');
var shoot = false;

function shootBeam(){
    shoot = true;
    animateBeam(0);
}

function stopBeam(){
    shoot = false;
}

function animateBeam(i){
    setTimeout(function(){
        beam.style.bottom = '800px';
    }, (i + 0.5) * 200);
    setTimeout(function(){
        beam.style.bottom = '100px';
    }, (i + 1) * 200);
}

function moveTo(position){
    spaceship.style.left = position.x + 'px';
}

document.addEventListener('mousemove', moveTo);
spaceship.addEventListener('mousedown', shootBeam);
spaceship.addEventListener('mouseup', stopBeam);
spaceship.addEventListener('dragstart', function(dragEvent){
    dragEvent.preventDefault();
});
