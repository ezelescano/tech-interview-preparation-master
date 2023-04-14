function HasBalancedBrackets (string) {
  // Your code here:

  const validaBrackets = {
    '{': '}',
    '[': ']',
    '(':')'
  }
  const openBrackets = [] 
  for (let i = 0; i < string.length; i++) {
    if(validaBrackets[string[i]]){
      openBrackets.push(string[i])
    }else if(validaBrackets[openBrackets.pop()] !== string[i]){
        return false
    }
  }
  return !openBrackets.length
}

module.exports = HasBalancedBrackets

// console.log(HasBalancedBrackets('{}'))//  (true)

console.log(HasBalancedBrackets('{[]()}'))//  (true)
console.log(HasBalancedBrackets('{[(])}'))//  (false)
console.log(HasBalancedBrackets('{[('))//  (false)
console.log(HasBalancedBrackets('{[([{()[]{}}])]}'))//  (true)
console.log(HasBalancedBrackets('{[]}}'))//  (false)
