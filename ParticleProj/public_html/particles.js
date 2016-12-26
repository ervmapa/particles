//window.document.body.onload = particles;


function updateTextInput(val) {
          particleNum=val; 
        }
        
function updateSize(val) {
          particleSize=val; 
        }
 
 function updateVx(val) {
          vx=val; 
        }
 
 function updateVy(val) {
          vy=val/100; 
        }
        
        
function particles() {

    var img1 = new Image();



    img1.src = 'img/Home.jpg';
    var canvas = document.getElementById("myCanvas");//  createElement("canvas"),
        c = canvas.getContext("2d");

        //canvas.width=440
        //canvas.height=300
       
 
      
      
        particles = {},
        particleIndex = 0,
        particleSize=2,
        vx=5;
        vy=0.05;

        particleNum = 10;

    img1.src = 'back.jpg';
    c.drawImage(img1, 0, 0);



    //document.body.appendChild(canvas); //The appendChild() method appends a node as the last child of a node.
    //canvas.innerHTML

    generatorX = Math.random() * canvas.width;
    generatorY = 0;


    

    // Erase canvas
    //c.fillStyle = "black";
   // c.fillRect(0,0,canvas.width,canvas.height);
   // c.drawImage(img1, 0, 0);


    function Particle(){
        this.x = Math.random() * (canvas.width + 200) - 100;
        this.y = generatorY;
        this.vx = Math.random()*vx ; 
        this.vy = Math.random()*2; 
        this.size = Math.random() * particleSize;
        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 100;
        this.gravity = vy;
        this.brightness = 1.0;
    }
    Particle.prototype.draw = function() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy +=  this.gravity;

      this.life++;
      if (this.life >= this.maxLife) {
          delete particles[this.id];
      }
      this.brightness *= 0.985;
      c.fillStyle = "rgba(255, 255, 255," + this.brightness+ ")";
      c.fillRect(this.x, this.y, this.size, this.size);
      
    };


    setInterval(function() {
                  // Erase canvas
    //c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
        c.drawImage(img1, 0, 0);
 


    // Create particles
    for (var i = 0; i < particleNum; i++) {
        new Particle();
    }

    for (var i in particles) {
        particles[i].draw();
    }

    }, 30);



}


