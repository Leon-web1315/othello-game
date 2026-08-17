const board = document.getElementById("board");

//各cellのDOM
const cells = Array.from({length: 8}, () => Array(8));
//各マスの色データ
const boardState = Array.from(
    {length: 8},
    () => Array(8).fill("empty")
);




const turnText = document.getElementById("turn");
const resetButton = document.getElementById("reset");


let currentPlayer = "black";


function canPlaceStone(row, col, player) {
    
    //空マスか確認
    if (boardState[row][col] !== "empty") {
        return false;
    }

    //相手の色を決める
    let opponentColor;

     if (player === "black") {

        opponentColor = "white";

    } else {

        opponentColor = "black";

    }



{
    //右を調べる
    let currentCol = col + 1;

        while (
            currentCol < 8 &&
            boardState[row][currentCol] === opponentColor
        ) {

            currentCol++;

        }

        if (
            currentCol < 8 &&
            currentCol > col + 1 &&
            boardState[row][currentCol] === player
        ) {

            return true;

        }
}

{
    //左を調べる
    let currentCol = col - 1;

        while (
            currentCol >= 0 &&
            boardState[row][currentCol] === opponentColor
        ) {

            currentCol--;

        }

        if (
            currentCol >= 0 &&
            currentCol < col - 1 &&
            boardState[row][currentCol] === player
        ) {

            return true;

        }
}

{
    //下を調べる
    let currentRow = row + 1;

        while (
            currentRow < 8 &&
            boardState[currentRow][col] === opponentColor
        ) {

            currentRow++;

        }

        if (
            currentRow < 8 &&
            currentRow > row + 1 &&
            boardState[currentRow][col] === player
        ) {

            return true;

        }
}

{
    //上を調べる
    let currentRow = row - 1;

        while (
            currentRow >= 0 &&
            boardState[currentRow][col] === opponentColor
        ) {

            currentRow--;

        }

        if (
            currentRow >= 0 &&
            currentRow < row - 1 &&
            boardState[currentRow][col] === player
        ) {

            return true;

        }
}

{
    //右下を調べる
    let currentRow = row + 1;
    let currentCol = col + 1;

        while (
            currentRow < 8 &&
            currentCol < 8 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {

            currentRow++;
            currentCol++;

        }

        if (
            currentRow < 8 &&
            currentCol < 8 &&
            currentRow > row + 1 &&
            currentCol > col + 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            return true;

        }
}

{
    //左下を調べる
    let currentRow = row + 1;
    let currentCol = col - 1;

        while (
            currentRow < 8 &&
            currentCol >= 0 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {

            currentRow++;
            currentCol--;

        }

        if (
            currentRow < 8 &&
            currentCol >= 0 &&
            currentRow > row + 1 &&
            currentCol < col - 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            return true;

        }
}

{
    //右上を調べる
    let currentRow = row - 1;
    let currentCol = col + 1;

        while (
            currentRow >= 0 &&
            currentCol < 8 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {

            currentRow--;
            currentCol++;

        }

        if (
            currentRow >= 0 &&
            currentCol < 8 &&
            currentRow < row - 1 &&
            currentCol > col + 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            return true;

        }
}

{
    //左上を調べる
    let currentRow = row - 1;
    let currentCol = col - 1;

        while (
            currentRow >= 0 &&
            currentCol >= 0 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {

            currentRow--;
            currentCol--;

        }

        if (
            currentRow >= 0 &&
            currentCol >= 0 &&
            currentRow < row - 1 &&
            currentCol < col - 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            return true;

        }
}

    return false;

}


function flipStones(row, col, player) {

    //相手の色を決める
    let opponentColor;

     if (player === "black") {

        opponentColor = "white";

    } else {

        opponentColor = "black";

    }
    
    {
        //右をひっくり返す
        let currentCol = col + 1;

        while (
            currentCol < 8 &&
            boardState[row][currentCol] === opponentColor
        ) {

            currentCol++;

        }

        if (
            currentCol < 8 &&
            currentCol > col + 1 &&
            boardState[row][currentCol] === player
        ) {

            //石をひっくり返す
            let flipCol = col + 1;

            while (flipCol < currentCol) {

                //盤面データを置いた石の色へ変更
                boardState[row][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[row][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipCol++;
            }

        }
    }

    {
        //左をひっくり返す
        let currentCol = col - 1;

        while (
            currentCol >= 0 &&
            boardState[row][currentCol] === opponentColor
        ) {

            currentCol--;

        }

        if (
            currentCol >= 0 &&
            currentCol < col - 1 &&
            boardState[row][currentCol] === player
        ) {

            //石をひっくり返す
            let flipCol = col - 1;

            while (flipCol > currentCol) {

                //盤面データを置いた石の色へ変更
                boardState[row][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[row][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipCol--;
            }

        }
    }

    {
        //下をひっくり返す
        let currentRow = row + 1;

        while (
            currentRow < 8 &&
            boardState[currentRow][col] === opponentColor
        ) {

            currentRow++;

        }

        if (
            currentRow < 8 &&
            currentRow > row + 1 &&
            boardState[currentRow][col] === player
        ) {

            //石をひっくり返す
            let flipRow = row + 1;

            while (flipRow < currentRow) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][col] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][col];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow++;
            }

        }
    }

    {
        //上をひっくり返す
        let currentRow = row - 1;

        while (
            currentRow >= 0 &&
            boardState[currentRow][col] === opponentColor
        ) {

            currentRow--;

        }

        if (
            currentRow >= 0 &&
            currentRow < row - 1 &&
            boardState[currentRow][col] === player
        ) {

            //石をひっくり返す
            let flipRow = row - 1;

            while (flipRow > currentRow) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][col] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][col];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow--;
            }

        }
    }

    {
        //右下をひっくり返す
        let currentRow = row + 1;
        let currentCol = col + 1;

        while (
            currentRow < 8 &&
            currentCol < 8 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {
            currentRow++;
            currentCol++;
        }

        if (
            currentRow < 8 &&
            currentCol < 8 &&
            currentRow > row + 1 &&
            currentCol > col + 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            //石をひっくり返す
            let flipRow = row + 1;
            let flipCol = col + 1;

            while ( flipRow < currentRow && 
                    flipCol < currentCol
            ) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow++;
                flipCol++;
            }
        }
    }

    {
        //左下をひっくり返す
        let currentRow = row + 1;
        let currentCol = col - 1;

        while (
            currentRow < 8 &&
            currentCol >= 0 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {
            currentRow++;
            currentCol--;
        }

        if (
            currentRow < 8 &&
            currentCol >= 0 &&
            currentRow > row + 1 &&
            currentCol < col - 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            //石をひっくり返す
            let flipRow = row + 1;
            let flipCol = col - 1;

            while ( flipRow < currentRow && 
                    flipCol > currentCol
            ) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow++;
                flipCol--;
            }
        }
    }

    {
        //右上をひっくり返す
        let currentRow = row - 1;
        let currentCol = col + 1;

        while (
            currentRow >= 0 &&
            currentCol < 8 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {
            currentRow--;
            currentCol++;
        }

        if (
            currentRow >= 0 &&
            currentCol < 8 &&
            currentRow < row - 1 &&
            currentCol > col + 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            //石をひっくり返す
            let flipRow = row - 1;
            let flipCol = col + 1;

            while ( flipRow > currentRow && 
                    flipCol < currentCol
            ) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow--;
                flipCol++;
            }
        }
    }

    {
        //左上をひっくり返す
        let currentRow = row - 1;
        let currentCol = col - 1;

        while (
            currentRow >= 0 &&
            currentCol >= 0 &&
            boardState[currentRow][currentCol] === opponentColor
        ) {
            currentRow--;
            currentCol--;
        }

        if (
            currentRow >= 0 &&
            currentCol >= 0 &&
            currentRow < row - 1 &&
            currentCol < col - 1 &&
            boardState[currentRow][currentCol] === player
        ) {

            //石をひっくり返す
            let flipRow = row - 1;
            let flipCol = col - 1;

            while ( flipRow > currentRow && 
                    flipCol > currentCol
            ) {

                //盤面データを置いた石の色へ変更
                boardState[flipRow][flipCol] = player;

                //ひっくり返す対象のマスを取得
                const targetCell = cells[flipRow][flipCol];
                //その中の石を取得
                const targetStone = targetCell.firstElementChild;

                //見た目を相手の色から自分の色へ変更
                targetStone.classList.remove(opponentColor);
                targetStone.classList.add(player);

                flipRow--;
                flipCol--;
            }
        }
    }
}




function hasValidMove(player) {

    for ( let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {

            if (canPlaceStone(row, col, player)) {
                return true;
            }

        }
    }

    return false;
}




function countStones() {

    let blackStones = 0;
    let whiteStones = 0;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {

            if (boardState[row][col] === "black") {
                blackStones++;
            }

            if (boardState[row][col] === "white") {
                whiteStones++;
            }
        }
    }

    return {
        blackStones,
        whiteStones
    };
}



function updateTurn() {

    if (currentPlayer === "black") {

        turnText.textContent = "黒のターン";

        turnText.classList.remove("white-turn");
        turnText.classList.add("black-turn");

    } else {

        turnText.textContent = "白のターン";

        turnText.classList.remove("black-turn");
        turnText.classList.add("white-turn");

    }
}




function checkGameOver() {

    if (!hasValidMove("black") && !hasValidMove("white")) {

        const result = countStones();

        setTimeout(() => {
                            
            if (result.blackStones > result.whiteStones) {
                alert(
                    "黒：" + result.blackStones + "個\n" +
                    "白：" + result.whiteStones + "個\n" +
                    "黒の勝ち！"
                );
            } else if (result.whiteStones > result.blackStones) {
                alert(
                    "黒：" + result.blackStones + "個\n" +
                    "白：" + result.whiteStones + "個\n" +
                    "白の勝ち！"
                );
            } else {
                alert(
                    "黒：" + result.blackStones + "個\n" +
                    "白：" + result.whiteStones + "個\n" +
                    "引き分け！"
                );
            }

        }, 100);
        
        return true;

    }

    return false;

}





for (let row = 0; row < 8; row++) {
    for(let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cells[row][col] = cell;

        //石を置く
        cell.addEventListener("click", function () {

            if (currentPlayer !== "black") {
                return;
            }

            if (canPlaceStone(row, col, currentPlayer)) {
                
                //石を作る
                const stone = document.createElement("div");
                stone.classList.add("stone");
                stone.classList.add(currentPlayer);

                cell.append(stone);

                 //盤面データに記録
                boardState[row][col] = currentPlayer;

                //石をひっくり返す
                flipStones(row, col, currentPlayer);

                 //手番交代
                if (currentPlayer === "black") {
                    currentPlayer = "white";
                } else {
                    currentPlayer = "black";
                }

                

                //交代後のプレイヤーが置けないならパス
                if (!hasValidMove(currentPlayer)) {

                    //パスするプレイヤーを保存
                    const passPlayer = currentPlayer;
                    

                    //元のプレイヤーに手番を戻す
                    if (currentPlayer === "black") {
                        currentPlayer = "white";
                    } else {
                        currentPlayer = "black";
                    }


                    //両方置けないならゲーム終了
                    if (checkGameOver()) {
                        return;
                    }


                    //元のプレイヤーは置けるならゲーム終了せずパス
                    if (hasValidMove(currentPlayer)) {

                        //パス通知
                        setTimeout(() => {

                            if (passPlayer === "black") {
                                alert("黒はパスします");
                            } else {
                                alert("白はパスします");
                            }

                        }, 0);
                    }
                }

                updateTurn();

                if (currentPlayer === "white") {
                    setTimeout (() => {
                        cpuMove();
                    }, 1000);
                }
                
            }

        });



        

        //初期配置
        if (row === 3 && col === 3) {

            const stone = document.createElement("div");
            stone.classList.add("stone");
            stone.classList.add("white");
            cell.append(stone);

            boardState[row][col] = "white";
        }


        if (row === 3 && col === 4) {

            const stone = document.createElement("div");
            stone.classList.add("stone");
            stone.classList.add("black");
            cell.append(stone);

            boardState[row][col] = "black";
        }


        if (row === 4 && col === 3) {

            const stone = document.createElement("div");
            stone.classList.add("stone");
            stone.classList.add("black");
            cell.append(stone);

            boardState[row][col] = "black";
        }
        

        if (row === 4 && col === 4) {

            const stone = document.createElement("div");
            stone.classList.add("stone");
            stone.classList.add("white");
            cell.append(stone);

            boardState[row][col] = "white";
        }


        board.append(cell);


    }
}


updateTurn();



resetButton.addEventListener("click", function () {

    currentPlayer = "black";
    updateTurn();

    for (let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++) {

            boardState[row][col] = "empty";

            const stone = cells[row][col].firstElementChild;

            if (stone) {
                stone.remove();
            }


            //初期配置
            if (row === 3 && col === 3) {

                const stone = document.createElement("div");
                stone.classList.add("stone");
                stone.classList.add("white");
                cells[row][col].append(stone);

                boardState[row][col] = "white";
            }


            if (row === 3 && col === 4) {

                const stone = document.createElement("div");
                stone.classList.add("stone");
                stone.classList.add("black");
                cells[row][col].append(stone);

                boardState[row][col] = "black";
            }


            if (row === 4 && col === 3) {

                const stone = document.createElement("div");
                stone.classList.add("stone");
                stone.classList.add("black");
                cells[row][col].append(stone);

                boardState[row][col] = "black";
            }
        

            if (row === 4 && col === 4) {

                const stone = document.createElement("div");
                stone.classList.add("stone");
                stone.classList.add("white");
                cells[row][col].append(stone);

                boardState[row][col] = "white";
            }
        }
    }
});





//CPU
function cpuMove() {

    const validMoves = [];

    for (let row = 0; row < 8; row++) {
        for(let col = 0; col < 8; col++) {

            if (canPlaceStone(row, col, "white")) {
                validMoves.push([row, col]);
            }
        }
    }

    if (validMoves.length === 0) {
        return;
    }
     
    const randomIndex = 
        Math.floor(
            Math.random() * validMoves.length
        );


    const selectedMove = validMoves[randomIndex];

    const row = selectedMove[0];
    const col = selectedMove[1];

    const stone = document.createElement("div");
    stone.classList.add("stone");
    stone.classList.add("white");
    cells[row][col].append(stone);

    boardState[row][col] = "white";

    flipStones(row, col, "white");

    currentPlayer = "black";

    if (!hasValidMove(currentPlayer)) {
        
        if (checkGameOver()) {
            return;
        }

        setTimeout(() => {
            alert("黒はパスします");
        }, 0);

        currentPlayer = "white";

        cpuMove();
        return;
    }

    updateTurn();
}


