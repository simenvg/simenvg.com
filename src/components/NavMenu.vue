<template>
    <div v-if="showNavMenu" class="nav-menu">
        <a href="/" class="header">SIMENVG.COM</a>
        <div class="line"/>
        <a class="link" href="/sudoku">Sudoku</a>
        <a class="link" href="/sykkel">Sykkel</a>
        <button @click="close">Close</button>
    </div>
</template>

<script>
export default {
    props: {
        showNavMenu: Boolean
    },
  
    data: function() {
        return {
            active: '',
        }
    },
    components: {
        // Slide
    },
    methods: {
        close() {
          this.$emit("close");
        }

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.header {
    font-size: 25px;
    font-weight: bold;
    color: rgb(201, 201, 201);
    margin: 25px;
    text-decoration: none;
    padding:10px;
}

.line{
    height: 3px;
    background-color: rgb(201, 201, 201);
    width: 80%;
    margin-bottom:20px;
}

.link {
    padding: 10px;
    /* margin: 10px; */
    font-size: 25px;
    font-weight: bold;
    color: rgb(201, 201, 201);
    text-decoration: none;
}

a:hover {
  background-color: rgb(62, 92, 117);
}

.nav-menu {
    height: 100%;
    background:rgba(40, 61, 78);
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* z-index: 0; */
}

@media screen and (min-width:500px) {
    .nav-menu {
        width: 350px;
    }
}

@media screen and (max-width:500px) {
    .nav-menu {
        width: 80%;
    }
}
</style>
