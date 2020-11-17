class Ball {
    constructor(x, y) {
      var options = {
         
        isStatic:true
      }
      this.body = Bodies.circle(x, y, 100, options);
      this.r=100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("pink");
      ellipse(0, 0,100,100);
      pop()
    }
  };
  