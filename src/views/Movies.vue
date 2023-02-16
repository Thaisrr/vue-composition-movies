<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref, watch
} from "vue";
import abra from "abra.js";
import Grid from "@/layout/Grid.vue";
import MovieCard from "@/layout/MovieCard.vue";
import Filters from "@/layout/Filters.vue";

const movies = ref([]);
const filter = ref('all');
const state = reactive({
  isLoading: true,
  error: ''
});

onMounted(() => {
  console.log('%c [Movies] onMounted', 'color: #9D44B5');
  getMovies()
});

const getMovies = async () => {
  try {
    state.isLoading = true;
    const {data} = await abra.get('http://localhost:8088/shows');
    movies.value = data;
  } catch {
    movies.value = null;
    state.error = 'Oh Oh, something went wrong :('
  } finally {
    state.isLoading = false;
  }
}

const updateMovie = (show, index) => {
  const temp = [...movies.value];
  temp[index] = show;
  movies.value = temp;
}

// Computed : pour les valeurs calculées.
// Ne se recalcule que si l'une des données utilisées est mise à jour.
// J'aime bien mettre un _ devant, mais ça ne tient qu'à moi, en plus des fois, j'oublie.
const _displayedMovies = computed(() => {
  if(filter.value === 'all') {
    return movies.value;
  }
  return movies.value.filter(m => (filter.value === 'true')?  m.is_watched : !m.is_watched);
});

/*** Je savais pas où le mettre, donc ici, ça sert à rien, mais tu peux surveiller une valeur ***/
watch(filter, async (oldFilter, newFilter) => {
  console.log(`%c Modification du filter : ${oldFilter} -> ${newFilter}`, 'color: #2a9d8f')
})

/**** Hooks de Cycle de vie *******/
onBeforeMount(() => {
  console.log('%c [Movies] will be mounted', 'color: #9D44B5');
});
onBeforeUpdate(() => {
  console.log('%c [Movies] will be updated', 'color: #9D44B5');
})
onUpdated(() => {
  console.log('%c [Movies] onUpdated', 'color: #9D44B5');
});
onBeforeUnmount(() => {
  console.log('%c [Movies] will be unmounted', 'color: #9D44B5');
})
onUnmounted(() => {
  console.log('%c [Movies] onUnmounted', 'color: #9D44B5');
})

</script>


<template>

  <main>
    <h1>DawanFlix</h1>

    <p v-if="state.isLoading">Chargement...</p>
    <section v-else-if="movies">
      <Filters v-model="filter"/>
        <Grid>
          <MovieCard v-for="(movie, index) of _displayedMovies"
                     :show="movie" :key="movie.id"
                     @reload="getMovies"
                     @updateList="updateMovie($event, index)"
          />
        </Grid>
    </section>
    <template v-else>
      <p  class="error">{{state.error || 'Oups, something went wrong, please try refreshing the page'}}</p>
      <p>Est-ce que l'API est bien démarrée ? </p>
      <p><code>$ npm run api</code></p>
    </template>

  </main>


</template>


<style scoped>
</style>
