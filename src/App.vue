<template>
  <v-app>
    <div id="app">
      <AppHeader />
      <div class='app-body'>
        <router-view />
      </div>
      <AppFooter />
    </div>
    <Loader/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import Loader from '@/shared/Loader.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    Loader
  }
}
</script>

<style>
body {
  font-size: 16px;
  margin: 0;
  background: #355c7d;
  /* fallback for old browsers */
  background: -webkit-linear-gradient( to right,
  #c06c84,
  #6c5b7b,
  #355c7d);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient( to right,
  #c06c84,
  #6c5b7b,
  #355c7d);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.application--wrap {
  display: block !important;
}

.theme--light.application {
  background: inherit;
}

#app {
  font-family: monospace, sans-serif, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto !important;
}

.app-body {
  margin-bottom: 80px;
}
</style>
