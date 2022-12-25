const run = document.querySelector('.welcome');
run.addEventListener('click', function() {
    run.classList.add('active');
    // music();
});

const snowOn = document.querySelector('#on');
const main = document.querySelector('.snowy-background');
snowOn.addEventListener('click', function() {
    main.classList.toggle('snowyActive');
});

// snowOn.addEventListener('click', function() {
//     music();
// });

const music = new Audio();
music.src = "assets/audio/christmas-magic-night-11648.mp3";
music.loop = true;

snowOn.addEventListener('click', function() {
    musicPlay();
});

function musicPlay() {
    if(music.paused) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }
}
