

function lexicographic(vals){

   

    //STEP1 
    var largestI = -1;
    for(var i = 0 ; i<vals.length;i++){
        if (vals[i] < vals[i + 1]) {
            largestI = i;
          }
    }
    if(largestI == -1){
        noLoop();
        console.log("Finished")
      }   
//STEP2
var largestJ = -1;
  for (var j = 0; j < vals.length; j++) {
    if (vals[largestI] < vals[j]) {
      largestJ = j;
    }
  }

  // STEP 3
  swap(vals, largestI, largestJ);

  //STEP4
  var endArray = vals.splice(largestI + 1);
  endArray.reverse();
  vals = vals.concat(endArray);



return vals
 
}




function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }