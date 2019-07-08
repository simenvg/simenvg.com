<template>
  <div id="app">
    <Header class="header"/>
    <Background/>
    <router-view/>
    <Footer/>

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
  margin-top: 60px;
  display:flex;
  align-content: center;
}
</style>

