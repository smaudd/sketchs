import p5 from 'p5'

// Fourier

let time = 0
const wave = []
let alpha = 0
let t = 1
let k = 1

const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(800, 400)
    }

    p5.draw = () => {
        let x = 0
        let y = 0

        p5.background(0)
        p5.translate(0, 150)
        p5.noFill()
        for (let i = 0; i < 5; i++) {
            for (let i = 0; i < 5; i++) {
                let prevX = x
                let prevY = y
                let n = i * 2 + 1
                let r = 10 * (4 / (n * p5.PI))
                x += r * p5.cos(n * time)
                y += r * p5.sin(n * time)


                // p5.stroke(255, 100)
                // p5.noFill()
                // p5.ellipse(prevX, prevY, r * 2)
                // p5.fill(255)
                // p5.ellipse(x, y, 8)
                // p5.noFill()
                // p5.stroke(255)
                // p5.line(prevX, prevY, x, y)
            }

            p5.translate(10, 10)
            // p5.line(x - 200, y, 0, wave[0])
            p5.beginShape()
            // p5.stroke(255)
            p5.stroke(i * 60 + alpha, i * 30 - alpha, i * 15 + alpha)
            for (let i = 0; i < wave.length; i++) {
                p5.vertex(i, wave[i])
            }
            p5.endShape()


            time -= 0.005

        }
        if (wave.length > 800) {
            wave.pop()
        }
        // alpha += 0.05
        // t += 0.01
        // k += 0.005
        wave.unshift(y)
    }

}


const sketck = new p5(s)