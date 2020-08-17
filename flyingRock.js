class FlyRock{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.FLrock = Constraint.create(options);
        World.add(world, this.FLrock);
    }

fly(){

this.FLrock.bodyA=null;


}

    display(){

        if(this.FLrock.bodyA){
        var pointA = this.FLrock.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}