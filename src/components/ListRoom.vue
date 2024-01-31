<template>
  <div class="room-list">
    <h2 class="room-list-title">Lista Salas Disponíveis</h2>
    <div v-if="rooms.length > 0">
      <div v-for="room in rooms" :key="room.id" class="room-block">
        <div @click="toggleDetails(room.id)" class="room-header">
          {{ room.name }} - Type: {{ room.type }}
        </div>
        <div v-if="showDetails[room.id]" class="room-details">
          <p>Descrição: {{ room.description || 'Nenhuma descrição disponível' }}</p>
          <h3 class="info">Filmes Disponíveis</h3>
          <ul class="for" v-if="room.movies && room.movies.length > 0">
            <li v-for="movie in room.movies" :key="movie.id">
              {{ movie.name }} - {{ movie.director }} - Duração: {{ movie.duration }} minutos
            </li>
          </ul>
          <p v-else>Não há filmes disponíveis nesta sala</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Não há salas disponíveis no momento.</p>
    </div>
    <div class="blank-space"></div>
    <RoomComponent v-if="rooms.length > 0" :room="{}" :availableMovies="[]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import RoomComponent from './RoomComponent.vue'
interface Movie {
  id: number;
  name: string;
  director: string;
  duration: number;
}

interface Room {
  id: number;
  name: string;
  description: string;
  type: string;
  image: string;
  movies: Movie[];
}

export default defineComponent({
  data() {
    return {
      rooms: [] as Room[],
      showDetails: {} as Record<number, boolean>,
    };
  },
  methods: {
    toggleDetails(roomId: number): void {
      this.showDetails[roomId] = !this.showDetails[roomId];
    },
  },
  async mounted() {
    try {
      const response = await axios.get<Room[]>('BACKEND_URL/rooms');
      this.rooms = response.data;
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  },
});
</script>


<style scoped>
.room-list {
  margin-bottom: 20px;
  text-align: center;
  color:#e3dbdb; 
}

.room-list-title {
  font-size: 2rem;
  padding: 20px;
  margin-bottom: 10px;
  color:#09b38b;
}

.room-block {
  margin-bottom: 20px;
}

.room-header {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
}
.info {
  color: #09b38b;
  text-align: center;
}
.room-header:hover {
  background-color: #09b38b;
}

.room-details {
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #000000;
  text-align: justify;
}

.blank-space {
  height: 150px;
}
.for{
  text-align: center;

}
</style>
