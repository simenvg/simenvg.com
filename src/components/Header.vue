<template>
    <header>
        <div>
            <a href="#default" class="logo">SIMENVG.COM</a>
            <div class="header-right">
                <a :class="{ 'active' : active === 'home'}" href="/" v-on:click="setActive('home')">Home</a>
                <a :class="{ 'active' : active === 'sykkel'}" href="/sykkel" v-on:click="setActive('sykkel')">Sykkel</a>
                <a :class="{ 'active' : active === 'about'}" href="#about" v-on:click="setActive('about')">About</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: function() {
        return {
            active: ''
        }
    },
    methods: {
        setActive(value){
            this.active = value;
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the header with a grey background and some padding */
.header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
    width: 100%;
    position:fixed;
    top: 0px;
    left:0px;
    overflow-y:scroll;  
}

/* Style the header links */
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header a.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
  margin-right: 40px;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */ 
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
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
