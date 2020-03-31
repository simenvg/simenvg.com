<template>
<div class="outer">
      <Board/>
    </div>

</template>

<script>
import Board from "../components/sudoku/Board";

export default {
  name: 'HelloWorld',
  components: {
    Board,
    // RingLoader
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  min-height: 100%;
  /* margin-top: 80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}

.hallo{
  position: absolute;
  top:25%;
  left:25%;
  width: 50%;
  height: 40%;
  border: 1px solid #41B883;

}



h1 {
  font: 24px sans-serif;
  color: white;
}

p {
  font: 18px sans-serif;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
