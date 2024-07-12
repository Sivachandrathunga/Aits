let board = new Array(9);
let turn = 'X';
let winner = null;

function checkWinner() {
    for (let a = 0; a < 8; a++) {
        let line = null;

        switch (a) {
            case 0:
                line = board[0] + board[1] + board[2];
                break;
            case 1:
                line = board[3] + board[4] + board[5];
                break;
            case 2:
                line = board[6] + board[7] + board[8];
                break;
            case 3:
                line = board[0] + board[3] + board[6];
                break;
            case 4:
                line = board[1] + board[4] + board[7];
                break;
            case 5:
                line = board[2] + board[5] + board[8];
                break;
            case 6:
                line = board[0] + board[4] + board[8];
                break;
            case 7:
                line = board[2] + board[4] + board[6];
                break;
        }

        if (line === 'XXX') {
            return 'X';
        } else if (line === 'OOO') {
            return 'O';
        }
    }

    for (let a = 0; a < 9; a++) {
        if (board[a] !== 'X' && board[a] !== 'O') {
            return null;
        }
    }

    return 'draw';
}

function printBoard() {
    let outputText = '';
    outputText += '|---|---|---|\n';
    for (let i = 0; i < 9; i += 3) {
        outputText += `| ${board[i] || ' '} | ${board[i + 1] || ' '} | ${board[i + 2] || ' '} |\n`;
        outputText += '|-----------|\n';
    }
    document.getElementById('board').innerText = outputText;
}

function submitMove() {
    const userInput = document.getElementById('userInput').value;
    const numInput = parseInt(userInput, 10);
    
    if (numInput >= 1 && numInput <= 9 && !board[numInput - 1]) {
        board[numInput - 1] = turn;
        turn = (turn === 'X') ? 'O' : 'X';
        printBoard();
        winner = checkWinner();
        if (winner) {
            if (winner === 'draw') {
                console.log("It's a draw! Thanks for playing.");
            } else {
                console.log(`Congratulations! Player ${winner} has won! Thanks for playing.`);
            }
            disableInput();
        } else {
            console.log(`Player ${turn}'s turn; enter a slot number to place ${turn} in:`);
        }
    } else {
        console.log('Invalid input; re-enter slot number:');
    }
    
    document.getElementById('userInput').value = '';
}

function disableInput() {
    document.getElementById('userInput').disabled = true;
    document.querySelector('.input button').disabled = true;
}
