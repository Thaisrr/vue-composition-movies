<script setup>
import MovieForm from "@/layout/FormComponents/MovieForm.vue";
import {onMounted, ref} from "vue";
import abra from "abra.js";

const props = defineProps({
  id: {
    required: true
  }
});
const movie = ref();

onMounted(async () => {
  const {data} = await abra.get(`http://localhost:8088/shows/${props.id}`);
  movie.value = data;
});

const save = async (value, form) => {
  const res = await abra.put(`http://localhost:8088/shows/${movie?.id}`, value);
  if(res.response.ok) {
    alert('All done ! Le film a bien été créé !');
    form.resetForm();
  }
};
</script>


<template>
  <main>
    <h1>Modifier</h1>
    <p>
      ⚠️ Les radios buttons ne se checked pas automatiquement, et je ne trouve pas de solution fonctionnelle 😤 😡
    </p>
    <MovieForm v-if="movie" @submit="save" :movie="movie" />
  </main>
</template>


<style scoped>

</style>
