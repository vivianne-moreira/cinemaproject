import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeApp from '@/components/HomeApp.vue';
import ListRoom from '@/components/ListRoom.vue';
import ListMovie from '@/components/ListMovie.vue';
import MovieComponent from '@/components/MovieComponent.vue';
import RoomComponent from '@/components/RoomComponent.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomeApp, name: 'home' },
  { path: '/rooms', component: ListRoom, name: 'rooms' },
  { path: '/movies', component: ListMovie, name: 'movies' },
  { path: '/movie/:id', component: MovieComponent, name: 'movie' },
  { path: '/room/:id', component: RoomComponent, name: 'room' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return {top: 0, left: 0}
  }
});

export default router;
