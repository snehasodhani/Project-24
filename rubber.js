class Rubber{
    constructor(x,y){
       var  options={
            restitution:0.4,
            friction:6,
            density:2

        }
        this.body=  Matter.Bodies.circle(x,y,30,options);
        World.add(world,this.body);

    }

        display(){

        fill("red")
        ellipse(this.body.position.x,this.body.position.y,70,70);


    }
}