<script setup>
  import {logout} from "@/helpers/Authentication";
  import {useUser} from "@/pinia";
  const store = useUser();
</script>



 <template>
    <nav>
      <ul>
          <li>
            <router-link :to="{name: 'bases'}">Les Bases</router-link>
          </li>
        <template v-if="!store.isLogged">
          <li>
            <router-link to="/login">Connexion</router-link>
          </li>
          <li>
            <router-link to="/register">Inscription</router-link>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link :to="{name: 'movies'}">DawanFlix</router-link>
          </li>
          <li>
            <router-link :to="{name: 'create'}">Ajouter</router-link>
          </li>
          <li v-if="store.isLogged">
            <button @click="logout()">Logout</button>
          </li>
        </template>

      </ul>
    </nav>
</template>


<style scoped>
nav {
  padding: 30px 0;
  background-color: white;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

nav ul {
  list-style: none;
  padding: 0;
  width: var(--width);
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 20px;
}

nav a:link, nav a:visited {
  font-size: 1.2em;
  font-family: var(--title-font);
  color: var(--dark);
  text-decoration: none;
}

nav a {
  position: relative;
  padding-bottom: 10px;
}

nav a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--dark);
  transition: width .35s ease-in-out;
}

nav a:hover:after, nav a.router-link-exact-active:after {
  width: 100%;
}

nav a.router-link-exact-active {
  --dark: var(--primary)
}



</style>
