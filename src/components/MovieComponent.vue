<template>
  <div>
    <h2>Lista de Filmes Disponíveis</h2>
    <p>Nome: {{ movie.name }}</p>
    <p>Diretor: {{ movie.director }}</p>
    <p>Duração: {{ movie.duration }} minutes</p>
    <h3>Salas Disponíveis</h3>
    <ul>
      <li v-for="room in availableRooms" :key="room.number">
        Room {{ room.number }} - {{ room.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Movie {
  name: string;
  director: string;
  duration: number;
}

interface Room {
  number: number;
  description: string;
  director: string;
}

export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
    availableRooms: {
      type: Array as PropType<Room[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>

  
