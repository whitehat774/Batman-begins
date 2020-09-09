class Umbrella {
    constructor(x, y, r) {
       var options ={
           isStatic : true
       }
       this.r = r
       this.body = Bodies.circle(x, y, options)
       this.image = loadImage("umbrella man.png")
       World.add(world, this.body)
    }
    display() {
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop();
    }
}