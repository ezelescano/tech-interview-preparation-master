function SumArray (arr, n) {
  // Your code here:
  let suma = 0;
for(let i = 0; i < arr.length; i++){
  for(let j = 1; j < arr.length -1; j++){
    suma = i + j;
  }
}
}


SumArray([2, 4, 5, 9], 9);
SumArray([2, 4, 5, 9], 12)
module.exports = SumArray
/*
Introducción
En este caso se nos presentan dos elementos: una arreglo ordenado de números enteros y un número entero.

El objetivo del ejercicio es encontrar si la combinación de dos números cualesquiera del arreglo, suman el número dado.

Ejemplos:

Existen dos valores
arreglo: [2,4,5,9]
número: 9
return: true

No existen dos valores
arreglo: [2,4,5,9]
número: 12
return: false
*/

function SumArray(arr, n) {
  
  // Primer alternativa:
  //O(N^2)
  /*  for (let i = 0; i < arr.length-1; i++) {
   for (let j = i+1; j < arr.length; j++) if(arr[i] + arr[j] === n )return true
  }
  return false
  */

  //Segunda alternativa:  O(N) Más optima pero solo arrays ordenados
  /* 
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let suma = arr[i] + arr[j];
    if (suma === n) return true;
    else if (suma > n) j--;
    else i++;
  }
  return false;
  */
}

//Ordenados
console.log(SumArray([2, 4, 5, 9], 9)); // true

console.log(SumArray([2, 4, 5, 9], 12)); //false

console.log(SumArray([2, 5, 9], 4)); // false

//Desordenados
console.log(SumArray([4, 2, 9, 5], 7)); // true

console.log(SumArray([5, 2, 9, 4], 12)); // false