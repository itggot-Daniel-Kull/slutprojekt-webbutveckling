console.log('r/place');

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 81;

var c = canvas.getContext("2d");

innerHeight = innerHeight - 81;


// // Rectangles
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgba(255, 0, 0, 0.75)";
// c.fillRect(800, 100, 100, 100)
// c.fillStyle = "rgba(0, 255, 0, 0.75)";
// c.fillRect(100, 800, 100, 100)
// c.fillStyle = "rgba(0, 0, 255, 0.75";
// c.fillRect(800, 800, 100, 100);


// // Lines
// c.beginPath();
// c.moveTo(50, 500)
// c.lineTo(800, 200);
// c.lineTo(300, 200);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// // Arcs
// // c.beginPath();
// // c.arc(500, 300, 30, Math.PI * 2, false);
// // c.strokeStyle = "blue";
// // c.stroke();

// for (var i = 0; i < 2000; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * 255;
//     var g = Math.random() * 255;
//     var b = Math.random() * 255;
//     c.beginPath();
//     c.arc(x, y, 30, Math.PI * 2, false);
//     c.strokeStyle = ("rgba(" +r+ "," +g+ "," +b+")");
//     c.stroke();
// }


var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 50;
// var minRadius = 2;

// var colorArray = [
//     '#3C989E',
//     '#5DB5A4',
//     '#F4CDA5',
//     '#F57A82',
//     '#ED5276'
// ]
// var colorArray = [
//     '#3D0D26',
//     '#660A3E',
//     '#891C56',
//     '#B0276F',
//     '#C93482'
// ]
var colorArray = [
    '#121F27',
    '#416275',
    '#6191A8',
    '#BBCFDA',
    '#E4EEF0'
]

window.addEventListener("mousemove", 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y - 75;
    }
)

window.addEventListener("touchmove", 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y - 75;
    }
)

window.addEventListener("resize", 
    function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 85; 
    }
)

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(colorArray.length * Math.random())];
    // this.r = Math.random() * 255;
    // this.g = Math.random() * 255;
    // this.b = Math.random() * 255;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
            this.dx = -this.dx;
        if((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0)
            this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50 && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50) {
            if(this.radius < maxRadius) 
                this.radius += 1;
        } else if(this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 1000; i++) {
    var radius = 5 * Math.random() + 1;
    var x = (innerWidth - radius * 2) * Math.random() + radius;
    var y = (innerHeight - radius * 2) * Math.random() + radius;
    var dx = 5 * (Math.random() - 0.5);
    var dy = 5 * (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();

function shuffle() {
    console.log('Shuffling :D'); 

    circleArray = [];

    for(var i = 0; i < 1000; i++) {
        var radius = 5 * Math.random() + 1;
        var x = (innerWidth - radius * 2) * Math.random() + radius;
        var y = (innerHeight - radius * 2) * Math.random() + radius;
        var dx = 5 * (Math.random() - 0.5);
        var dy = 5 * (Math.random() - 0.5);
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function add(amount) {
    for(var i = 0; i < amount; i++) {
        var radius = 5 * Math.random() + 1;
        var x = (innerWidth - radius * 2) * Math.random() + radius;
        var y = (innerHeight - radius * 2) * Math.random() + radius;
        var dx = 5 * (Math.random() - 0.5);
        var dy = 5 * (Math.random() - 0.5);
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}