<template>
    <div class="board">
        <div class="load_board buttons">
            <button class="diff_btn btn" @click="loadBoard('easy')">Easy</button>
            <button class="diff_btn btn" @click="loadBoard('medium')">Medium</button>
            <button class="diff_btn btn" @click="loadBoard('hard')">Hard</button>
            <button class="help-btn btn" @click="getAllCellOptions()">Help</button>  
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
            <button class="btn" @click="updateCellNumber(1)">1</button>
            <button class="btn" @click="updateCellNumber(2)">2</button>
            <button class="btn" @click="updateCellNumber(3)">3</button>
            <button class="btn" @click="updateCellNumber(4)">4</button>
            <button class="btn" @click="updateCellNumber(5)">5</button>
            <button class="btn" @click="updateCellNumber(6)">6</button>
            <button class="btn" @click="updateCellNumber(7)">7</button>
            <button class="btn" @click="updateCellNumber(8)">8</button>
            <button class="btn" @click="updateCellNumber(9)">9</button>
            <button class="btn" @click="updateCellNumber(0)">X</button>
        </div>    
        <div class="buttons">
            <button class="sml btn" @click="updateCellHelpNumbers(1)">1</button>
            <button class="sml btn" @click="updateCellHelpNumbers(2)">2</button>
            <button class="sml btn" @click="updateCellHelpNumbers(3)">3</button>
            <button class="sml btn" @click="updateCellHelpNumbers(4)">4</button>
            <button class="sml btn" @click="updateCellHelpNumbers(5)">5</button>
            <button class="sml btn" @click="updateCellHelpNumbers(6)">6</button>
            <button class="sml btn" @click="updateCellHelpNumbers(7)">7</button>
            <button class="sml btn" @click="updateCellHelpNumbers(8)">8</button>
            <button class="sml btn" @click="updateCellHelpNumbers(9)">9</button>
            <button class="sml btn" @click="updateCellHelpNumbers(0)">X</button>
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
        'getCellEditable'
        ])
    },
    data: function() {
        return {
            bg: '',
        }
    },
    methods: {
        ...mapActions([
            'setSelectedBlock',
            'setSelectedCell',
            'setNumber',
            'setNumberRowColumn',
            'setPossibleValues'
        ]),
        cellClicked(block_id, cell_id){
            this.$store.dispatch('setSelectedBlock', block_id)
            this.$store.dispatch('setSelectedCell', cell_id)
        },

        updateCellNumber(number) {
            if (this.getCellEditable(this.getSelectedBlock, this.getSelectedCell)){
                var obj={
                block_id: this.getSelectedBlock,
                cell_id: this.getSelectedCell,
                num: number
                };
                this.$store.dispatch('setNumber', obj);
            }
            
        },
        updateCellHelpNumbers(number) {
            if (this.getCellEditable(this.getSelectedBlock, this.getSelectedCell)){
                    
                var obj={
                    block_id: this.getSelectedBlock,
                    cell_id: this.getSelectedCell,
                    num: number
                };

                this.$store.dispatch('setHelpNumber', obj);
            }
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
        },
        getAllCellOptions() {
            for (var r = 0; r < 9; r++){
                for (var c = 0; c < 9; c++){
                    var block_id = Math.floor(r/3) * 3 + Math.floor(c/3);
                    var cell_id = (r % 3) * 3 + c % 3;
                    if (this.getCellEditable(block_id, cell_id)){
                        var obj = {
                            block_id: block_id,
                            cell_id: cell_id,
                            val: this.getCellOptions(r,c)
                        }
                        this.$store.dispatch('setPossibleValues', obj);
                    }
                    
                }
            }
        },
        getCellOptions(row, column){
            var b = this.getBoard;
            var usedNumbers = [];
            var numsInBlock = this.getNumsInBlock(row, column);
            for (var i = 0; i < 9; i++){
                if (b[row][i] != 0) {
                    usedNumbers.push(b[row][i]);
                }
                if (b[i][column] != 0) {
                    usedNumbers.push(b[i][column]);
                }
                if (numsInBlock[i] != 0) {
                    usedNumbers.push(numsInBlock[i]);
                }
            }
            var res = [1,1,1,1,1,1,1,1,1];
            for (let num of usedNumbers) {
                res[num-1] = 0;
            }
            return res;

            
        },
        getNumsInBlock(row, column) {
            var b = this.getBoard;
            var res = []
            var startIndexRow = Math.floor(row/3) * 3;
            var startIndexColumn = Math.floor(column/3) * 3;
            for (var r = startIndexRow; r < startIndexRow + 3; r++){
                for (var c = startIndexColumn; c < startIndexColumn + 3; c++){
                    res.push(b[r][c])
                }   
            }
            return res;
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

@media screen and (min-width:500px) {
    .btn {
        background-color: #4CAF50; /* Green */
        border: 1px solid black;
        color: white;
        padding: 15px 20px;
        text-align: center;
        text-decoration: none;
        display: flex;
        justify-content: center;
        font-size: 22px;
        width: 16px;
        margin: 2px;
        box-shadow: 2px 3px black;
    }

    .sml {
        font-size: 15px;
        background-color: rgba(76, 175, 79, 0.767);
    }

    .help-btn {
        font-size: 25px;
        width: 150px;
        background-color: rgba(76, 175, 79, 0.767);
    }

    .diff_btn {
        background-color: rgb(65, 79, 204); /* Green */
        font-size: 22px;
        width: 150px;
    }
}

@media screen and (max-width:500px) {
    .btn {
        background-color: #4CAF50; /* Green */
        border: 1px solid black;
        color: white;
        padding: 15px 15px;
        text-align: center;
        text-decoration: none;
        display: flex;
        justify-content: center;
        font-size: 22px;
        width: 16px;
        margin: 2px;
        box-shadow: 2px 3px black;
    }

    .sml {
        font-size: 15px;
        background-color: rgba(76, 175, 79, 0.767);
    }

    .help-btn {
        font-size: 18px;
        margin-left: 25px;
        width: 70px;
        background-color: rgba(76, 175, 79, 0.767);
    }

    .diff_btn {
        background-color: rgb(65, 79, 204); /* Green */
        font-size: 18px;
        width: 80px;
    }
}




.row {
    /* height: 60px;  conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
}


</style>
