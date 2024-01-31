<template>
  <div id="app" class="body">
    <HeaderApp />
    <FooterApp />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style>
body {
  background-color: black;
  margin: 0; 
  padding: 0; 
  color:#09b38b;
}

#app {
  /* Se estiver usando um contêiner principal com id "app" */
  min-height: 100vh; /* Garante que o contêiner tenha pelo menos a altura da tela */
}
</style>