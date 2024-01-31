<template>
  <div>
    <h2>Lista Salas Disponíveis</h2>
    <p>Número da Sala: {{ room.number }}</p>
    <p>Descrição: {{ room.description }}</p>
    <h3>Filmes Disponíveis</h3>
    <ul>
      <li v-for="movie in availableMovies" :key="movie.id">
        {{ movie.name }} - {{ movie.director }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    room: {
      type: Object as PropType<{ number: number; description: string }>,
      required: true,
    },
    availableMovies: {
      type: Array as PropType<Array<{ id: number; name: string; director: string }>>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
