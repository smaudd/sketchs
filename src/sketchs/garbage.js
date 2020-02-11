import p5 from 'p5'

// Collatz Conjecture
const len = 1
let angle = 0.5
let angleFactor = 5
// let n = 15500
let list = []
let color1 = 0
let color2 = 0
let divider = 256
let step = 1
let weight = 0
const s = (p5) => {

    p5.setup = () => {
        p5.createCanvas(600, 600)
        p5.background(0)
        // p5.frameRate(160)
        // p5.angleMode(p5.DEGREES)
        // list.forEach(value => {
        //     if (value % 2 === 0) {
        //         p5.rotate(-angle)
        //     } else {
        //         p5.rotate(angle)
        //     }
        //     p5.stroke(255)
        //     p5.line(0, 0, len, 0)
        //     p5.translate(len, 0)
        // })
    }

    p5.draw = () => {
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
            // if (step < 250) {
            //     circleShape(value)
            // } else {
            //     seaweed(value)
            // }
        }

        if (step % 25 === 0) {
            angleFactor++
        }

        if (step < 550) {
            color1 = p5.noise(step)
            color2++
            // if (divider > 3) {
            divider -= 1
            // }
            step += 1
            // angle = 0.008
        } else {
            // console.log('ro')
            // p5.rotate(p5.PI / 255)
            // p5.noLoop()
        }
        // p5.translate(p5.width / 2, p5.height)
        // if (n % 2 === 0) {
        //     p5.rotate(angle)
        // } else {
        //     p5.rotate(-angle)
        // }
        // p5.stroke(255)
        // p5.line(0, 0, 0, -len)
        // p5.translate(0, -len)
        // for (let i = 0; i < n; i++) {
        //     // console.log(collatz(i))
        //     p5.point(collatz(i), 15)
        //     p5.strokeWeight(3)
        // }
        // p5.noLoop()
    }

    function particle(value) {
        if (value % 2 === 0) {

            // if (p5.random() > 0.2) {
            p5.stroke(255, 255, 255, 50)
            p5.rotate(angle)
            // weight += 0.01
            p5.point(0, len)
            // weight -= 0.3
        } else {
            p5.rotate(-angle)
        }
        // } else {
        //     p5.rotate(p5.PI / -255)
        //     p5.stroke(0, 255, 255, 70)
        //     p5.point(0, len)
        //     weight += 0.0005
        // }
        // else {
        // }
        p5.strokeWeight(weight)
        // p5.line(0, 0, len, 0)
        // p5.line(0, 0, 0, len)
        p5.translate(len, 0)
    }

    function seaweed(value) {
        // p5.stroke(255, 100, 140, 75)

        // if (value % 2 === 0) {
        // } else {
        // p5.rotate(p5.PI / -255)
        // p5.stroke(color1, 0, 255, 50)
        // p5.point(len, 0)
        // p5.translate(len, 0)

        p5.rotate(p5.PI / angleFactor)
        p5.stroke(p5.lerp(0, 10, 255), -divider, 120, 50)
        p5.point(value, divider)
        //     // }
        //     // p5.strokeWeight(p5.random(1, 5)
        //     // p5.rect(10, 10, 10, .1)
        //     // p5.stroke(51, 204, 204)
        //     // p5.line(10, 10, 10, 10)
        //     // p5.strokeWeight(step * 0.1)
        p5.translate(len, 0)
    }



    function seaweed2(value) {
        p5.stroke(0, step * 0.01, 255, 50)
        if (value % 2 === 0) {
            p5.rotate(p5.PI / -255)
        } else {
            // p5.rotate(p5.PI / -255)
            // p5.stroke(color1, 0, 255, 50)
            // p5.point(len, 0)
            // p5.translate(len, 0)
        }
        p5.line(step * 0.001, 0, len, step * 0.01)
        p5.translate(len, 0)
    }

    function collatz(n) {
        if (n % 2 === 0) {
            return n / 2
        }
        return (n * 3 + 1) / 2
    }

}


const sketck = new p5(s)