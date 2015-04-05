var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');
var start = null, pause = true;

function endLoop(){
    beam.style.bottom = '100px';
    pause = true;
}

function render(progress, deltaT){
    var round, bottom;

    round = progress % 100;
    bottom = round * 7 + 100;
    beam.style.bottom = bottom.toFixed(0) + 'px';
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
