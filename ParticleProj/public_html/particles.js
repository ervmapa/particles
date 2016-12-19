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
          vy=val; 
        }
        
        
function particles() {

    var img1 = new Image();



    img1.src = 'img/Home.jpg';
    var canvas = document.getElementById("myCanvas");//  createElement("canvas"),
        c = canvas.getContext("2d");

        canvas.width=440;
        canvas.height=300;
       

        particles = {},
        particleIndex = 0,
        particleSize=2,
        vx=5;
        vy=5;

        particleNum = 10;

    img1.src = 'back.jpg';
    c.drawImage(img1, 0, 0);



    document.body.appendChild(canvas);

    generatorX = canvas.width / 2;
    generatorY = canvas.height / 2;

    canvas.onclick = function (e) {

                generatorX = e.pageX;
                generatorY = e.pageY;
    }

   canvas.ondrag = function (e) {

                generatorX = e.pageX;
                generatorY = e.pageY;
    }
    

    // Erase canvas
    //c.fillStyle = "black";
   // c.fillRect(0,0,canvas.width,canvas.height);
   // c.drawImage(img1, 0, 0);


    function Particle(){
        this.x = generatorX;
        this.y = generatorY;
        this.vx = Math.random() * vx *2 - vx; // -5 to 5
        this.vy = Math.random() * vy *2 - vy; // -5 to 5
        this.size = Math.random() * particleSize;
        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 100;
        this.gravity = 0.01;
    }
    Particle.prototype.draw = function() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy +=  this.gravity;

      this.life++;
      if (this.life >= this.maxLife) {
          delete particles[this.id];
      }
      c.fillStyle = "rgba(255, 255, 255, 1)";
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


