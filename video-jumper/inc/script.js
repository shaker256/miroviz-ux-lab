// navigator
const videoSteps = [0, 3, 10, 15]
let = currentVideoStepPos = 0;
let = currentVideoStepVal = videoSteps[0];
let = nextVideoStepVal = videoSteps[1];
let = prevVideoStepVal = null;

// setup buttons
const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const stop = document.getElementById('stop');
const funky = document.getElementById('funky');

// declare video player control functions
const playVid = function(el){
    el.play();
};
const pauseVid = function(el) {
    el.pause();
}
const stopVid = function(el){
    el.pause();
    el.currentTime = '0';
};
const nextVidStep = function(el){

    console.log('next clicked!'); //debug

    if (currentVideoStepVal !== undefined) {
        console.log('currentStepVal = true'); //debug
        // play at time
        el.pause();
        console.log('currentVideoStepVal:' + currentVideoStepVal);
        el.currentTime = currentVideoStepVal + '';
        el.play();
        setTimeout(function(){
            el.pause();
        }, nextVideoStepVal - currentVideoStepVal);

        // update videoSteps
        if ( (videoSteps.length + 1) > (currentVideoStepPos =+ 1) ) {
            currentVideoStepPos =+ 1;
            currentVideoStepVal = videoSteps[currentVideoStepPos]
            nextVideoStepVal = videoSteps[currentVideoStepPos + 1];
            prevVideoStepVal = videoSteps[currentVideoStepPos - 1];
        }

        

    } else { /* do nothing... */ }

};

const playVidForDuration = function(el){
    el.play();
    setTimeout(function(){el.pause()}, 2000);

};

// link buttons and functions
play.addEventListener('click', () => playVid(video), false);
pause.addEventListener('click', () => pauseVid(video), false);
stop.addEventListener('click', () => stopVid(video), false);
next.addEventListener('click', () => nextVidStep(video), false);
funky.addEventListener('click', () => playVidForDuration(video), false);