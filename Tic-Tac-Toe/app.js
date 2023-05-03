const { createApp } = Vue
    
createApp({
    data() {
        return {
            board: ["", "", "", "", "", "", "", "", ""],
            win: [
                 [0, 1, 2],
                 [0, 3, 6],
                 [0, 4, 8],
                 [1, 4, 7],
                 [2, 5, 8],
                 [2, 4, 6],
                 [3, 4, 5],
                 [6, 7, 8]
            ],
            result: {},
            text: "",
            currentPlayer: true,
            player1Win: 0,
            player2Win: 0,
        }
    },
    methods: {
        move(cell) {
            if (this.board[cell] == '') {
                let player1 = this.currentPlayer ? 'X' : 'O';
                let player2 = this.currentPlayer ? 'O' : 'X';
                this.board[cell] = player1
                this.currentPlayer = !this.currentPlayer;
                console.log(cell, player1, player2);
                // console.log(this.board);
                this.checkWin();

            }
        },
        checkWin() {
            for(let i =0;i< this.win.length;i++){
                const [a,b,c] = this.win[i];
               if(this.board[a] && this.board[a] == this.board[b] && this.board[a] === this.board[c]){
                    // alert(this.board[a])
                    if(this.currentPlayer){
                        alert("player 2 win");
                        this.player2Win ++;
                        this.reset();
                    }else{
                        alert("player 1 win");
                        this.player1Win ++;
                        this.reset();
                    }
                }
            }
        },
        reset(){
            this.board = ["", "", "", "", "", "", "", "", ""]
        }
    }
}).mount('#app')