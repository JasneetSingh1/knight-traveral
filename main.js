function knightMoves(start, end) {
  if (start.some((x) => x < 0 || x > 7) || end.some((x) => x < 0 || x > 7))
    return "Invalid start or end";

  if (isEqual(start, end)) return "0 Moves";
  const visited = new Set();
  visited.add(start.toString());
  const queue = [[start]];
  while (queue.length > 0) {
    const path = queue.shift();
    const step = path[path.length - 1];

    let moves = calcMove(step, end);
   
    for(const move of moves){
      if (isEqual(move, end)) {
        console.log(`You made it in ${path.length} moves! Here's your path:`);
        console.log([...path, move]);
        return;
      }
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([...path, move]); 
      }
    }
   
  }
}

function calcMove(start, end) {
  let set = new Set();
  
  set.add([start[0] + 2, start[1] + 1]);
  set.add([start[0] + 2, start[1] - 1]);

  set.add([start[0] - 2, start[1] + 1]);
  set.add([start[0] - 2, start[1] - 1]);

  set.add([start[0] + 1, start[1] + 2]);
  set.add([start[0] + 1, start[1] - 2]);

  set.add([start[0] - 1, start[1] + 2]);
  set.add([start[0] - 1, start[1] - 2]);
 
  for (const move of set) {
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) {
      set.delete(move);
    }
  }
  

  return set;
}



function isEqual(x, y) {
  if (x.length != y.length) return false;
  for (let i in x) if (x[i] != y[i]) return false;
  return true;
}



knightMoves([0,0],[7,0])
