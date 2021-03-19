<template>
  <div>
    <menu-default class="menu" />

    <main>
      <div class="search">
        <input type="search" id="" @input="gitHub.user = $event.target.value" />
        <button @click="getUser(), getRepos()">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div class="user" v-show="gitHub.user.login">
        <div class="user_img">
          <image-responsive
            :url="gitHub.user.avatar_url"
            :title="'Avatar GitHub'"
          />
        </div>

        <div class="user_infos">
          <ul class="info_main">
            <li>
              <h3>user:</h3>
              <p>{{ gitHub.user.login || "-" }}</p>
            </li>
            <li>
              <h3>name:</h3>
              <p>{{ gitHub.user.name || "-" }}</p>
            </li>
            <li>
              <h3>bio:</h3>
              <p>{{ gitHub.user.bio || "-" }}</p>
            </li>
            <li>
              <h3>company:</h3>
              <p>{{ gitHub.user.company || "-" }}</p>
            </li>
            <li>
              <h3>email:</h3>
              <p>{{ gitHub.user.email || "-" }}</p>
            </li>
            <li>
              <h3>location:</h3>
              <p>{{ gitHub.user.location || "-" }}</p>
            </li>
            <li class="">
              <h3>followers:</h3>
              <span class="badge followers"> {{ gitHub.user.followers }} </span>
            </li>
            <li class=" ">
              <h3>following:</h3>
              <span class="badge following">
                {{ gitHub.user.following }}
              </span>
            </li>
            <li>
              <h3>public repos:</h3>
              <span class="badge repos">{{ gitHub.user.public_repos }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="repos" v-show="gitHub.repos.length > 0">
        <h2>Repositórios</h2>
        <ul v-for="repo of gitHub.repos" v-bind:key="repo">
          <li>{{ repo.name }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import {} from "../../assets/font-awesome";

export default {
  components: {
    "menu-default": Menu,
    "image-responsive": ImageResponsive,
  },
  data() {
    return {
      gitHub: {
        user: "",
        client_id: "Iv1.0e6c579dcce44c4b",
        client_secret: "c1d133679d704dfacc4938c1d3300e46188e7130",
        repos: [],
      },
      theme: "",
    };
  },
  mounted() {
    if (localStorage.theme) this.theme = localStorage.theme;
  },
  watch: {
    theme(newTheme) {
      localStorage.theme = newTheme;
    },
  },
  methods: {
    getUser() {
      const { user, client_id, client_secret } = this.gitHub;

      const url = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;

      this.$http
        .get(url)
        .then((res) => {
          const {
            avatar_url,
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            public_repos,
          } = res.data;

          this.gitHub.user = {
            avatar_url,
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            public_repos,
          };
          console.log(res.data);
        })

        .catch((err) => console.error(err));
    },
    getRepos() {
      const { user, client_id, client_secret } = this.gitHub;
      const url = `https://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`;

      this.$http
        .get(url)
        .then((res) => {
          this.gitHub.repos = res.data;
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h3 {
  text-transform: capitalize;
  margin: 0 0.325em;
  color: #0a181c;
}

p {
  font-size: 18px;
  color: #1e505f;
}

.badge {
  background: red;
  padding: 0 .5em;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #cecece;
  color: #fefefe;
  font-size: 14px;
  font-weight: 400;
}

.search {
  grid-area: search;
  justify-self: end;
  align-self: center;
}

.user {
  grid-area: user;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user_img {
  max-width: 300px;
}

.user_infos {
  display: flex;
  flex-direction: column;
}

.info_main > li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.repos {
  grid-area: repos;
  align-self: center;
  justify-self: center;
}

main {
  display: grid;
  grid-template-columns: 40vw auto;
  grid-template-rows: 1fr 40px auto;
  grid-template-areas:
    "menu menu"
    "search search"
    "user repos";
}
</style>
