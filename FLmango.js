class FLmango{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.FLmango = Constraint.create(options);
        World.add(world, this.FLmango);
    }
    display(){

        if(this.FLmango.bodyA){
        var pointA = this.FLmango.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}