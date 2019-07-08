<template>
    <footer>
        <div class="footer-text">
            <br>
            <a href="#default" class="home-link">SIMENVG.COM</a>
            <p>simen@simenvg.com</p>
            <div class=linkedin>
                <span class="icon"/>
                <a href="www.linkedin.com/in/simen-viken-grini-56182082" class="link">LinkedIn</a>
            </div>


        </div>
    </footer>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the header with a grey background and some padding */
footer {
    border-top: 1px solid rgb(74, 180, 216);
    display: flex;
    justify-content: center;
    width: 100%;
    clear: both;
    position: absolute;
    bottom: 0;
}

.footer-text{
    color: #41B883;
    text-decoration: none;
}

.home-link{
    margin-top: 3px;
    color: #41B883;
    text-decoration: none;
}

.linkedin{
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    background: url('../assets/linkedin24.svg');
    height: 36px;
    width: 36px;
    background-repeat: no-repeat;
    display: block;
    /* Other styles here */
}

.link {
    margin-left: 2px;
    color: #41B883;
    text-decoration: none;
}

</style>
