class Paper
{
constructor(x,y,radius){
this.x=x;
this.y=y;
this.r=radius
this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2});
World.add(world,this.body)
}
display()
{
push ()
translate (this.body.position.x,this.body.position.y)
rectMode(CENTER)
ellipse(0,0,this.r*2,this.r*2);
pop ()
}
}