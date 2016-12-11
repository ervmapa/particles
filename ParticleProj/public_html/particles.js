//window.document.body.onload = particles;


function particles() { 

    var canvas = document.createElement("canvas");
    var c = canvas.getContext("2d");
    canvas.width=400;
    canvas.height=400;
    document.body.appendChild(canvas);
    
    // Erase canvas
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);

    var posX = 20;//canvas.width / 2,
        posY = canvas.height / 2,
        vx = 2, // Velocity x 
        vy = -7, // Velocity y
        gravity = 0.3; // Hur mycket velocityy skall ändras med  
    
    
    setInterval(function(){
        // Erase canvas
        //c.fillStyle = "black";
        c.fillStyle = "rgba(0,0,0,0.09)";

        c.fillRect(0,0,canvas.width,canvas.height);

        posX += vx;
        posY += vy;
        
        if (posY > 300) {
            vy *= -0.6; 
            vx *= 0.9;
            posY = 300;
        }

        vy += gravity;

        c.fillStyle = "yellow";
        c.fillRect(posX, posY, 1, 1);
        
    }, 30);
    
    console.log("hej");

}


