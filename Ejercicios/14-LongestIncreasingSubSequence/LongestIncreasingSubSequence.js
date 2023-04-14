function longestIncreasingSubsequence (nums) {
  // Your code here:

  const sequences = [];
  let longest = 0
  for (const num of nums) {
    let copySequences = [...sequences];
    sequences.push([num]);
    for (const seq of copySequences) {
      if (num > seq[seq.length - 1]) {
        let newSeq = [...seq, num];
        sequences.push(newSeq);
        if(newSeq.length > longest) longest = newSeq.length
      }
    }
  }
  return longest
}

console.log(longestIncreasingSubsequence([3, 10, 4, 5])); // 3

console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])) //3

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])) //6

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28])) //9

module.exports = longestIncreasingSubsequence
