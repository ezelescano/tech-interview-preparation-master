function intersection (arr1, arr2) {
  // Your code here:

//  Primera solución
  //  let result = []

  //  for (const num1 of arr1) {

  //   for (const num2 of arr2) {
  //    if( num1 === num2) result.push(num1)

  //   }
  //  }
  //return arr1.filter(num1=> arr2.includes(num1))
  //O(N*M) o(5 * 6)30 OPS

  //  Segunda solución
  // let result = [];
  // let i = 0;
  // let j = 0;

  // console.log(arr1);
  // //                                  |
  // console.log(arr2);
  // //                                    |
  // while (i < arr1.length) {
  //   num1 = arr1[i];
  //   num2 = arr2[j];

  //   if (num1 === num2) {
  //     result.push(num1);
  //     i++;
  //     j++;
  //   } else if (num1 < num2) i++;
  //   else j++;
  // }
  // return result
  //O(N+M) /5*6 =30 OPS --> 5+6 = 11 OPS

  //  Tercera solución Objeto
  // let obj = {};
  // for (const num1 of arr1) obj[num1] = true;
  // console.log(obj)
  // return arr2.filter(num2=>obj[num2])
  //O(N+M)

  //  Cuarta solución array asociativo
  // let arr = [];
  // for (const num1 of arr1) arr[num1] = true;
  // console.log(arr)
  //  return arr2.filter((num2) => arr[num2]);
  //O(N+M)

  //  Quinta solución HashMap
  let hashMap = new Map();
  console.log(hashMap);
  for (const num1 of arr1) hashMap.set(num1, true);
  console.log(hashMap);
  return arr2.filter((num2) => hashMap.get(num2));
  //O(N+M)
}

//Ordenados
console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])); //[3,10]
console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])); //[]

//Desordenados
console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])); //[10,3]

module.exports = intersection
