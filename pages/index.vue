<template>
  <div>
    <Head>
      <Title>Air Ava</Title>
      <Meta
        name="description"
        content="Welcome to Ava, where you are winged for your comfort! We are thrilled
          to offer exclusive rentals on private jets worldwide tailored for
          those who value comfort...."
      />
      <OgImage v-bind="ogImageOptions" />
    </Head>
    <Content />
  </div>
</template>

<script>
import Content from "@/components/contents/Home";
export default {
  components: {
    Content,
  },
};
</script>

<style></style>
