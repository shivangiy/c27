class Chain{
    constructor(bodyA,bodyB){
       var options={
           bodyA:bodyA,
           bodyB:bodyB,
           length:10,
           stifness:0.05
       } 
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
    }
    display(){
        stroke("black")
        strokeWeight(5);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}