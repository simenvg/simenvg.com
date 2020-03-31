<template>
    <header>
    <div class="img-container">
        <!-- <div class="img-content">
            <img src="../assets/background.png"/>
        </div> -->
    </div>
    </header>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-container{
    position: fixed;
    top: auto;
    left: 0px;
    z-index: -10;
    width:100%;
    height:100%;
}

.img-content{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 500px;
    background-color: black;
    

}

video{
    width: 100%    !important;
    height: auto   !important;

}

</style>
