var replayVid = function() {
    // `function(){}` notation, because it works in context!
    this.pause();
    this.currentTime = '0.34'; // skip the first frame
    this.play();
};

// not working for now... =(...
// Auto play first time
// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
// var isElementInViewport = function(el) {
//     let rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
//     );
// };
// var onVisibilityChange = function(el, callback) {
//     var old_visible;
//     return function () {
//         var visible = isElementInViewport(el);
//         if (visible != old_visible) {
//             old_visible = visible;
//             if (typeof callback == 'function') {
//                 callback();
//             }
//         }
//     }
// }

// Set video goodies
var videos = document.querySelectorAll('.video-canvas');
videos.forEach((el) => {
    var video = el.querySelector('video');
    var control = el.querySelector('.video-control');
    // Set Video controls
    video.addEventListener('click', replayVid, false);
    video.addEventListener('pause', function(){
        control.classList.replace('icon-replay', 'icon-play');
        console.log('pause!');
    }, false);
    video.addEventListener('play', function(){
        control.classList.replace('icon-play', 'icon-replay');
        console.log('play!');
    }, false);

    // not working for now... =(...
    // Auto play if in viewport
    // var playHandler = onVisibilityChange(el, function(){
    //     replayVid();
    //     console.log('I see you!');
    // });
    // window.addEventListener('DOMContentLoaded', el.playHandler, false); 
    // window.addEventListener('load', el.playHandler, false); 
    // window.addEventListener('scroll', el.playHandler, false); 
    // window.addEventListener('resize', el.playHandler, false);

});