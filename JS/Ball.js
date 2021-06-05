class Ball {
    constructor (x,y, width, height) {
        var ball_options = {
            density : 1,
            frictionAir : 0.005
          }
          this.width = width ;
          this.height = height ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, ball_options);
          World.add (myWorld, this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        rotate(angle);
        fill("silver");
        ellipse (0, 0, this.width,this.height);
        pop();
    }
}