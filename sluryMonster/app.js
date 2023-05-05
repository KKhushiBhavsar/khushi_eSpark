const { createApp } = Vue
const healthObjects = {
    monsterHealth: 100,
    playerHealth: 100,
    speacialAttackDisabled: true,
    healDisabled: true,
    surrenderDisabled: true,
    battleCounter: 0,
    battleBoard: [],
}
createApp({
    data() {
        return {
            actorModules: healthObjects,
        }
    },
    methods: {
        playerMove() {
            this.actorModules.battleCounter++;
            const damage = Math.floor(Math.random() * 10);
            this.actorModules.monsterHealth -= damage;
            this.gameLog(`you attacked, monster ${damage}%`, "green")
        },
        monsterMove() {
            const damage = Math.floor(Math.random() * 15);
            this.actorModules.playerHealth -= damage;
            this.gameLog(`monster attacked, you  ${damage}%`, "red")
        },
        attack() {
            this.checkHealth;
            this.playerMove();
            this.monsterMove();
        },
        specialAttack() {
            if(this.actorModules.speacialAttackDisabled) return
            this.actorModules.battleCounter = 0;
            const damage = Math.floor(Math.random() * 25);
            this.actorModules.monsterHealth -= damage;
            this.actorModules.speacialAttackDisabled = true;
            this.gameLog(`you special attacked, monster ${damage}%`, "blue")
            this.monsterMove();

        },
        healPlayer() {
            if(this.actorModules.healDisabled) return
            this.actorModules.playerHealth += Math.floor(Math.random() * 25);
            this.actorModules.healDisabled = true;
            this.gameLog(`you are healing`, "orange")
            this.monsterMove();

        },
        playerSurrender() {
            this.gameLog("you", "surrender", this.actorModules.playerHealth, "red");
            this.reset();
        },
        gameLog(move, color) {
            const displayLog = `${move}`;
            // console.log("battle log",this.actorModules.battleBoard)
            this.actorModules.battleBoard.push({
                displayLog,
                color
            });
            // console.log(this.actorModules.battleBoard)
        },
        reset() {
            // setTimeout(() => {
                // this.monsterHealth = 100;
                // this.playerHealth = 100;
                // this.speacialAttackDisabled = true;
                // this.healDisabled = true;
                // this.surrenderDisabled = true;
                // this.battleCounter = 0;
                // this.battleBoard = [];
            // }, 2000)

        },
    }, computed:{
        monsterBarStyle(){
            return{width: this.actorModules.monsterHealth+'%' , backgroundColor: this.actorModules.monsterHealth > 30 ? 'green':'red'} 
        },
         userBarStyle(){
            return{width: this.actorModules.playerHealth+'%' , backgroundColor: this.actorModules.playerHealth > 30 ? 'green':'red'} 
        },
        checkHealth() {
            console.log("userHeath!")
            if (this.actorModules.playerHealth <= 0) {
                alert("you lose!");
                this.reset();
                return 1;
                
            } else if (this.actorModules.playerHealth <= 25) {
                this.actorModules.healDisabled = false;
                return 12;
            }
            if (this.actorModules.monsterHealth <= 0) {
                alert("you won!");
                this.reset();
            }
            if (this.actorModules.battleCounter == 7) {
                this.actorModules.speacialAttackDisabled = false;
            }
            if (this.actorModules.battleCounter >= 1) {
                this.actorModules.surrenderDisabled = false;
            }
        },
    }
}).mount('#app')