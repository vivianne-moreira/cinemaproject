<!-- Conteúdo Home -->
<template>
  <div class="home-app">
    <div class="welcome-section">
      <h1>Seja Bem-Vindo(a) ao Cinema Vue</h1>
      <p class="info-string">
        Descubra os melhores filmes em cartaz e aproveite a experiência única
        do nosso cinema. Cinema Vue, experiência única!
      </p>
    </div>

    <!-- Conteúdo Destaques-->
    <div class="featured-section">
      <h2 class="h2">Destaques</h2>
      <b-carousel class="featured-carousel">
        <b-carousel-slide :key="0" class="carousel-slide">
          <template #img>
            <div class="movie-content">
              <div v-for="movie in mostWatchedFilms" :key="movie.id" class="movie-item">
                <img :src="movie.image" alt="Imagem do Filme" class="movie-image-carousel" />
                <h3>{{ movie.name }}</h3>
              </div>
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <!-- Conteúdo Mais Informações -->
    <div class="info-section">
      <h2>Mais Informações</h2>
      <p class="info-description">
        Conheça nossas salas de última geração, equipadas com tecnologia de
        ponta para proporcionar a melhor experiência cinematográfica. Disponíveis salas 
        4Dx e Plus, além das tradicionais 2D e 3D. Aproveite!
      </p>
    </div>

    <!-- Conteúdo Explore -->
    <div class="options-section">
      <h2 class="section-title">Explore</h2>
      <div class="explore-container"></div>
      <div>
        <router-link to="/rooms" class="explore-link">
          <button class="explore-button">Ver Salas Disponíveis</button>
        </router-link>
      </div>
      <router-link to="/movies" class="explore-link">
        <button class="explore-button">Ver Filmes em Cartaz</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Movie {
  id: number;
  image: string;
  name: string;
}

export default defineComponent({
  setup() {
    const mostWatchedFilms = ref<Movie[]>([]);

    const carregarMostWatchedFilms = async () => {
      try {
        const response = await axios.get<Movie[]>('URL_DO_BACKEND/most-watched-films');
        mostWatchedFilms.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar filmes mais vistos:', error);
      }
    };

    // Utilização do onMounted para fazer a requisição quando o componente é montado
    onMounted(() => {
      carregarMostWatchedFilms();
    });

    return {
      mostWatchedFilms,
    };
  },
});
</script>

<style scoped>
.filme-img-carousel {
  max-width: 100%;
  height: auto;
  width: 100%;
  max-height: 300px;
}

.carousel-slide {
  flex: 0 0 auto;
  margin-right: 10px;
}

.featured-section {
  text-align: center;
  margin-bottom: 20px;
}

.featured-carousel {
  display: flex;
  justify-content: center;
}

.filme-content {
  display: flex;
}

.filme-item {
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.info-string {
  color:#e3dbdb; 
}

.info-description {
  color:#e3dbdb; 
}
.home-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

.welcome-section,
.featured-section,
.info-section,

.options-section {
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #555;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.explore-link {
  text-decoration: none;
}

.explore-button {
  display: block;
  width: 250px;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #09b38b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.explore-button:hover {
  background-color: #fff;
  color: #09b38b;
  border: 1px solid #09b38b;
}

.home-app::after {
  content: '';
  display: block;
  height: 20px;
}
</style>
