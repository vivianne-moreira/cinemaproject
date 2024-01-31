<template>
  <div class="movie-container">
    <h2 class="h2">Lista Filmes Disponíveis</h2>
    <div v-if="movies.length > 0" class="movie-list">
      <ul>
        <li v-for="(movie, index) in movies" :key="movie.id" class="movie" :style="{ marginBottom: isLastMovieWithoutRoom(movie, index) ? '20px' : '0' }">
          <img :src="movie.image" alt="Movie Image" class="movie-image" />
          <div class="movie-title">
            {{ movie.name }} - {{ movie.director }} - Duração: {{ movie.duration }} minutos
          </div>
          <div class="movie-description">
            {{ movie.description }}
          </div>
          <div v-if="movie.rooms.length > 0" class="room-list">
            <p class="room-list-title">Salas:</p>
            <ul class="room-list">
              <li v-for="room in movie.rooms" :key="room.id" class="room-list-item">
                {{ room.name }}
              </li>
            </ul>
          </div>
          <div v-else class="room-list">
            <p class="room-list-title">Não há sala disponível para este filme no momento.</p> 
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="no-movies">
      <p>Não há filmes disponíveis no momento.</p>
    </div>
    <div class="footer-space"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Movie {
  id: number;
  name: string;
  director: string;
  duration: number;
  image: string;
  description: string;
  rooms: Room[];
}

interface Room {
  id: number;
  name: string;
}

export default defineComponent({
  setup() {
    const movies = ref<Movie[]>([]);

    const loadMovies = async () => {
      try {
        const response = await axios.get<Movie[]>('BACKEND_URL/movies');
        movies.value = response.data;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

// Utilização do onMounted para fazer a requisição quando o componente é montado
    onMounted(() => {
      loadMovies();
    });

    return {
      movies,
    };
  },
  methods: {
    isLastMovieWithoutRoom(movie: Movie, index: number): boolean {
      return index === this.movies.length - 1 && movie.rooms.length === 0;
    },
  },
});
</script>

<style scoped>
.movie-image {
  max-width: 100%;
  height: auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.movie-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}

.h2 {
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 2rem;
}

.movie-list {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.movie {
  width: 100%;
  max-width: 750px;
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
}

.movie-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.movie-description {
  font-size: 1rem;
  margin-top: 5px;
  color:#e3dbdb; 
}

.room-list {
  margin-top: 10px;
}

.room-list-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.room-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#e3dbdb; 
}
.no-movies {
  color: #e3dbdb; 
}

.footer-space {
  height: 70px;
}
</style>
