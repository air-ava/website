<template>
  <div>
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </NuxtLayout>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  head() {
    return {
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "Air Ava",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content: `Welcome to Ava, where you are winged for your comfort! We are thrilled to offer exclusive rentals on private jets worldwide tailored for those who value comfort`,
        },
      ],
    };
  },
};
</script>
