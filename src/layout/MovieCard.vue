<script setup>

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";
import abra from "abra.js";

// Ne pas décomposer les props si on s'en sert dans le script !
// Les valeurs ne seront pas mises à jour
// Ici : si on décompose en
//const {show}  = defineProps(['show']);
// On observera un "bug" si on clique plusieurs fois de suite sur le bouton d'un des films
 const props  = defineProps(['show']);
const emits = defineEmits(['reload', 'updateList']);

const setWatched = async () => {
  const new_show = {...props.show, is_watched: !props.show.is_watched};
  await abra.patch(`http://localhost:8088/shows/${props.show.id}`, new_show);
  emits('reload');
}

/*** Hooks de cycle de vie ***/
onBeforeMount(() => {
  console.log('%c [Card] will be mounted', 'color: #F26419')
})
onMounted(() => {
  console.log('%c [Card] onMounted!', 'color: #F26419')
})
onBeforeUpdate(() => {
  console.log('%c [Card] will be updated', 'color: #F26419')
})
onUpdated(() => {
  console.log('%c [Card] onUpdated !', 'color: #F26419')
})
onBeforeUnmount(() => {
  console.log('%c [Card] will be unmounted', 'color: #F26419')
})
onUnmounted(() => {
  console.log('%c [Card] onUnMounted !', 'color: #F26419')
})

</script>


<template>
  <div  :class="{card: true, watched: show.is_watched}">
    <div class='img-container'>
      <img :src="show.poster" alt=''/>
    </div>
    <div class='title-flex'>
      <h3>{{show.title}}</h3>
      <button @click=setWatched>{{show.is_watched? 'Vu' : 'Pas vu'}}</button>
    </div>

    <div class='expendable'>
      <p>{{show.year}}</p>
      <p>By {{show.director}}</p>
      <p>{{show.duration}}min</p>
      <p v-if="show.seasons">{{show.seasons}} saisons</p>
    </div>
  </div>
</template>


<style scoped>

.card {
  border-radius: 8px;
  padding: 20px;
  background-color: var(--light);
  position: relative;
  transition: all .35s ease-in-out;
  opacity: 1;
}


.card .img-container {
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/9;
}

.card .img-container img {
  width: 100%;
  object-fit: fill;
}

.card.watched h3:before {
  content: '✅';
  padding-right: 1.2em;
}

.card .expendable {
  height:auto;
  position: absolute;
  overflow: hidden;
  transition: all .35s ease;
  top: 0;
  left: 0;
  background-color: var(--light);
  width: 100%;
  padding: 0 20px 20px 20px;
  border-radius: 0 0 8px 8px;
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  color: transparent;
}

.card .expendable p {
  margin: 0;
}

.card:hover {
  transform: scale(1.2) ;
  z-index: 1;
  border-radius: 8px 8px 0 0;
  box-shadow: var(--shadow);

}

.card:hover .expendable {
  top: 100%;
  /*z-index: 1;*/
  box-shadow: var(--shadow);
  color: var(--dark);
}

</style>
