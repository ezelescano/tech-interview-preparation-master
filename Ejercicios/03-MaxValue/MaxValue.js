function MaxValue (shares) {
  // Your code here:

  // console.log(shares)
  // let max = shares[1] - shares[0];
  // console.log(max);
  // // recorremos sobre la posibilidad de compra
  // for (let i = 0; i < shares.length -1 ; i+=1) {
  //   // recorremos sobre la posibilidad de venta
  //   for (let j = i+1; j < shares.length; j++) {
  //     const potential = shares[j] - shares[i];
  //     max = potential > max ? potential : max
  //   }
  // }
  // return max;
  //O(n^2)
  let max = shares[1] - shares[0];
  let minPrice = shares[0]
  for (let i = 1; i < shares.length; i+=1) {
    //sacamos la ganancia potencial
    const potential = shares[i] - minPrice;
    //nos quedamos con el mayor valor
    max = Math.max(max, potential);
    // nos quedamos con el menor valor
    minPrice = Math.min(minPrice, shares[i]);
  }
  return max;
  //O(n)
}
module.exports = MaxValue
console.log(MaxValue([4, 3, 2, 5, 11])) //(9)
console.log(MaxValue([23, 7, 3, 4, 8, 6])) //(5)
