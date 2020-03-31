import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedBlock: '',
        selectedCell: ''
    },
    getters: {
        getSelectedBlock: state => {
            return state.selectedBlock;
        },
        
        getSelectedCell: state => {
            return state.selectedCell;
        }
    }
});