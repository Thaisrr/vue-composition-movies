<script setup>
import MyFormField from "@/layout/FormComponents/MyFormField.vue";
import {computed} from "vue";

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  configs: {
    required: true
  },
  hidden: {
    default: false
  }
})


const isMultiple = () => ['checkbox', 'radio'].includes(props.configs?.type) && !!props.configs?.options?.length;

const _options = computed(() => {
  if(!isMultiple()) {
    return
  }
  return props.configs?.options.map(opt => ({...opt, type : props.configs?.type, change: props.configs?.change}))

})
</script>

<template>
  <template v-if="!configs.hide">
    <fieldset v-if="isMultiple()">
      <legend>{{ configs.text }}</legend>
      <MyFormField v-for="opt of _options" :configs="opt" :name="name"/>
    </fieldset>
    <MyFormField v-else :configs="configs" :name="name"/>
  </template>
</template>


<style scoped>

</style>
