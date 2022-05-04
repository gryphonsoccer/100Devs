//Turns a number into a list of its digits
function digitize(n) {
    let bob = String(n).split('').reverse().map(element=>Number(element))
    console.log(bob)
    
  }

  //merge to arrays and sort them (integers)
  function mergeArrays(arr1, arr2) {
    bob = Array.from(new Set(arr1.concat(arr2).map(element=>Number(element)).sort((a, b) => a - b)));
    return bob;
    
  }

console.log(mergeArrays([-1,-2,-3,-4,-4], [5,6,7,8]))