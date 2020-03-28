class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.i=255
  }
  display(){
    
    if(this.body.speed<3){
     super.display()
    }
    else{
      
   World.remove(world,this.body)
   push()
   this.i=this.i-10
   tint(255,this.i)
   image(this.image,this.body.position.x,this.body.position.y)
   pop()
    }
   
  console.log(this.body.speed)
  }
};