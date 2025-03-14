function knightMoves(start, end) {
  if (start < 0 || start > 7 || end < 0 || end > 7)
    return "Invalid start or end";
  let board = [start, end];
  let path = [];
  path.push(JSON.parse(JSON.stringify(start)));

  while (board[0][0] != board[1][0] && board[0][1] != board[1][1]) {
    let x = board[1][0] - board[0][0];
    let y = board[1][1] - board[0][1];
    if(Math.abs(x) > Math.abs(y)){
        if(x > 0 ){
            if(y > 0){
                board[0][0] = board[0][0] + 2;
                board[0][1] = board[0][1] + 1;
            }
            else{
                board[0][0] = board[0][0] + 2;
                board[0][1] = board[0][1] - 1;
            }

        }
        else {  // X < 0
            if(y > 0){
                board[0][0] = board[0][0] - 2;
                board[0][1] = board[0][1] + 1;
            }
            else{
                board[0][0] = board[0][0] - 2;
                board[0][1] = board[0][1] - 1;
            }
        }
    }
    else {
        if(y > 0){
            if(x > 0){
                board[0][1] = board[0][1] + 2;
                board[0][0]= board[0][0] + 1;
            }
            else{
                board[0][1] = board[0][1] + 2;
                board[0][0]= board[0][0] - 1;
            }
            
        }
        else{   // Y < 0
            if(x > 0){
                board[0][1] = board[0][1] - 2;
                board[0][0] = board[0][0] + 1;
            }
            else{
                board[0][1] = board[0][1] - 2;
                board[0][0] = board[0][0] - 1;
            }

        }
    }

    path = [...path, JSON.parse(JSON.stringify(board[0]))]
    
  }

  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((step) => console.log(step));


}


knightMoves([3,3],[4,3])
