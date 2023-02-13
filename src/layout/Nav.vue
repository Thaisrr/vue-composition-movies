<script setup>
import {logout} from "@/helpers/Authentication";
  import {useUser} from "@/pinia";

  const links = [
    {name: 'bases', text: 'Les Bases'},
    {name: 'movies', text: 'DawanFlix'},
    {name: 'login', text: 'Connexion', hide: true},
    {name: 'register', text: 'Inscription', hide: true },
  ]

  const store = useUser();
</script>



 <template>
    <nav>
      <ul>
        <template v-for="({name, text, hide}, index) of links">
          <li v-if="!hide || !store.isLogged"  :key="index + name">
            <router-link :to="{name}">{{text}}</router-link>
          </li>
        </template>
        <li v-if="store.isLogged">
          <button @click="logout()">Logout</button>
        </li>
      </ul>
    </nav>
</template>


<style scoped>
nav {
  padding: 30px 0;
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

nav a:hover:after, nav a.active:hover {
  width: 100%;
}
nav a.active {
  color: var(--primary)
}
</style>
