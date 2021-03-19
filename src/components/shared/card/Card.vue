<template>
  <div class="card">
    <h3 class="repo_name">
      <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
    </h3>
    <span class="badge lang" v-if="repo.language"> {{ repo.language }} </span>
  </div>
</template>

<script>
export default {
  props: ["repo"]
};
</script>

<style scoped>
.card {
  background: #4bc0c8d8;
  box-shadow: 1px 1px 5px #4bc0c8;
  border-radius: 5px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.repo_name > a {
  text-decoration: none;
  text-transform: none;
}

.repo_name > a:hover {
  text-decoration: underline;
}

.lang {
  background: #5d69d0;
  box-shadow: 1px 1px 5px #384ffb;
  max-width: 80px;
}
@media only screen and (max-width: 900px) {
  h3 {
    font-size: 14px;
  }
}
</style>
