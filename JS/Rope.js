class Rope {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 1.2,
            length : 250
        }
        
        this.rope = new Constraint.create (options);
        World.add(myWorld,this.rope);
    }

    display () {
        if(this.rope.bodyA != null){
            var point1 = this.rope.bodyA.position;
            var point2 =  this.rope.pointB;
            
            push();
            fill("brown");
            strokeWeight(7);
            stroke(42,28,8);
            
            line(point1.x,point1.y,point2.x,point2.y);
            
            pop();
       }
    }
  }