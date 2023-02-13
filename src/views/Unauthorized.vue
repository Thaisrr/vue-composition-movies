<script setup>

</script>


<template>
  <h1>Oh no, you can't access this ressource !</h1>

  <main>
    <div class="container">
      <img src="https://media.tenor.com/LqdYBIC2Ci8AAAAC/thats-illegal-illegal.gif" alt=""/>
    </div>
    <p>Un guard défini dans le dossier "guard" bloque l'accés à cette page.</p>
    <p>et une restriction de l'API définie dans ./db/routes.json bloquent l'accés aux ressources. </p>
    <p>
      <router-link :to="{name: 'login'}">Me connecter</router-link>
    </p>
  </main>

</template>


<style scoped>

</style>
