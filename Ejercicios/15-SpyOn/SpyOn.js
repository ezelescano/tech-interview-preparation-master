function spyOn (fn) {
  // Your code here:

  let contador = 0;
  let numerosLlamados = new Set();
  let resultados = new Set();

  function spy(...args) {
    for (const arg of args)numerosLlamados.add(arg) 
    contador++;
    const result = fn(...args)
    resultados.add(result)
    return result
  }

  spy.getCallCount = () => contador;
  spy.wasCalledWith = (value) => numerosLlamados.has(value)
  spy.returned = (value) => resultados.has(value) 


  return spy;
}

const adder = (n1, n2) => n1 + n2;

const adderSpy = spyOn(adder); //spy

console.log(adderSpy.getCallCount()); // 0;
adderSpy(2, 3); //5
adderSpy(4, 10); //14
console.log(adderSpy.getCallCount());
adderSpy(8, 99); //107
console.log(adderSpy.getCallCount()); // 3
console.log(adderSpy.wasCalledWith(99)); // true
console.log(adderSpy.wasCalledWith(-800));//false

console.log(adderSpy.returned(0)); // false
console.log(adderSpy.returned(107)); // true

module.exports = spyOn
