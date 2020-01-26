import p5 from 'p5'

let r1 = 25
let r2 = 50
let r3 = 50
let x2 = 200
let y2 = 200
let color = 0
let incrementor = 10

const s = (p5) => {
    // Polar coordinates
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
}

const sketck = new p5(s)

