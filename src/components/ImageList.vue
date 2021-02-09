<template>
<div>
  <div class="image-container" v-if="isLoggedin">
    <img v-for="image in allImages" v-bind:key="image.link" />
  </div>
  <h2 v-else> Log in view your Gallery! </h2>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters (['allImages','isLoggedin']),
  methods: mapActions (['fetchImages']), 
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>