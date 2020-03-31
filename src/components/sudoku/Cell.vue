<template>

    <div class="cell" @click="clicked()" v-bind:class="{ active: isSelected() }">
        <div v-if="num!=''">
            <p class="num">{{num}}</p>
        </div>
        <div v-if="num==''">
            <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[0]">1</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[1]">2</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[2]">3</p>
            </div>
        </div>  
        <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[3]">4</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[4]">5</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[5]">6</p>
            </div>
        </div> 
        <div class="row">
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[6]">7</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[7]">8</p>
            </div>
            <div class="mini-cell">
                <p class="help-num" v-if="showNums[8]">9</p>
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
        'getSelectedCell'
        ])
    },
    data: function() {
        return {
            num: '',
            showNums: [0,0,0,0,1,0,1,0,1],
        }
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cell { 
    width: 60px; /* conditional from prop*/  
    height: 60px; /* conditional from prop*/
    display: inline-block;
    border: 1px solid red;
}

.row {
    height: 20px; /* conditional from prop 1/3*/
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content: space-around;
    color: white;
    align-items: center;
}

.mini-cell{
    width: 20px; /* conditional from prop 1/3*/
    height: 20px; /* conditional from prop 1/3*/
    margin: 0;
    padding: 0;
}

.help-num {
    margin:0 auto;
    color: black;
    font-size: 18px; /* conditional from prop 1/3 - 2*/
}

.num{
    margin:0 auto;
    color: black;
    font-size: 55px; /* conditional from prop 1/3 - 2*/
}

.active {
    background-color: rgb(72, 171, 236, 0.5);
}


</style>
