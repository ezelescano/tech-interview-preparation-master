function curry (fn) {
  // Your code here:

  const arguments2 = [];
  // fn.length me dice qué cantidad de argumentos espera fn
  
  return function b35(arg) {
    arguments2.push(arg);
    if (arguments2.length === fn.length) return fn(...arguments2);
    return function (newArg) {
      return b35(newArg);
    };
  };
}

const sum = (a, b, c) => a + b + c;

const sumCurried = curry(sum);

const firstArgument = sumCurried(1);
const secondArgument = firstArgument(2);
console.log(secondArgument);
console.log(secondArgument(3));

module.exports = curry
