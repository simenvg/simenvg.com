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
        <button style="height: 50px;" @click="getCellIndex(3,2)"/>
        <p> {{ getSelectedBlock }}    {{ getSelectedCell}}</p>
    </div>
</template>




<script>
import { mapGetters } from 'vuex';
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
        'getSelectedCell'
        ])
    },
  data: function() {
        return {
            selectedBlock: '',
            selectedCell: ''
        }
    },
    methods: {
        cellClicked(block_id, cell_id){
            console.log(block_id + " dfsaf  " + cell_id)
            this.$store.state.selectedBlock = block_id;
            this.$store.state.selectedCell = cell_id;
            this.selectedBlock=block_id;
            this.selectedCell=cell_id;

            console.log("Store Block: " + this.$store.getters.getSelectedBlock)
            console.log("Store Cell: " + this.$store.getters.getSelectedCell)
        },

        getBlockId(row, column){
            var res = this.columnToBlock(row) + this.rowToBlock(column);
            return res
        },

        getCellId(row, column){
            var res = ((row % 3) * 3) + (column % 3);
            return res
        },

        getCellIndex(row, column){
            console.log("block: " + this.getBlockId(row, column));
            console.log("cell: " + this.getCellId(row, column));
        },

        columnToBlock(id){
            if(id <= 2){
                return 0
            }
            else if(id <= 5){
                return 3
            }
            else if(id <= 8){
                return 6
            }
        },
        rowToBlock(id){
            if(id <= 2){
                return 0
            }
            else if(id <= 5){
                return 1
            }
            else if(id <= 8){
                return 2
            }   
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


</style>
