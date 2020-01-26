import p5 from 'p5'

let x = 0
let target = 200

const s = (p5) => {
    // Lerp, easing or smoothing a value
    // lerp(val1, val2, 0.3)
    // LINEAR INTERPOLATION
    // 
    p5.setup = () => {
        p5.createCanvas(400, 400)
        p5.background(51)
    }

    p5.draw = () => {
        p5.background(51)
        // p5.stroke(175, 0, 255)
        p5.fill(175, 0, 255, 50)
        p5.ellipse(target, 200, 64, 64)

        p5.stroke(175, 0, 255)
        p5.fill(255, 255, 255, 50)
        p5.ellipse(x, 200, 64, 64)

        x = p5.lerp(x, p5.random(target, -target), 0.8)
    }
}

const sketck = new p5(s)