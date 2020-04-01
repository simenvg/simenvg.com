<template>
    <div class="block">
        <div class="row">
            <Cell id=0 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=1 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=2 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
        </div>
        <div class="row">
            <Cell id=3 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=4 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=5 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
        </div>
        <div class="row">
            <Cell id=6 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=7 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
            <Cell id=8 v-bind:block_id="id" v-on:CellClick="cellClicked"></Cell>
        </div>
    </div>
</template>




<script>
import Cell from "./Cell";
export default {
  name: 'Block',
  components: {
    Cell,
  },
  props: {
      id: {
          type: String,
          required: true,
      }
  },
  methods: {
      cellClicked(cell_id){
          this.$emit("CellClick", this.id, cell_id);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.block{
    display: inline-block;
    margin: 2px;
    border: 2px solid black;
}

.row {
    height: 60px; /* conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
}






</style>
