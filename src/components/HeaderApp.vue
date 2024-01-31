<template>
  <div>
    <!-- Barra superior com logo e nome -->
    <header class="top-bar">
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Cinema Vue Logo">        
        <span>Cinema Vue</span>
      </div>
    </header>
    
    <!-- Barra inferior com links de navegação -->
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home Vue</router-link>
      <router-link to="/rooms" class="nav-link">Salas Disponíveis</router-link>
      <router-link to="/movies" class="nav-link">Filmes Disponíveis</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderApp',
};
</script>

<style scoped>
.top-bar {
  background-color: #093846; 
  color: #fff; 
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 70px;
}

.logo {
  display: flex; 
  align-items: center;
}

.logo img {
  width: 40px; 
  height: auto;
  margin-right: 10px;
}

.logo span {
  font-size: 1.5rem;
  font-weight: bold;
}

.navigation {
  background-color: #09b38b;
  color: #fff;
  display: flex;
  justify-content: center; 
  padding: 10px; 
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  margin: 0 5px; 
  border: 2px solid #fff; 
  border-radius: 5px; 
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #fff; 
  color: #093846; 
}
</style>
