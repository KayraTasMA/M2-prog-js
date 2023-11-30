class App
{
    runApplication()
    {
        //code
       let canvas = document.getElementById("canvasId")
       let g = canvas.getContext("2d");
       g.beginPath()
       g.fillStyle = "red";
       g.moveTo(30,10);
       g.lineTo(70,20);
       g.lineTo(60,40)
       g.lineTo(20,30)
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "beige ";
       g.moveTo(20,30);
       g.lineTo(60,40);
       g.lineTo(60,60)
       g.lineTo(20,50)
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "beige";
       g.moveTo(60,40);
       g.lineTo(80,30);
       g.lineTo(80,50)
       g.lineTo(60,60)
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "red";
       g.moveTo(60,40);
       g.lineTo(80,30);
       g.lineTo(70,20)
       g.closePath();
       g.stroke();
       g.fill();

       g.beginPath()
       g.fillStyle = "aqua  ";
       g.moveTo(35,50);
       g.lineTo(40,50);
       g.lineTo(40,40)
       g.lineTo(35,40)
       g.closePath();
       g.stroke();
       g.fill();
       
      

       console.log(canvas)
       
       
    }
}

let app = new App();
app.runApplication();


