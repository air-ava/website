<template>
  <div>
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
export default {
  components: {
    AppHeader,
  },
};
</script>
