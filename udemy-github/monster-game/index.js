const app = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            //start game and reset health
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        calculateDamage: function (min, max) {
            return Math.round(min + (max - min) * Math.random());
            //Math.max(Math.floor(Math.random() * max) + 1, min);
            //Math.round(min + (max - min) * Math.random());
            //Math.floor(Math.random()*(max-min+1)+min); 
        },
        checkWinner: function () {
            //monster health
            if (this.monsterHealth <= 0) {
                if (confirm('You\'ve won! New Game?')) {
                    //start a new game
                    this.startGame();
                } else {
                    //reset but don't start a new game
                    this.gameIsRunning = false;
                }
                return true;
            }
            //player health
            else if (this.playerHealth <= 0) {
                if (confirm('You\'ve lost :( New Game?')) {
                    //start a new game
                    this.startGame();
                } else {
                    //reset but don't start a new game
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        attack: function () {
            //control highest and lowest possible damage
            //random number between 3 and 10
            var damage = this.calculateDamage(3, 10);

            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            console.log(this.turns);


            //if true
            if (this.checkWinner()) {
                return;
            }

            this.monsterAttack();

        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWinner();

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster HARD for ' + damage
            });

            if (this.checkWinner()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });

            this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        }
    }
})

