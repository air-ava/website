<template>
  <div class="max-w-7xl mx-auto px-4 md:px-none">
    <section class="">
      <Hero />
      <Choose />
      <Fleet />
      <Flexible />
      <Discover />
    </section>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Choose from "./Choose.vue";
import Fleet from "./Fleet.vue";
import Flexible from "./Flexible.vue";
import Discover from "./Discover.vue";
export default {
  components: {
    Hero,
    Choose,
    Fleet,
    Flexible,
    Discover,
  },
};
</script>

<style></style>
