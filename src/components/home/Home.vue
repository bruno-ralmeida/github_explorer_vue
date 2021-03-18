<template>
  <div>
    <input
      type="search"
      name=""
      id=""
      @input="gitHub.user = $event.target.value"
    />
    <button @click="getUser(), getRepos()">Search</button>
    <div v-show="userGitHub">
      <h2>Informações</h2>
      <ul v-for="prop of userGitHub" v-bind:key="prop">
        <li>{{ prop }}</li>
      </ul>
    </div>
    <div v-show="gitHub.repos.length > 0">
      <h2>Repositórios</h2>
      <ul v-for="repo of gitHub.repos" v-bind:key="repo">
        <li>{{ repo.name }}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      gitHub: {
        user: "",
        client_id: "Iv1.0e6c579dcce44c4b",
        client_secret: "c1d133679d704dfacc4938c1d3300e46188e7130",
        repos: []
      },
      userGitHub: ""
    };
  },
  methods: {
    getUser() {
      const { user, client_id, client_secret } = this.gitHub;

      const url = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;

      this.$http
        .get(url)
        .then(res => {
          const {
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            twitter_username,
            public_repos
          } = res.data;

          this.userGitHub = {
            login,
            name,
            company,
            bio,
            email,
            followers,
            following,
            location,
            twitter_username,
            public_repos
          };
        })

        .catch(err => console.error(err));
    },
    getRepos() {
      const { user, client_id, client_secret } = this.gitHub;
      const url = `https://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`;

      this.$http
        .get(url)
        .then(res => {
          this.gitHub.repos = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}</style
>>
