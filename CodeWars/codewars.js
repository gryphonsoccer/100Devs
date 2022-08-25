/*Turns a number into a list of its digits
function digitize(n) {
    let bob = String(n).split('').reverse().map(element=>Number(element));
    console.log(bob)
    
  }

  //merge to arrays and sort them (integers)
  function mergeArrays(arr1, arr2) {
    let bob = Array.from(new Set(arr1.concat(arr2).map(element=>Number(element)).sort((a, b) => a - b)));
    return bob;
    
  }
*/
// get them multiples

function findMultiples(integer, limit) {
  const nums = [];
  let i = integer
  while(i<=limit){
    nums.push(i);
    i += integer;
  };
  return nums;
}


console.log('Hello')


console.log(findMultiples(2, 10));