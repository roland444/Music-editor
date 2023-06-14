const _audioFile = document.getElementById("myfile");
const _playBtn = document.getElementById("play-btn")

function playMusic() {
    let audio = new Audio(_audioFile.value);
    audio.play();
    
    
}

playMusic();

_playBtn.addEventListener("click", playMusic);