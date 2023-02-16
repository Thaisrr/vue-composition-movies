<script setup>
import {Field, ErrorMessage} from "vee-validate";
import {computed} from "vue";

const props = defineProps({
  configs: {
    required: true
  },
  name: {
    required: true
  }
})

const isRadioOrCheckbox = computed(() =>  ['checkbox', 'radio'].includes(props.configs.type))

</script>


<template>
  <div :class="{reverse: isRadioOrCheckbox}">
    <label :for="name+configs.value">{{ configs.text }}</label>
    <Field
        @change="configs?.change"
        :rules="configs?.rules"
        :as="configs?.as || 'input'" :name="name"
        :type="configs?.type"
        :value="configs?.value"
        :id="name+configs.value"
        :min="configs?.min"
        :max="configs?.max"
    >
      <template v-if="configs.as === 'select'">
        <option v-for="opt of configs.options" :value="opt?.value || opt">{{opt.label || opt}}</option>
      </template>
    </Field>
    <ErrorMessage class="error" :name="name"/>

  </div>
</template>


<style scoped>
.reverse {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.error {
  color: #ca4444;
}
</style>
