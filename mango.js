class Mango {
    constructor(x, y,radius) {
      var options = {
        isStatic:true,
          'restitution':0,
          'friction':1
          
      }
      this.body = Bodies.circle(x, y, radius-40, options);
      this.radius = radius;
      this.image=loadImage("mango.png");
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("green");
      fill("white");
      imageMode(CENTER);
     image(this.image,this.radius,this.radius);
      pop();
    }
  };
  