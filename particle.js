class Particle{
    constructor(x,y){
        var options ={
            restitution:0.4
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        circle(pos.x,pos.y,this.r*2);
    }
}