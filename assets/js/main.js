var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');

function shootBeam(){
    for(i = 0; i < 4; i++){
        setTimeout(function(){
            beam.style.bottom = '800px';
        }, (i + 0.5) * 200);
        setTimeout(function(){
            beam.style.bottom = '100px';
        }, (i + 1) * 200);
    }
}

function moveTo(position){
    spaceship.style.left = position.x + 'px';
}

document.addEventListener('mousemove', moveTo);
spaceship.addEventListener('mousedown', shootBeam);
spaceship.addEventListener('dragstart', function(dragEvent){
    dragEvent.preventDefault();
});
