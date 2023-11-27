var videoElement = document.querySelector('#sea-video');


function makeSmall() {
    document.querySelector('.player').style.width = '250px';
}

function makeNormal() {
    document.querySelector('.player').style.width = '400px';

}

function makeBig() {
    document.querySelector('.player').style.width = '800px';
}

function PlayPause() {
    if (videoElement.paused)
        videoElement.play();
    else
        videoElement.pause();
}

// <i class="fa-solid fa-pause"></i>