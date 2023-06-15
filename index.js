const _audioFile = document.querySelector("#audio-input");
const _playBtn = document.querySelector("#play-btn");
const _stopBtn = document.querySelector("#stop-btn");

const readFile = (files) => {
    let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(files[0]);

        _playBtn.addEventListener("click", function(fileReader) {
            playAudioFile(fileReader);
        })

        // _stopBtn.addEventListener("click", function() {
        //     stopAudioFile()
        // })

}

const playAudioFile = (file) => {
    let context = new window.AudioContext();
        context.decodeAudioData(file, function(buffer) {
            let source = context.createBufferSource();
				source.buffer = buffer;
				source.loop = false;
				source.connect(context.destination);
				source.start(0);
        })
}

const stopAudioFile = () => {

}