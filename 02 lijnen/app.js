class App
{
    runApplication()
    {
        //code
       let canvas = document.getElementById("canvasId")
       let g = canvas.getContext("2d");
       g.fillStyle = "blue"
       g.fillRect(0,0,10,10);
       console.log(canvas)
       //line
       g.beginPath()
       g.moveTo(20,20)
       g.lineTo(300,300)
      g.closePath()
       g.stroke();

       g.beginPath()
       g.moveTo(20,20)
       g.lineTo(580,40)
      g.closePath()
       g.stroke();

       g.beginPath()
       g.moveTo(20,20)
       g.lineTo(5120,403)
      g.closePath()
       g.stroke();

       g.beginPath()
       g.moveTo(203,20)
       g.lineTo(5802,40)
      g.closePath()
       g.stroke();




       g.beginPath()
       g.fillStyle = "yellow";
       g.moveTo(20,20);
       g.lineTo(300,300);
       g.lineTo(520,20);
       g.closePath();
       g.stroke();
       g.fill();
       
       
    }
}

let app = new App();
app.runApplication();


