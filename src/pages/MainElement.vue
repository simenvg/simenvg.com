<template>
<div class="outer">
  <div class="hallo">
    <h1>HALLO</h1>
    <p>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea 
      commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. 
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
