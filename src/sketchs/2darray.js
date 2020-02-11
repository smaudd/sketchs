import p5 from 'p5'

import enableRecord from './recorder'
enableRecord(600, 600)

// 2D Array

let cols = 30
let rows = 30
let colors = []

const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600)
        for (let i = 0; i < cols; i++) {
            colors[i] = []
            for (let j = 0; j < rows; j++) {
                colors[i][j] = p5.random(255)
            }
        }
        console.log(colors)
    }

    p5.draw = () => {
        p5.background(0)
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * 30
                const y = j * 30
                p5.stroke(0)
                p5.fill(colors[i][j])
                p5.rect(x, y, 30, 30)
            }
        }
    }

}


const sketck = new p5(s)