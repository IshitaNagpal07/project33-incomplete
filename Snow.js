class Snow {
    constructor(x,y){
      this.smokeImage = loadImage("snow4.webp");
      this.trajectory =[];
      this.Visiblity=255;
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        push();
        this.Visiblity=this.Visiblity-0.5;
        tint(255,this.Visiblity);
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        pop();
      }
    }
  }
  