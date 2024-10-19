<template>
  <div id="app">
    <AppNavBar />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppNavBar from './components/AppNavBar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  /* Background settings */
  background-image: url('./assets/background.jpg');
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center;
  background-repeat: no-repeat; /* Prevents tiling */
  min-height: 100vh;
  background-color: rgb(132, 169, 197); /* Fallback color in case the image doesn't load */
}
</style>
