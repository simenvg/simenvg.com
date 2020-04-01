<template>
    <div class="board">
        <div class="load_board buttons">
            <button class="diff_btn btn" @click="loadBoard('easy')">Easy</button>
            <button class="diff_btn btn" @click="loadBoard('medium')">Medium</button>
            <button class="diff_btn btn" @click="loadBoard('hard')">Hard</button>
        </div>
        <div class="row">
            <Block id=0 v-on:CellClick="cellClicked"></Block>
            <Block id=1 v-on:CellClick="cellClicked"></Block>
            <Block id=2 v-on:CellClick="cellClicked"></Block>
        </div>
        <div class="row">
            <Block id=3 v-on:CellClick="cellClicked"></Block>
            <Block id=4 v-on:CellClick="cellClicked"></Block>
            <Block id=5 v-on:CellClick="cellClicked"></Block>
        </div>
        <div class="row">
            <Block id=6 v-on:CellClick="cellClicked"></Block>
            <Block id=7 v-on:CellClick="cellClicked"></Block>
            <Block id=8 v-on:CellClick="cellClicked"></Block>
        </div>
        <div class="buttons">
            <button class="btn" @click="updateCell(1)">1</button>
            <button class="btn" @click="updateCell(2)">2</button>
            <button class="btn" @click="updateCell(3)">3</button>
            <button class="btn" @click="updateCell(4)">4</button>
            <button class="btn" @click="updateCell(5)">5</button>
            <button class="btn" @click="updateCell(6)">6</button>
            <button class="btn" @click="updateCell(7)">7</button>
            <button class="btn" @click="updateCell(8)">8</button>
            <button class="btn" @click="updateCell(9)">9</button>
            <button class="btn" @click="updateCell(0)">X</button>
        </div>    
    </div>
</template>




<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Block from "./Block";
export default {
  name: 'Board',
  components: {
    Block,
    // RingLoader
  },
  computed: { 
      ...mapGetters([
        'getSelectedBlock',
        'getSelectedCell',
        'getNumBlockCell',
        'getBoard',
        ])
    },
    data: function() {
        return {
            b: '',
        }
    },
    methods: {
        ...mapActions([
            'setSelectedBlock',
            'setSelectedCell',
            'setNumber',
            'setNumberRowColumn'
        ]),
        cellClicked(block_id, cell_id){
            this.$store.dispatch('setSelectedBlock', block_id)
            this.$store.dispatch('setSelectedCell', cell_id)
        },

        updateCell(number) {
            var obj={
                block_id: this.getSelectedBlock,
                cell_id: this.getSelectedCell,
                num: number
            };
            this.$store.dispatch('setNumber', obj);
        },
        loadBoard(difficulty) {
            Vue.axios
                .get('https://sugoku.herokuapp.com/board?difficulty=' + difficulty)
                .then(response => {
                    this.b = response;
                    console.log(this.b.data.board);
                    for (var r = 0; r < this.b.data.board.length; r++) {
                        for (var c = 0; c < this.b.data.board[r].length; c++) {
                            var obj = {
                                num: this.b.data.board[r][c],
                                row: r,
                                column: c
                            }
                            this.$store.dispatch('setNumberRowColumn', obj);
                        }
                    }
                })
        }
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
    display: flex;
    flex-direction: column;
    
}

.buttons{
    margin: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.btn {
    background-color: #4CAF50; /* Green */
    border: 1px solid black;
    color: white;
    padding: 15px 27px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    font-size: 22px;
    width: 16px;
    margin: 2px;
    box-shadow: 2px 3px black;
}

.diff_btn {
    background-color: rgb(65, 79, 204); /* Green */
    font-size: 22px;
    width: 150px;
}

.row {
    /* height: 60px;  conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
}


</style>
