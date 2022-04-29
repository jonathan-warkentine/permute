function permute (ar) { 
//accepts an array of length 2 or 3 and returns an array of arrays containing all permutations
//if the array is longer the function splits the argument and recursively calls itself for each

if (ar.length > 3){
  //split the array and permute each half
  const ar1 = ar.slice(0, Math.floor(ar.length/2));
  const ar2 = ar.slice(Math.floor(ar.length/2), ar.length);

  return megaPermute(permute(ar1), permute(ar2));
}

//permute
let permutations = [];
permutations.push(ar.flat()); //covers both [ar[0], ar[1]] or [ar[0], ar[1], ar[2]]
// console.log(1, permutations)
ar.forEach(el => { //pushes each individual array element into the array
  permutations.push([el]);
});
// console.log(2, permutations)
if (ar[2]) {
  permutations.push([ar[1], ar[2]]);
  permutations.push([ar[0], ar[1]]);
  permutations.push([ar[0], ar[2]]);
}
return permutations;
}

function megaPermute(ar1, ar2){ //function will be receiving an array of arrays
let possibilities = [];
// console.log('ar1: ', ar1, '\nar2: ', ar2)
mergeArray(ar1, ar2).forEach(poss => {
  possibilities.push(poss);
})
for (let i=0; i<ar1.length; i++){
  for (let j=0; j<ar2.length; j++){
    possibilities.push(mergeArray(ar1[i], ar2[j]));
  }
}

return possibilities;
}

function mergeArray (ar1, ar2) {
return [ar1, ar2].flat();
}