
var cities = [];
var totalCities = 6;

var order = [];

var recordDistance;
var bestPath;

function setup() {
    createCanvas(500, 600);
    // create random cities array
    for (var i = 0; i < totalCities; i++) {
        var point = createVector(random(width), random(height / 2));
        cities[i] = point;
        order[i] = i;
    }

    var dist = calcDistance(cities,order);
    recordDistance = dist;
    bestPath = order.slice();

}

function draw() {
    background(0);

    writeText();
    plotCities();
    drawBestPath();
    translate(0,height/2);
    drawCurrentPath();
    
   // RandomizeCities();
    checkDistance();
   order =  lexicographic(order);

}

function checkDistance() {
    var dist = calcDistance(cities, order);
    if (dist < recordDistance) {
        recordDistance = dist;
        bestPath = order.slice();
    }
}

function drawBestPath() {
    stroke(255, 255, 0);
    strokeWeight(4);
    noFill();
    beginShape();
    for (var i = 0; i < order.length; i++) {
        var cityindex = bestPath[i];
        vertex(cities[cityindex].x, cities[cityindex].y);
    }
    endShape();
}

function plotCities() {
    fill(255);
    for (var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

}

function drawCurrentPath() {
    stroke(255)
    strokeWeight(1);
    noFill();
    beginShape();
    for (var i = 0; i < order.length; i++) {
        var cityindex = order[i];
        vertex(cities[cityindex].x, cities[cityindex].y);
    }
    endShape();
}

function RandomizeCities() {
    var randI = floor(random(cities.length));
    var randJ = floor(random(cities.length));
    swap(cities, randI, randJ);
}
function writeText() {
    fill(255);
    noStroke();
    textSize(12);
    text(`Best: ${floor(recordDistance)}`, 340, 10);

}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function calcDistance(points, order) {
    var sum = 0;
    for (var i = 0; i < order.length - 1; i++) {
        var cityAIndex = order[i];
        var cityA = points[cityAIndex];
        var cityBIndex = order[i + 1];
        var cityB = points[cityBIndex];
        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}