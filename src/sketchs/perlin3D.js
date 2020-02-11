import p5 from 'p5'

import enableRecord from './recorder'
enableRecord(600, 600)

// 3D Terrain Generation Perlin NOise

let cols, rows
let scl = 20
const w = 600
const h = 600

let terrain

const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600, p5.WEBGL)
        p5.frameRate(1)
        cols = w / scl
        rows = h / scl
        console.log(rows, cols)
        terrain = new Array([])

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                terrain[x][y] = p5.random(-10, 10)
            }
        }
    }

    p5.draw = () => {
        p5.background(0)
        p5.stroke(200)
        p5.noFill()
        p5.rotateX(p5.PI / 3)
        p5.translate(-w / 2, -h / 2)
        for (let y = 0; y < rows - 1; y++) {
            p5.beginShape(p5.TRANGLE_STRIP)
            for (let x = 0; x < cols; x++) {
                p5.vertex(x * scl, y * scl, terrain[x][y])
                p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1])
            }
            p5.endShape()
        }
    }

}


const sketck = new p5(s)