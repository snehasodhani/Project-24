class Sand{
    constructor(x){
       var  options={
            restitution:0.4,
            friction:6,
            density:1

        }
        this.body=  Matter.Bodies.circle(x,200,20,options);
        World.add(world,this.body);

    }

         display(){

        strokeWeight(4)
        stroke("black")
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,20,20);


    }
}