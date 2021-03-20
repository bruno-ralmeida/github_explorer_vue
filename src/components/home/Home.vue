<template>
  <div>
    <menu-default/>
    <main>
      <div class="search">
        <input type="search" id="" @input="userFilter = $event.target.value" />
        <button class="btn" @click="getUser(), getRepos()">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div class="github">
        <h1 v-show="invalidUser">
          User not found!
        </h1>
        <div class="user" v-show="gitHub.user.id">
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
                <span class="badge">
                  {{ gitHub.user.followers }}
                </span>
              </li>
              <li class=" ">
                <h3>following:</h3>
                <span class="badge">
                  {{ gitHub.user.following }}
                </span>
              </li>
              <li>
                <h3>public repos:</h3>
                <span class="badge">{{ gitHub.user.public_repos }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="repos" v-show="gitHub.repos.length > 0">
          <ul>
            <li
              class="repos_item"
              v-for="repo of gitHub.repos"
              v-bind:key="repo.id"
            >
              <card-repo :repo="repo" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Card from "../shared/card/Card";
import {} from "../../assets/font-awesome";

export default {
  components: {
    "menu-default": Menu,
    "image-responsive": ImageResponsive,
    "card-repo": Card
  },
  data() {
    return {
      gitHub: {
        user: "",
        repos: []
      },
      userFilter: "",
      invalidUser: ""
    };
  },
  methods: {
    getUser() {
      this.gitHub.user = {};
      this.invalidUser = "";
      const user = this.userFilter;
      const url = `https://api.github.com/users/${user}`;

      this.$http
        .get(url)
        .then(res => {
          const {
            id,
            avatar_url,
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            public_repos
          } = res.data;

          this.gitHub.user = {
            id,
            avatar_url,
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            public_repos
          };
        })

        .catch(err => (this.invalidUser = err));
    },
    getRepos() {
      this.gitHub.repos = [];
      const user = this.userFilter;

      const url = `https://api.github.com/users/${user}/repos?per_page=4`;

      this.$http
        .get(url)
        .then(res => {
          res.data.map(repo => {
            const { id, name, html_url, language } = repo;
            this.gitHub.repos.push({ id, name, html_url, language });
            console.log(repo);
          });
        })
        .catch(err => (this.invalidUser = err));
    }
  }
};
</script>

<style scoped>
.search {
  grid-area: search;
  justify-self: end;
  align-self: center;
  padding: 0 1em;
}
.search > input,
.search > button {
  height: 30px;
  margin: 0;
  border: none;
  padding: 0 0.5em;
}

.btn {
  background: #5d69d0;
  color: #fefefe;
}

.search > input:focus {
  outline: none;
}

button:hover,
button:focus {
  outline: none;
  transform: scale(1.1);
  transition: 0.1s ease;
}

.github {
  grid-area: github;
  display: flex;
  justify-content: space-evenly;
  margin: 1em 0;
}

.github > h1 {
  justify-content: center;
  color: #fefefe;
  font-size: 40px;
}

.repos {
  justify-self: stretch;
  width: 100%;
  max-width: 70vw;
}

.repos ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em;
  justify-content: center;
}

.repos_item {
  margin: 0.5em;
  width: 100%;
  max-width: 500px;
  list-style: none;
}

main {
  display: grid;
  grid-template-rows: 1fr 40px auto;
  grid-template-columns: 100vw;
  grid-template-areas:
    "menu"
    "search"
    "github";
}

.user {
  display: flex;
  flex-direction: column;
}

.user_img {
  box-shadow: 5px 3px 10px #fefefe50;
  max-width: 250px;
  align-self: center;
}

.info_main > li {
  display: flex;
  align-items: center;
  margin: 0.5em;
  padding: 0 0.75em;
  justify-content: flex-start;
}

.info_main p {
  margin: 0 0.5em;
}

@media only screen and (max-width: 900px) {
  .github,
  .repos {
    flex-direction: column;
    align-content: center;
  }
  .repos {
    max-width: 100vw;
  }
}
</style>
