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

<style scoped>
.body {
  background-color: black;
}
*{
  color:#09b38b;
}
</style>
