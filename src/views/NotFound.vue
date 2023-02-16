<script setup>

</script>


<template>
  <h1>Ohoh ! Are you lost ? </h1>

  <main>
    <div class="container">
      <img src="https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif" alt="">
    </div>
    <div>
      <h2>404</h2>
      <p>Cette page n'existe pas !</p>
      <p><router-link to="/">Retourner sur l'accueil ?</router-link></p>
    </div>

  </main>

</template>


<style scoped>
main {
  max-width: fit-content;
  text-align: center;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  flex-flow: row-reverse wrap;
}
</style>
