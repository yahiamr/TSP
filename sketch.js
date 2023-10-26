
var cities = [];
var totalCities = 10;
var recordDistance;
var bestPath;

function setup() {
    createCanvas(500, 500);
// create random cities array
    for (var i = 0; i < totalCities; i++) {
        var point = createVector(random(width), random(height));
        cities[i]= point;
    }

    var dist = calcDistance(cities);
    recordDistance = dist;
    bestPath = cities.slice();

}

function draw() {
    background(0);
   
    writeText();

    drawCurrentPath();
    drawBestPath();
    RandomizeCities();
    checkDistance();
    


}

function checkDistance () {
    var dist = calcDistance(cities);
  if (dist < recordDistance) {
    recordDistance = dist;
    bestPath = cities.slice();
  }
}

function drawBestPath(){
    stroke(255, 0, 0);
    strokeWeight(4);
    noFill();
    beginShape();
    for(var i = 0;i<cities.length;i++){
        vertex(bestPath[i].x,bestPath[i].y);
    }
    endShape();
}

function drawCurrentPath() {
    fill(255);
    for (var i = 0; i < cities.length; i++) 
    {
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

function RandomizeCities(){
    var randI = floor(random(cities.length));
    var randJ = floor(random(cities.length));
    swap(cities , randI , randJ);
}
function writeText(){
    fill(255);
    noStroke();
    textSize(12);
    text(`Best: ${floor(recordDistance)}`, 340, 10);
  
}

function swap(arr , i , j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;
}

function calcDistance(points){
    var sum = 0;
    for(var i = 0; i< points.length - 1; i++){
        var d = dist(points[i].x,points[i].y,points[i+1].x,points[i+1 ].y);
        sum+= d;
    }
    return sum;
}