import p5 from 'p5'

import enableRecord from './recorder'
enableRecord(600, 600)

// 3D Terrain Generation Perlin NOise

let cols, rows
let flying = 0.1
let scl = 20
let yRotation = 0
let xRotation = 60
let diff = 150
const w = 1200
const h = 1200

let terrain = []

const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600, p5.WEBGL)
        p5.angleMode(p5.DEGREES)
        cols = w / scl
        rows = h / scl

    }

    p5.draw = () => {

        let yoff = flying
        let xoff = 0
        for (let y = 0; y < rows; y++) {
            xoff = 0
            terrain[y] = []
            for (let x = 0; x < cols; x++) {
                terrain[y][x] = p5.map(p5.noise(xoff, yoff), 0, 1, -100, diff)
                xoff += 0.1
            }
            yoff -= 0.1
        }
        p5.background(p5.map(p5.noise(xoff, yoff), 0, 1, 120, 150), 100, 200)
        p5.stroke(200, 50)
        // p5.noFill()
        p5.rotateX(xRotation)
        p5.rotateY(yRotation)
        p5.translate(-w / 2, -h / 2)
        for (let y = 0; y < rows - 1; y++) {
            p5.beginShape(p5.TRIANGLE_STRIP)
            for (let x = 0; x < cols; x++) {
                // p5.stroke(terrain[y][x], 50, 200)
                p5.vertex(x * scl, y * scl, terrain[y][x])
                p5.fill(terrain[y][x], 0, 200)
                p5.noStroke()
                p5.vertex(x * scl, (y + 1) * scl, terrain[y][x + 1])
            }
            p5.endShape(p5.CLOSE)
        }
        xRotation += 0.01
        flying += 0.1
        if (diff > 300) {
            if (yRotation < 180) {
                yRotation += 0.5
            } else {
                diff -= 0.5
                yRotation -= 0.5
            }
        } else {

            diff += 0.5
        }
    }

}


const sketck = new p5(s)