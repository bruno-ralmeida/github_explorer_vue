<template>
  <img class="image_responsive" :src="url" :alt="title" />
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>

<style scoped>
.image_responsive {
  width: 100%;
  height: 100%;
}
</style>
