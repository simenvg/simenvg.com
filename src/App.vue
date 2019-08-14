<template>
  <div id="app">
      <Background/>
      <div class="content">
        <Header class="header"/>
        <router-view/>
        <Footer/>
      </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Background from './components/Background'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Background,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>

