var cities = [];
var totalCities =3;

var popSize = 500;
var population = [];
var fitness = [];
var order = [];

var initialOrder = [];

var mutationrate = 0.01;

var recordDistance = Infinity;
var bestEver;
var currentBest;

let citySlider, cityLabel;
let canvas;

function setup() {
  if (!canvas) {
    canvas = createCanvas(1400, 1400);
  } else {
    canvas.remove();
  }
  citySlider = document.getElementById("citySlider");
  cityLabel = document.getElementById("cityLabel");
  totalCities = citySlider.value;
  popSlider = document.getElementById("popSlider");
  popLabel = document.getElementById("popLabel");
  popSize = popSlider.value;

  mutationSlider = document.getElementById("mutationSlider");
  mutationLabel = document.getElementById("mutationLabel");
  mutationrate = mutationSlider.value/100;


  
  // create random cities array
  for (var i = 0; i < totalCities; i++) {
    var point = createVector(random(width), random(height / 2));
    cities[i] = point;
    order[i] = i;
  }
  for (var i = 0; i < popSize; i++) {
    population[i] = shuffle(order);
  }
  noLoop();
}

function draw() {
  background(0);

  calculateFitness();
  normalizeFitness();
  nextGeneration();

  drawBestPath();
  translate(0, height / 2);
  drawCurrentPath();
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
  for (var i = 0; i < bestPath.length; i++) {
    var cityindex = bestPath[i];
    vertex(cities[cityindex].x, cities[cityindex].y);
    ellipse(cities[cityindex].x, cities[cityindex].y, 16, 16);
  }
  endShape();
}

function drawCurrentPath() {
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < currentBest.length; i++) {
    var cityindex = currentBest[i];
    vertex(cities[cityindex].x, cities[cityindex].y);
    ellipse(cities[cityindex].x, cities[cityindex].y, 16, 16);
  }
  endShape();
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



document.addEventListener('DOMContentLoaded', (event) => {
  // Ensures the DOM is fully loaded before trying to attach the event listener
  document.getElementById('startButton').addEventListener('click', startSolvingTSP);
  document.getElementById('citySlider').addEventListener('change', function() {
    updateCities(this.value);
  });
  document.getElementById('popSlider').addEventListener('change', function() {
    updatePop(this.value);
  });
  
  document.getElementById('mutationSlider').addEventListener('change', function() {
    updateMutation(this.value);
  });
});
