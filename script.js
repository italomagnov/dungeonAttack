new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        titulo: 'Dungeon Attack',
    },
    computed: {
        result() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        attack: function () {

            const form = document.querySelector('.skills');

            form.addEventListener('submit', function (e) {
                e.preventDefault();
            });

            this.monsterLife -= Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            this.playerLife -= Math.floor(Math.random() * (20 - 5 + 1)) + 5;

            if(this.playerLife < 0){
                this.playerLife = 0;
            }
            if(this.monsterLife < 0){
                this.monsterLife = 0;
            }


        },
        heal: function () {
            const form = document.querySelector('.skills');

            form.addEventListener('submit', function (e) {
                e.preventDefault();
            });

            this.monsterLife += Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            this.playerLife += Math.floor(Math.random() * (20 - 5 + 1)) + 5;3

            if(this.playerLife > 100){
                this.playerLife = 100;
            }
            if(this.monsterLife > 100){
                this.monsterLife = 100;
            }
        }
    },
    wath: {

    }
});