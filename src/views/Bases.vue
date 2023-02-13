<script setup>
import {reactive, ref} from "vue";
// Pas réactif → ne se met à jour sur la vue que si la vue est màj par reactive ou ref
// Contrairement à React, les valeurs non surveillées ne sont pas remise à 0 à chaque màj du DOM
let count = 0;
const increment = () => {
  count++;
  console.log('in increment ', count)
}

// reactive: ne prend pas de primitifs, uniquement object, array, set, ...
// Ne pas décomposer ni enregistrer dans une variable locale -> "déconnexion" donc perte de réactivité
let state = reactive({counter: 0});
const incrementState = () => state.counter++;

// ref : OK pour tous types de
// dans le script, il faut y accéder avec .value
// dans le template, juste counterRef renvoie la valeur
let counterRef = ref(0);
const incrementRef = () => counterRef.value++;

</script>

<template>
  <h1>Les bases super express de Vue</h1>

  <main>
    <section>
      <h2>Syntaxe</h2>

      <p>L'interpolation se fait entre balises moustaches <code>{{ '{' + '{du js}' + '}' }}</code>.</p>
      <p>On peut faire du data binding avec <code>v-bind:attr</code> ou la syntaxe raccourcie <code>:attr</code> </p>
      <p>Les événements se catchent avec <code>v-on:event</code> ou <code>@event</code> + des modifiers <code>@submit.prevent</code>, <code>@input.trim</code>, ...</p>
      <p><small>( hyper pratique comme syntaxe &lt;3 )</small></p>
      <p>
        Le 2 way binding existe, avec <code>v-model="ma_variable"</code>. Fonctionne sur les inputs, ou les composants
        ( cf le composant "Filters" pour un exemple ).
      </p>
      <p>
        On peut faire du rendu conditionnel avec <code>v-if, v-else-if, v-else</code>.
      </p>
      <p>Il existe aussi <code>v-show="condition"</code>.</p>
      <ul>
        <li>v-if : rendu conditionnel. Créé et détruit le composant en fonction de la condition. Couteux si beaucoup de changements.</li>
        <li>v-show: affichage conditionnel. Le composant est créé, mais affiché uniquement en fonction de la condition.</li>
      </ul>

      <p>Les listes sont gérées avec <code>v-for="(element, index) of array"</code></p>
      <p>Si on a besoin d'utiliser et du v-for, et du v-if sur un élément, il faut utiliser la balise <code>{{'<' + 'template>'}}</code></p>

    </section>
    <section>
      <h2>Réactivité</h2>
      <h3>Not reactive</h3>
      <p>{{count}}</p>
      <p>
        <button @click="increment">Increment</button>
      </p>

      <h3>Reactive Counter : </h3>
      <p><b>Value : {{state.counter}}</b></p>
      <p>
        <button @click="incrementState">Increment</button>
      </p>

      <h3>Ref Counter</h3>
      <p>Value : <b>{{counterRef}}</b></p>
      <p>
        <button @click="incrementRef">Increment</button>
      </p>
    </section>

  </main>


</template>



<style scoped>
section {
  margin-bottom: 80px;
}
h2 {
  text-align: start;
}

</style>
