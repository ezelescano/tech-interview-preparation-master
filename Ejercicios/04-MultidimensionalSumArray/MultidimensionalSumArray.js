function mdArraySum (arr) {
  // Your code here:

//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) sum += mdArraySum(arr[i]);
//     else sum += arr[i];
//   }
//   return sum;

// }

const mdArraySum = arr =>
arr.reduce((total, elem) => total + (Array.isArray(elem) ? mdArraySum(elem) : elem), 0)

// O(n)

module.exports = mdArraySum

console.log(mdArraySum([1, 2, 3, 4]))//(10)

console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])) //(14)

console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])) //(26)
}
//Primer alternativa O(N)
  // let total = 0;
  for (const elm of arr) (typeof elm === "number") ? total+=elm : total= mdArraySum(elm, total) //total+= mdArraySum(actual, total)
  return total;

  //Segunda alternativa O(N)                                                   
  // return arr.reduce((sum, actual) => sum + (typeof actual === "number" ? actual : mdArraySum(actual)),0)
}

console.log(mdArraySum([1, 2, 3, 4])); //10

console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); //14

console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])) //26