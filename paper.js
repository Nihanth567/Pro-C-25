class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2

        }

        //this.paper.circle(x,y,radius,options);
        this.paper = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/paper.png")
       // this.radius = radius;

       World.add(world,this.paper)
        
       
    }

    display(){
       //var pos = this.body.position;
      // var angle = this.body.angle;
       
        //push();
       //translate(pos.x,pos.y);
        //rotate(angle);
       
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        
        //pop();
    }

}