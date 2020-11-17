class Block {
    constructor(x, y) {
      var options = {
      isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 700;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  