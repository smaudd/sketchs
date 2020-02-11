import p5 from 'p5'
import enableRecord from './recorder'
enableRecord(600, 600)

const len = 1
let angleFactor = 5
let list = []
let r = 1
let divider = 256
let step = 1


const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600)
        p5.background(0)
        p5.frameRate(24)
    }

    p5.draw = () => {
        // p5.background(0)
        let n = step
        do {
            n = collatz(n)
            list.push(n)
        } while (n !== 1)
        list.push(1)
        list = list.reverse()
        p5.resetMatrix()
        p5.translate(p5.width / 2, p5.height / 2)
        for (let j = 0; j < list.length; j++) {
            const value = list[j]
            seaweed(value)
        }

        if (step % 15 === 0) {
            angleFactor += 0.5
        }

        if (step < 550) {
            divider -= 3
            step += 1
            // r += 0.5
        }
    }

    p5.keyPressed = () => {
        if (p5.key == 'r' || p5.key == 'R') {
            p5.draw();
        } else if (p5.key == 's' || p5.key == 'S') {
            p5.save("###.jpg");
        }
    }

    function seaweed(value) {

        p5.rotate((p5.PI / angleFactor))
        // console.log(green)
        p5.stroke(p5.lerp(0, 100, 255), -divider, 255, 80)
        p5.point(value, divider)
        // p5.rect(value, divider, 10, 10)
        p5.translate(len, 0)
        p5.rotate(p5.PI)

    }

    function collatz(n) {
        if (n % 2 === 0) {
            return n / 2
        }
        return (n * 3 + 1) / 2
    }

}


const sketck = new p5(s)