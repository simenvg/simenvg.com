<template>
    <div class="board">
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
    methods: {
        ...mapActions([
            'setSelectedBlock',
            'setSelectedCell',
            'setNumber',
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

.row {
    /* height: 60px;  conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
}


</style>
