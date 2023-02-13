<script setup>

// Pour faire du 2 way binding
// la value doit s'appeler modelValue
// l'emit update:modelValue
// On peut ensuite utiliser v-model
const {modelValue} = defineProps({
  modelValue: String
});

</script>

<template>
  <div class="flex">
    <button :class="{active: modelValue === 'all'}" @click="$emit('update:modelValue', 'all')">All</button>
    <button :class="{active: modelValue === 'true'}" @click="$emit('update:modelValue', 'true')">Watched</button>
    <button :class="{active: modelValue === 'false'}" @click="$emit('update:modelValue', 'false')">Not Watched</button>
  </div>
</template>


<style scoped>
.flex {
  margin-bottom: 50px;
}
</style>
