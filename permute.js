function split (ar) {
  if (ar.length != 1){
    //split the array and permute each half
    const ar1 = ar.slice(0, Math.floor(ar.length/2));
    const ar2 = ar.slice(Math.floor(ar.length/2), ar.length);

    return permute(split(ar1), split(ar2));
  }

  return [ar];
}

function permute (ar1, ar2) { 

  let possibilities = [];
  
  mergeArray(ar1, ar2).forEach(poss => {
    possibilities.push(poss);
  });

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