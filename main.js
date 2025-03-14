function knightMoves(start, end) {
  if (start < 0 || start > 7 || end < 0 || end > 7)
    return "Invalid start or end";

  if (isEqual(start, end)) return " 0 Moves";

  const queue = [start];
  let count = 0;
  while (queue.length > 0) {
    const step = queue.shift();
    count++;
    let moves = calcMove(step, end);
    console.log(step);
    if ([...moves].some((move) => isEqual(move, end))) {
      console.log(end);
      console.log("DONE");
      console.log(count)
      return;
    }

    for (const move of moves) {
      queue.push(move);
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
  
  let index = Array.from(set);
//   console.log(index)
  index.sort(([a, b], [c, d]) => {
    let distA = Math.abs(a - end[0]) + Math.abs(b - end[1]);
    let distB = Math.abs(c - end[0]) + Math.abs(d - end[1]);
    return distA - distB;
  })

//   console.log(index)
  return new Set(index);
}

function isEqual(x, y) {
  if (x.length != y.length) return false;
  for (let i in x) if (x[i] != y[i]) return false;
  return true;
}

// calcMove([6,7],[7,7])

knightMoves([0,0],[7,7])
