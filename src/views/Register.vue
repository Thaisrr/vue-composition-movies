<script setup>

import {register} from "@/helpers/Authentication";
import LoginForm from "@/layout/LoginForm.vue";
import router from "@/router";

const inscription = async (infos) => {
  const res = await register(infos);
  if(res) {
    alert('Vous êtes bien inscrit⋅e, vous pouvez désormais vous connecter !');
    await router.push({name: 'login'});
  }
}

</script>


<template>
  <h1>Inscription</h1>
  <main>
    <LoginForm @handle-submit="inscription" btn-text="Inscription"/>
  </main>
</template>


<style scoped>

</style>
