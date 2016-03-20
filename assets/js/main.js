'use strict';

var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');
var velocity = 20;

function shootBeam(){
    var i = 0;
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

function moveLeft(){
    var currentPos = getPositionAsNumber(spaceship.style.left);
    currentPos = currentPos - 20;
    if(currentPos < 0){
        return;
    }
    spaceship.style.left = currentPos + 'px';
}

function moveRight(){
    var currentPos = getPositionAsNumber(spaceship.style.left);
    currentPos = currentPos + 20;
    if(currentPos > window.innerWidth){
        return;
    }    
    spaceship.style.left = currentPos + 'px';
}

function getPositionAsNumber(position){
    position = position? position : '50%';

    var isPX = position.match('px')? true : false;
    var isPercent = position.match('%')? true : false;
    var percent, pixels;
    if(isPX){
        pixels = position.replace('px','');
        return pixels * 1;
    }
    if(isPercent){
        percent = position.replace('%','');
        return (((percent/100) * window.innerWidth).toFixed(0)) * 1;
    }
}


document.addEventListener('keydown', function(keyEvent){
    if(keyEvent.keyCode == 32){
        if(!actionsToRun.shootBeam){
            actionsToRun.shootBeam = shootBeam;            
        }
    }
    if(keyEvent.keyCode == 37){
        if(!actionsToRun.moveLeft){
            actionsToRun.moveLeft = moveLeft;            
        }
    }
    if(keyEvent.keyCode == 39){
        if(!actionsToRun.moveRight){
            actionsToRun.moveRight = moveRight;            
        }
    }
});

document.addEventListener('keyup', function(keyEvent){
    if(keyEvent.keyCode == 32){
        delete actionsToRun.shootBeam;
    }
    if(keyEvent.keyCode == 37){
        delete actionsToRun.moveLeft;
    }
    if(keyEvent.keyCode == 39){
        delete actionsToRun.moveRight;
    }
});

// document.addEventListener('mousemove', moveTo);
spaceship.addEventListener('dragstart', function(dragEvent){
    dragEvent.preventDefault();
});

startLoop();
