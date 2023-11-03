
function updatePop(value){
    noLoop();
    popLabel.innerText = "Population Size " + value;
    popSize = parseInt(value);

    update(false);
    loop();
  }


  function updateMutation(value){
    noLoop();
    mutationLabel.innerText = "Mutation %  " + value;
    mutationrate = parseInt(value)/100;
    
    update(false);
    loop();
  }
  


  function updateCities(value) {
    noLoop();
    cityLabel.innerText = "Number of cities: " + value;
    totalCities = parseInt(value);

    update(true);
    loop();
  }
  
  function update(regenerateCities){
    // Reset only if regenerateCities is true
    if (regenerateCities) {
        cities = [];
        order = [];
        for (var i = 0; i < totalCities; i++) {
            var point = createVector(random(width-20), random((height / 2)-20));
            cities[i] = point;
            order[i] = i;
        }
    }

    population = [];
    fitness = [];
    recordDistance = Infinity;
    
    for (var i = 0; i < popSize; i++) {
        population[i] = shuffle(order);
    }
}