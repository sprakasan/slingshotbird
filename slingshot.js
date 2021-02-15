class slingshot {
constructor (bodyX,pointY){
    var options={
        bodyA:bodyX,
        pointB:pointY,
        stiffness: 0.04, 
        length: 100
    } 
    this.ss= Constraint.create(options)
    this.pointB= pointY
    World.add(world,this.ss)
} 
display(){
    if(this.ss.bodyA){
        
var pointA = this.ss.bodyA.position
var pointB= this.pointB
strokeWeight(5)
line (pointA.x,pointA.y, pointB.x,pointB.y)
} 
}
fly(){
    this.ss.bodyA=null
    
}
}