import p5 from 'p5'

import enableRecord from './recorder'
enableRecord(600, 600)

let n = 1
let d = 1
let dSlider
let angle = 0
// Maurer Rose

const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600)
        p5.angleMode(p5.DEGREES)
        p5.background(0)
        dSlider = p5.createSlider(1, 180, 1)
    }

    p5.draw = () => {
        p5.background(0)
        p5.translate(p5.width / 2, p5.height / 2)
        p5.strokeWeight(0.005)
        p5.noFill()
        p5.strokeWeight(1)
        p5.stroke(p5.noise(angle) * 100, 120, 255)
        p5.beginShape()
        for (let i = 0; i < angle; i++) {
            const k = i * d
            const r = p5.sin(n * k) * 250
            const x = r * p5.cos(k)
            const y = r * p5.sin(k)
            p5.vertex(x, y)
        }
        p5.endShape()
        if (angle < 1500) {
            angle++
            n += 0.005
            d += 0.005
        } else {
            p5.noLoop()
        }
    }

}


const sketck = new p5(s)