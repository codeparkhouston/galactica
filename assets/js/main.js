var spaceship = document.querySelector('#spaceship');
var beam = document.querySelector('.beam');
var start = null, pause = true;

// Using a loop
for(i = 0; i < 4; i++){
    setTimeout(function(){
        beam.style.bottom = '800px';
    }, (i + 0.5) * 200);
    setTimeout(function(){
        beam.style.bottom = '100px';
    }, (i + 1) * 200);
}

// Works but repetive
// setTimeout(function(){
//     beam.style.bottom = '800px';
// }, 100);
// setTimeout(function(){
//     beam.style.bottom = '100px';
// }, 200);
// setTimeout(function(){
//     beam.style.bottom = '800px';
// }, 300);
// setTimeout(function(){
//     beam.style.bottom = '100px';
// }, 400);
// setTimeout(function(){
//     beam.style.bottom = '800px';
// }, 500);
// setTimeout(function(){
//     beam.style.bottom = '100px';
// }, 600);

// Won't really work
// beam.style.bottom = '800px';
// beam.style.bottom = '100px';
// beam.style.bottom = '800px';
// beam.style.bottom = '100px';
// beam.style.bottom = '800px';
// beam.style.bottom = '100px';
