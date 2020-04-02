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
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0]],
            
            cells: [
                // blocks
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}],
                [{showNums: [0,0,0,0,0,0,0,0,0], editable: true}, {showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true},{showNums: [0,0,0,0,0,0,0,0,0], editable: true}]
            ]
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
        getShowNums: state => {
            return (block_id, cell_id) => {
                return state.sudoku.cells[block_id][cell_id].showNums
            }
        }, 
        getCellEditable: state => {
            return (block_id, cell_id) => {
                var a = state.sudoku.cells[block_id][cell_id].editable;
                return a;
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
        setNumberRowColumn: (state, payload) => {
            Vue.set(state.sudoku.board[payload.row], payload.column, payload.num);
            var block_id = Math.floor(payload.row/3) * 3 + Math.floor(payload.column/3);
            var cell_id = (payload.row % 3) * 3 + payload.column % 3;
            if (payload.num != 0){
                Vue.set(state.sudoku.cells[block_id][cell_id], 'editable', false);
            }
            else {
                Vue.set(state.sudoku.cells[block_id][cell_id], 'editable', true);
            }
            
        },
        setHelpNumber: (state, payload) => {
            if( payload.num == 0){
                for(var i = 0; i < 9; i++){
                    Vue.set(state.sudoku.cells[payload.block_id][payload.cell_id].showNums, i, 0);
                }
            } 
            else {
                var a = state.sudoku.cells[payload.block_id][payload.cell_id].showNums[payload.num - 1];
                var b = a;
                a = b;
                var row = Math.floor(payload.block_id / 3) * 3 + Math.floor(payload.cell_id / 3);
                var column = (payload.block_id % 3) * 3 + payload.cell_id % 3;
                Vue.set(state.sudoku.board[row], column, 0);
                Vue.set(state.sudoku.cells[payload.block_id][payload.cell_id].showNums, payload.num - 1, !state.sudoku.cells[payload.block_id][payload.cell_id].showNums[payload.num - 1]);
            }
        },
        setEditable: (state, payload) => {
            Vue.set(state.sudoku.cells[payload.block_id][payload.cell_id], 'editable', payload.val);
        }
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
        setNumberRowColumn: (context, payload) => {
            context.commit('setNumberRowColumn', payload)
        },
        setHelpNumber: (context, payload) => {
            context.commit('setHelpNumber', payload)
        },
        setEditable: (context, payload) => {
            context.commit('setEditable', payload)
        }
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
