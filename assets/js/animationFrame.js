var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');
var start = null, pause = true;
var actionsToRun = {};

function endLoop(){
    beam.style.bottom = '100px';
    pause = true;
}

function render(progress, deltaT){
    for (var actionName in actionsToRun) {
        actionsToRun[actionName](spaceship, beam, progress, deltaT);
    }
}

function startLoop(){
    pause = false;
    requestAnimationFrame(step, render);
}

function step(now){
    var lastTime = lastTime? lastTime : 0;
    var progress;

    if(pause){
        start = null;
        return;
    }

    if(!start){
        start = now;
    }

    progress = now - start;
    deltaT = now - lastTime;

    render(progress, deltaT);
    requestAnimationFrame(step, render);

    lastTime = now;
}
