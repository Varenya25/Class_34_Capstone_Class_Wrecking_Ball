class Box {
    constructor (x,y, w, h, angle) {
        var box_options = {
            restitution : 0.8,
            friction : 1.3,
            density : 0.04
          }
          this.width = w ;
          this.height = h ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, box_options);
          World.add (myWorld, this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        fill("brown");
        strokeWeight(4);
        stroke("yellow");
        rectMode (CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}