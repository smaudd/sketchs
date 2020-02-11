//For recording

function enableRecord(width, height) {
    const btn = document.createElement('button')
    document.querySelector('body').append(btn)
    btn.textContent = 'start recording';
    const chunks = [];
    function record() {
        chunks.length = 0;
        let stream = document.querySelector('canvas').captureStream(30),
            recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
        recorder.ondataavailable = e => {
            if (e.data.size) {
                chunks.push(e.data);
            }
        };
        recorder.onstop = exportVideo;
        btn.onclick = e => {
            recorder.stop();
            btn.onclick = record;
        };
        recorder.start();
        btn.textContent = 'stop recording';
    }
    function exportVideo(e) {
        var blob = new Blob(chunks, { type: 'video/h264' });
        var vid = document.createElement('video');
        vid.id = 'recorded'
        vid.width = width
        vid.height = height
        vid.controls = true;
        vid.src = URL.createObjectURL(blob);
        document.body.appendChild(vid);
        vid.play();
    }

    btn.onclick = record;
}

export default enableRecord