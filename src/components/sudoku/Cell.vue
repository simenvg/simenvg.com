<template>

    <div class="cell" @click="clicked()" v-bind:class="{ active: isSelected() }">
        <div v-if="getNumBlockCell(block_id, id)!=0">
            <p class="num" v-bind:class="{ uneditable: !getCellEditable(block_id,id) }">{{getNumBlockCell(block_id, id)}}</p>
        </div>
        <div v-if="getNumBlockCell(block_id, id)==0">
            <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[0]">1</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[1]">2</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[2]">3</p>
            </div>
        </div>  
        <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[3]">4</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[4]">5</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[5]">6</p>
            </div>
        </div> 
        <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[6]">7</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[7]">8</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="getShowNums(block_id, id)[8]">9</p>
            </div>
        </div>   
        </div>
    </div>
</template>




<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        block_id: {
            type: String,
            required: true
        }
    },
    computed: { 
      ...mapGetters([
        'getSelectedBlock',
        'getSelectedCell',
        'getNumBlockCell',
        'getShowNums',
        'getCellEditable'
        ]),
    },
    methods: {
        clicked(){
            this.$emit("CellClick", this.id);
        },
        isSelected(){
            if(this.id == this.getSelectedCell && this.block_id == this.getSelectedBlock){
                return true
            } else {
                return false
            }
        },
        showNumber() {
            if ( 1 <= this.getNumBlockCell(this.block_id, this.id) <= 9){
                return true;
            }
            return false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cell { 
    width: 60px; /* conditional from prop*/  
    height: 60px; /* conditional from prop*/
    margin: 0;
    padding: 0;
    display: inline-block;
    border: 1px solid black;

}

.row {
    height: 20px; /* conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;    
}

.mini-cell{
    width: 20px; /* conditional from prop 1/3*/
    height: 20px; /* conditional from prop 1/3*/
    display: flex;
    align-items: center;
    justify-content: center;
}

.help-num {
    margin:0;
    color: black;
    font-size: 17px; /* conditional from prop 1/3 - 2*/
}

.num{
    margin:0 0;
    max-height: 60px;
    padding: 0;
    color: black;
    font-size: 55px; /* conditional from prop 1/3 - 2*/
}

.active {
    background-color: rgb(40, 137, 212, 0.5)
}

.uneditable {
    border: 1px solid red;
    background-color: red;
}


</style>
