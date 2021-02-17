class Plane{
    constructor(x,y,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,50,options);
        this.width=width;
        this.height=50;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height)
    }
}