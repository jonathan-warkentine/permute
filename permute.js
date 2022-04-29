function permute (ar, depth) { 
  let results;

  let lengths = [];
  for (let i=0; i<depth; i++){
    lengths.push(Math.floor(Math.random()*ar.length+1));
  }

  results = lengths.map(lngth => randomize(ar, lngth, depth)).flat();
  
  return results.filter((result, index) => { //filters duplicates
     return results.findIndex(res => arrMatch(res, result)) == index;
  });

}

function randomize (ar, lngth, depth) { //randomizes array order
    
  let randomed = [];
  
  for (let i=0; i<depth; i++){
    let tempAr = [...ar];
    randomed[i] = [];
    while (randomed[i].length < lngth){
      randomed[i].push(tempAr.splice(Math.floor(Math.random()*tempAr.length), 1));
    }
  }
  return randomed.map(arr => arr.flat());
}

function arrMatch (ar1, ar2) {
  return ar1.length == ar2.length?
    ar1.every(el => ar2.includes(el)):
    false;
}

console.log(permute([1,2,3,4,5,6], 100))