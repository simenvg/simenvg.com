import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sudoku: {
            selectedBlock: '',
            selectedCell: '',
            board: [[0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [9,9,0,9,9,9,9,9,9],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,2,0,0,0,0,0,0],
                    [0,0,0,0,5,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0]],
            },
            
        },
        


    getters: {
        getSelectedBlock: state => {
            return state.sudoku.selectedBlock;
        },
        
        getSelectedCell: state => {
            return state.sudoku.selectedCell;
        },
        getNumRowCol: state => {
            return (row, column) => {
                return state.sudoku.board[row][column]
            }
        },
        getNumBlockCell: state => {
            return (block_id, cell_id) => {
                var row = Math.floor(block_id / 3) * 3 + Math.floor(cell_id / 3);
                var column = (block_id % 3) * 3 + cell_id % 3
                return state.sudoku.board[row][column]
            }
        }, 
        getBoard: state => {
            return state.sudoku.board;
        },
    },

    mutations: {
        setSelectedBlock: (state, payload) => {
            state.sudoku.selectedBlock = payload;
        },
        setSelectedCell: (state, payload) => {
            state.sudoku.selectedCell = payload;
        }, 
        setNumber: (state, payload) => {
            var row = Math.floor(payload.block_id / 3) * 3 + Math.floor(payload.cell_id / 3);
            var column = (payload.block_id % 3) * 3 + payload.cell_id % 3;
            Vue.set(state.sudoku.board[row], column, payload.num);
        },
    },

    actions: {
        setSelectedBlock: (context, payload) => {
            context.commit('setSelectedBlock', payload)
        },
        setSelectedCell: (context, payload) => {
            context.commit('setSelectedCell', payload)
        },
        setNumber: (context, payload) => {
            context.commit('setNumber', payload)
        },
    },

    helperMethods: {
        getRow: (block_id, cell_id) => {
            return Math.floor(block_id / 3) * 3 + Math.floor(cell_id / 3);
        },
        getColumn: (block_id, cell_id) =>{
            return (block_id % 3) * 3 + cell_id % 3
        },
    }

});
