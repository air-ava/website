<template>
  <div class="">
    <div>
      <Contact />
    </div>
    <div class="socials">
      <Socials />
    </div>
  </div>
</template>

<script>
import Contact from "./contact.vue";
import Socials from "./socials.vue";
export default {
  components: {
    Contact,
    Socials,
  },
};
</script>

<style scoped>
.socials {
  border-top: 2px solid white;
}
</style>
