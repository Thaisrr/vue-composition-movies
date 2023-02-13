<script setup>
import {computed} from "vue";

// On peut accéder aux données du script dans le CSS avec v-bind
// ( et c'est absolument formidable ! )
const props = defineProps({
  cardSize: {
    default: 300,
    type: Number
  }
})

const _size = computed(() => `${props.cardSize}px`);

</script>


<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(v-bind(_size), 1fr));
  gap: 20px;
}

/* pour accéder aux composant enfant passés en slot : il faut les wrapper dans :slotted */
.grid:has(:slotted(.card:hover)) :slotted(.card:not(:hover)) {
  opacity: .5;
}
</style>
