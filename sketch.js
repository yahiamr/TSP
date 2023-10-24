
var cities = [];
var totalCities = 10;
var recordDistance;
var bestPath;

function setup() {
    createCanvas(500, 500);

    for (var i = 0; i < totalCities; i++) {
        var point = createVector(random(width), random(height));
        cities[i]= point;
    }

}

function draw() {
    background(0);

    fill(255);
    for (var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    

    stroke(255)
    strokeWeight(1);
    noFill();
    beginShape();
    for(var i = 0;i<cities.length;i++){
        vertex(cities[i].x,cities[i].y);
    }
    endShape();




}