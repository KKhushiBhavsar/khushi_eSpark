const { createApp } = Vue
    
createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            speacialAttackDisabled: true,
            healDisabled: true,
            surrenderDisabled: true,
            battleCounter: 0,
            battleBoard: [],
        }
    },
    methods: {
        playerMove() {
            this.battleCounter++;
            const damage = Math.floor(Math.random() * 10);
            this.monsterHealth -= damage;
            this.gameLog("you", "attacked", damage, "green")
        },
        monsterMove() {
            const damage = Math.floor(Math.random() * 10);
            this.playerHealth -= damage;
            this.gameLog("moster", "attacked", damage, "red")
        },
        attack() {
            this.playerMove();
            this.monsterMove();
        },
        specialAttack() {
            this.battleCounter = 0;
            const damage = Math.floor(Math.random() * 25);
            this.monsterHealth -= damage;
            this.speacialAttackDisabled = true;
            this.gameLog("you", "special attacked", damage, "blue")
            this.monsterMove();

        },
        healPlayer() {

            this.playerHealth += Math.floor(Math.random() * 25);
            this.healDisabled = true;
            this.gameLog("you", "healed", this.playerHealth, "orange")
            this.monsterMove();

        },
        playerSurrender() {
            this.gameLog("you", "surrender", this.playerHealth, "red");
            this.reset();
        },
        gameLog(player, move, damage, color) {
            const displayLog = `${player}  ${move} , damage is ${damage}`;
            this.battleBoard.push({
                displayLog,
                color
            });
            console.log(this.battleBoard)
        },
        reset() {
            // setTimeout(() => {
                this.monsterHealth = 100;
                this.playerHealth = 100;
                this.speacialAttackDisabled = true;
                this.healDisabled = true;
                this.surrenderDisabled = true;
                this.battleCounter = 0;
                this.battleBoard = [];
            // }, 2000)

        },
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0) {
                alert("you won!");
                this.reset();
            }
        },
        playerHealth(value) {
            if (value <= 0) {
                alert("you lose!");
                this.reset();
            } else if (value <= 25) {
                this.healDisabled = false;
            }
        },
        battleCounter(value) {
            if (value == 7) {
                this.speacialAttackDisabled = false;
            }
            if (value >= 1) {
                this.surrenderDisabled = false;
            }
        }
    }
}).mount('#app')