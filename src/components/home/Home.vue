<template>
  <div>
      <input type="search" name="" id="" @input="gitHub.user = $event.target.value" >
      <button @click="search()">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    gitHub : {
        user: "",
        client_id: "Iv1.0e6c579dcce44c4b",
        client_secret: "c1d133679d704dfacc4938c1d3300e46188e7130",
        repos: [],
      },
    };
  },
  methods: {
    search() {
      const { user, client_id, client_secret} = this.gitHub

      const url = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;

      this.$http
        .get(url)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>>

