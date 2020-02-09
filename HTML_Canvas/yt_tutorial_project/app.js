console.log('application running')

var dom = {
    canvas : '.canvas'
}

// getting the canvas element from html file
var canvas = document.querySelector(dom.canvas);

// setting styles to the canvas element
// canvas.setAttribute('style', 'background : grey;');


// making the canvas element always equal to width of viewport/window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// .getContext() method returns a drawing context on the canvas (c usually stands for context)

var c = canvas.getContext('2d'); 

// creates new object, position relative to canvas container
// c.fillRect(x, y, width, height) 

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(100, 300, 200, 200);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 100, 100, 100);

// creating a line
c.beginPath();

// c.moveTo(x, y); x and y is relative to window not previous line
// invisible until calls stroke method
c.moveTo(0, 0);
c.lineTo(400, 100);
c.lineTo(400, 300);
c.lineTo(600, 100);
c.lineTo(1000, 50);
c.strokeStyle = "orangered";
c.stroke();


console.log(canvas, c);