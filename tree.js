class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width, height,options);
      this.image=loadImage("tree.png");
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("aquamarine");
      image(this.image,1000,100,1000);
      //tre.scale=0.5;
    }
  };