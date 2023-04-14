function BinaryToDecimal (binary) {
  // Your code here:
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    const result = Math.pow(2, binary.length - (i + 1)) * binary[i];
  
    sum += result;
  }

  return sum;
}

module.exports = BinaryToDecimal;

console.log(BinaryToDecimal("10")); // 2
console.log(BinaryToDecimal("111")); // 7
function DecimalToBynary(num) {
  // Your code here:
  console.log(num)
  let operacion = Math.floor(num / 2);
  let resto = num % 2;
  if (num !== 0) {
    return DecimalToBynary(operacion) + resto;
  }
  return "";
}

module.exports = DecimalToBynary;

console.log(DecimalToBynary(4)); //('100')
console.log(DecimalToBynary(7)); //('111')


module.exports = BinaryToDecimal
