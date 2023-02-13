<script setup xmlns="http://www.w3.org/1999/html">
  import {ref} from "vue";

 defineProps({
    btnText: String
  });

  const user = ref({
    email: '',
    password: ''
  });



</script>


<template>
  <form @submit.prevent="$emit('handle-submit', user)">
    <div>
      <label for="email">Email</label>
      <input id="email" v-model="user.email">
    </div>
    <div>
      <label for="pwd">Password</label>
      <input id="pwd" v-model="user.password">
    </div>
    <p>
      <button>{{btnText}}</button>
    </p>
  </form>
</template>


<style scoped>

</style>
