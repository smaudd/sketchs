// import p5 from 'p5'

// const major = [0, 2, 4, 5, 7, 9, 11]
// const minor = [0, 2, 3, 5, 7, 8, 10]
// const frequency = 440
// let r = 150
// let r2 = 100
// let x = 200
// let y = 200

// const s = (p5) => {
//     // Polar coordinates
//     p5.setup = () => {
//         p5.createCanvas(400, 400)
//         p5.angleMode(p5.DEGREES)
//     }

//     p5.draw = () => {
//         p5.background(51)
//         for (let i = 0; i < 360; i += 30) {
//             const xd = r2 * p5.sin(i)  
//             const yd = r2 * p5.cos(i)
//             const xdNext = r2 * p5.sin(i + 1)
//             const ydNext = r2 * p5.cos(i + 1)

//             p5.stroke(255, 150, 20)
//             // p5.fill(100, 100, p5.random(0, 100))
//             // p5.ellipse(x + xd, y + yd, 10, 10)
//             // if (i % 30 === 0) {
//             p5.strokeWeight(5)
//             // p5.beginShape()
//             // p5.vertex(xdNext + x, ydNext + y)
//             // p5.vertex(xd + x, yd + y)
//             // p5.endShape(p5.CLOSE)
//             p5.line(x, y, xdNext + xd, ydNext + yd)
//             p5.strokeWeight(1)
//             p5.line(y, x, y + yd, x + xd)
//             // }
//         }
//         r += 0.5
//         r2 += 0
//         // minor.forEach(tone => {

//         // })
//     }
// }

// const sketck = new p5(s)

import p5 from 'p5'

let r1 = 25
let r2 = 50
let r3 = 50
let x2 = 200
let y2 = 200
let color = 0
let incrementor = 10

const s = (p5) => {
    // Polar coordinate
    p5.setup = () => {
        p5.createCanvas(400, 400)
        p5.angleMode(p5.DEGREES)
    }

    p5.draw = () => {
        p5.background(255 - color)
        const x = 200
        const y = 200
        p5.point(x, y)
        for (let i = 0; i <= 360; i++) {
            const dx = r1 * p5.cos(i)
            const dy = r1 * p5.sin(i + r2)
            // p5.point(x + dx, x + dy)
            p5.stroke(215, 175, 185)
            p5.line(x, y, x + dx, y + dy)
        }
        for (let i = 0; i <= 360; i += 10) {
            const dx = r2 * p5.cos(i + r1)
            const dy = r2 * p5.sin(i + r1)
            // p5.point(x + dx, x + dy)
            p5.stroke(126, 196, 207)
            p5.line(x2, y2, x2 + dx, y2 + dy)
        }
        r2 += 0.5
        r1 += 2
        color += 0.3
        incrementor += 1
        // y2 += 0.1
        p5.stroke(255)
        p5.strokeWeight(2)
    }

    //Key Bindings
    // R to redraw, S to save
    p5.keyPressed = () => {
        if (p5.key == 'r' || p5.key == 'R') {
            p5.draw();
        } else if (p5.key == 's' || p5.key == 'S') {
            p5.save("###.jpg");
        }
    }

    //For recording
    const btn = document.querySelector('button')
    const chunks = [];
    console.log(btn)
    function record() {
        chunks.length = 0;
        let stream = document.querySelector('canvas').captureStream(30),
            recorder = new MediaRecorder(stream, { videoBitsPerSecond: 25000000 });
        recorder.ondataavailable = e => {
            if (e.data.size) {
                chunks.push(e.data);
            }
        };
        recorder.onstop = exportVideo;
        btn.onclick = e => {
            recorder.stop();
            btn.textContent = 'start recording';
            btn.onclick = record;
        };
        recorder.start();
        btn.textContent = 'stop recording';
    }

    function exportVideo(e) {
        var blob = new Blob(chunks);
        var vid = document.createElement('video');
        vid.id = 'recorded'
        vid.controls = true;
        vid.src = URL.createObjectURL(blob);
        document.body.appendChild(vid);
        vid.play();
        console.log(vid)
    }
    btn.onclick = record;

}


const sketck = new p5(s)