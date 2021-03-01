class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        image(this.sling1,250,120,50,100);
        image(this.sling2,215,127,50,50);
       
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            if(pointA.x<230) {
                strokeWeight(7);
                stroke(79,37,14);
                line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x, pointA.y, pointB.x+33, pointB.y);
                image (this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            
            else{
            strokeWeight(3);
            stroke(79,37,14);
            line(pointA.x-30, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x, pointA.y, pointB.x+33, pointB.y);
            image (this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            this
            pop ();
        }
    
    
    
    }
    
}