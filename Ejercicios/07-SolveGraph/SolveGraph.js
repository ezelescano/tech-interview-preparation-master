function SolveGraph (graph, start, end) {
  // Your code here:

  console.log(target) 
  console.log(start)
  console.log(visited)
                   //                                                      |----|
  if(visited.includes(start)) return false
  visited.push(start)
  console.log(visited)
                //                                    |----|
  for (const node of graph[start]) {
    console.log(node)
    if(node === target) return true
    if(SolveGraph(graph,node ,target, visited)) return true
  }
  return false


}



// if (visited[start]) return false;
// visited[start] = true;
// // if (visited.includes(start)) return false;
// // visited.push(start);
// for (const node of graph[start]) {
//   if (node === target) return true;
//   if (SolveGraph(graph, node, target, visited) === true) return true;
// }
// return false;
// }
// //Complejidad temporal
// //O(V+E) // el peor de los casos se recorre todos los nodos y sus hijos
// const graph = {
// a: ["c"], //true
// b: ["c"],
// c: ["s", "r"], //true
// d: ["a"],
// s: ["a", "c"], //
// r: ["d"],
// z: ["z"],
// };
// console.log(SolveGraph(graph, "a", "r")); //true
// console.log(SolveGraph(graph, "a", "c")); //true
// console.log(SolveGraph(graph, "a", "s")); //true
// console.log(SolveGraph(graph, "a", "d")); //true
// console.log(SolveGraph(graph, "s", "b")); //false

module.exports = SolveGraph
const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z']
}

// console.log(SolveGraph(graph, 'a', 'c'))//  (true)

console.log(SolveGraph(graph, 'a', 'r'))//  (true)
console.log(SolveGraph(graph, 'a', 'd'))//  (true)
console.log(SolveGraph(graph, 's', 'b'))//  (false)


