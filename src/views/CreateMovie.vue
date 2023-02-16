<script setup>
import {computed, onMounted, ref} from "vue";
import {current_year, greater_year, smaller_year, validateTitle, validateYear} from "@/helpers/FormValidation";
import {arrayRange, moviesField} from "@/helpers/Tools";
import abra from "abra.js";
import MovieForm from "@/layout/FormComponents/MovieForm.vue";



const save = async (value, form) => {
  const res = await abra.post('http://localhost:8088/shows', value);
  if(res.response.ok) {
    alert('All done ! Le film a bien été créé !');
    form.resetForm();
  }
};


</script>


<template>

  <h1>Ajouter un film ou une série</h1>
  <main>
    <MovieForm @submit="save"/>
  </main>


</template>


<style scoped>

form {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 8px 8px 15px rgba(128, 128, 128, 0.37);
}



</style>
