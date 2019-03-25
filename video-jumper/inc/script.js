// navigator
const steps = [0, 3, 10, 15, 22];
let currentStep = 0;
const getNextStep = () => currentStep + 1;
const getPrevStep = () => currentStep - 1;

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
    el.pause();
    el.currentTime = steps[currentStep] + '';
    el.play();

    setTimeout(function(){
        el.pause();
    }, (steps[getNextStep()] - steps[currentStep]) * 1000 );

    console.log('nextStep:' + steps[getNextStep()] );
    console.log('currentStep:' + steps[currentStep] );

    // update current step
    if (currentStep < steps.length - 1) {
        currentStep++;
    }
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