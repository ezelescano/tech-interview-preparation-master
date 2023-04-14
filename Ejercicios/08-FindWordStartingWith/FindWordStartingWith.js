function FindWordStartingWith (book, query) {

    // Your code here:
    // console.log(query)
    // const text = book.text.toLowerCase();
    // const result = []
    // console.log(text);
    // for (let i = 0; i < text.length; i++) {
    //   console.log(text[i]);
    //   const sliced = text.slice(i, i+ query.length)
    //   if(sliced === query && (text[i - 1] === ' ' || i === 0) ) result.push(i)
      
    // }
    // return result
  
    // O(n)
    console.log(query)
    const text = book.text.toLowerCase()
    const result = []
  
    for (let i = 0; i < text.length; i++) {
      console.log(text[i])
      // 
      if( i === 0 || text[i-1] === ' '){
  
        for (let j = 0; j < query.length; j++) {
          console.log(query[j])
          //                                          |
          if(query[j] !== text[i + j]) break;
          if(j === query.length - 1) result.push(i)
          
    
        }
      }                                       
      
    }
    return result
  
      
    }
  
  
  module.exports = FindWordStartingWith
  
  // const book = {
  //     id: 1,
  //     text:
  //       'Erase una vez'
  //     }
  
  // console.log(FindWordStartingWith(book, 'un')) //([6])
  
  
  const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
  }
  
  console.log(FindWordStartingWith(book, 'de')) //([23])
  console.log(FindWordStartingWith(book, 'un')) //([6, 14, 43])
  console.log(FindWordStartingWith(book, 'franco')) //([])
  console.log(FindWordStartingWith(book, 'era'))//([0, 39])



  function FindWordStartingWith(book, query) {
    const text = book.text.toLowerCase();
    const query2 = query.toLowerCase();
    let indices = [];
  
    //Primer alternativa O(N*M)
  
    // for (let i = 0; i < text.length; i++) {
    //   const pedacitos = text.slice( i, i + query2.length )
    //   console.log(pedacitos)
    //   if(pedacitos === query2 && (text[i-1] === " " || i === 0))indices.push(i)
    // }
    // return indices
  
    //Segunda alternativa o(N) O(N+M)
    for (let i = 0; i < text.length; i++) {
      
      if (text[i - 1] === " " || i === 0) {
        for (let j = 0; j < query.length; j++) {
          if (query2[j] !== text[i + j]) {
            i = i + j;
            break;
          }
          if (j === query.length - 1) {
            indices.push(i);
            i = i + j;
          }
        }
      }
    }
    return indices;
  }
  
  //Tercer alternativa:
  
  //creo un trie
  
  /*
  const buildTrie = (text) => {
    const trie = {};
    const separators = {
    ' ': true,
    '.': true,
    ',': true,
    }
    for (let i = 0; i < text.length; i += 1) {
        let currentLetter = trie;
        const startingIndex = i;
        while(text[i] && !separators[text[i]]) {
            currentLetter[text[i]] = currentLetter[text[i]] || { indexes: [] }
            currentLetter = currentLetter[text[i]];
            currentLetter.indexes.push(startingIndex);
            i++;
        }
    }
    return trie;
  };
  
  */
  
  //Una vez que el TRIE es creado todo lo que necesitas hacer es iterar a través del largo del string, recorrer los nodos hasta que llegues al final y luego, retornar el arreglo de indices en ese punto.
  
  /*
  const tries = {};
  const findOrCreateTrie = ({ id, text }) => {
      tries[id] = tries[id] || buildTrie(text);
      return tries[id];
  };
  
  const findWordsStartingWith = (book, query) => {
      const trie = findOrCreateTrie(book)
      let currentLetter = trie;
      query = query.toLowerCase();
      for (let i = 0; i < query.length && currentLetter; i++) {
          currentLetter = currentLetter[query[i]]
      }
      return currentLetter ? currentLetter.indexes: [];
  }
  */
  
  
  
  const book = {
    id: 1,
    text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
  };
  
  console.log(FindWordStartingWith(book, "un")); //[ 6,14, 43]
  console.log(FindWordStartingWith(book, "de")); //[ 23]
  console.log(FindWordStartingWith(book, "franco")); //[]
  console.log(FindWordStartingWith(book, "erA")); //[ 0, 39]