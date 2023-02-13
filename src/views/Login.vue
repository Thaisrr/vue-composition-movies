<script setup>


import {login} from "@/helpers/Authentication";
import router from "@/router";
import LoginForm from "@/layout/LoginForm.vue";
import {useUser} from "@/pinia/UserStore";

const connexion = async (infos) => {
  const res = await login(infos);
  if(res) {
    alert('Welcome Back !');
    await router.push({name: 'movies'})
  }
}
</script>


<template>
  <h1>Connexion</h1>
  <main>
    <ul>
      <li>Email : toto@mail.fr</li>
      <li>Password : password</li>
    </ul>
    <LoginForm @handle-submit="connexion" btn-text="Connexion"/>
  </main>

</template>


<style scoped>

</style>
