<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {moviesField} from "@/helpers/Tools";
import {Form} from "vee-validate";
import MyFormControl from "@/layout/FormComponents/MyFormControl.vue";


/*
J'ai voulu simplifier la création de formulaires, en automatisant,
Je crois que j'ai juste créé une usine à gaz peut maintenable
--> essayer de créer une classe pour améliorer tout ça
 */

const props = defineProps(['movie'])
defineEmits(['submit']);
const showType = ref();
const seasonHidden = computed(() => showType.value !== 'serie');
const fields = ref(moviesField);
const isInitialized = ref(false)


onMounted(() => {
  fields.value.type.change = (e) => showType.value = e.target.value;
  fields.value.season.hide = seasonHidden;
  initDefaultValues();
  isInitialized.value = true;
});

const initDefaultValues = () => {
  if(!props.movie) return;
  for(let key in fields.value) {
    // Pour les listes de checkbox et radio button : on "check" par défaut la valeur initiale
    // Ne fonctionne pas ><'
    if(['checkbox', 'radio'].includes(fields.value[key].type) && fields.value[key].options) {
      const buttonIndex = fields.value[key].options.findIndex(opt => {
        console.log(`Opt Value : ${opt.value}  |||  Movie value : ${props.movie[key]}`)
        return opt.value === props.movie[key]
      });
      if(buttonIndex === -1) return;
      fields.value[key].options[buttonIndex].checked = true;
      console.log(fields.value[key].options[buttonIndex])
      return;
    }
    // Pour les autres types de champs : on passe directement la valeur
    fields.value[key].value = props.movie[key] || fields.value[key].value;
  }
}

</script>


<template>
  <p>{{props?.movie?.title}}</p>
  <Form v-if="isInitialized" @submit="$emit('submit')">
    <MyFormControl v-for="(value, key) in fields" :name="key" :configs="value" />
    <p>
      <button>Save</button>
    </p>
  </Form>
</template>


<style scoped>

</style>
