<template>
  <div class="bg-primary">
    <section class="py-14 max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-7 gap-6">
        <div class="block md:hidden mb-6">
          <div>
            <NewsLetter />
          </div>
        </div>
        <div class="md:col-span-4 set-text-white">
          <div class="md:w-3/5">
            <div class="text-xl app-font-Semibold">Air Ava</div>
            <div class="text-[14px] md:text-[16px] mt-2">
              Winged for your comfort
            </div>
            <div class="text-[14px] md:text-[16px] mt-3">
              Connect with us on social media to see our latest journeys and
              updates.
            </div>
            <div class="my-6">
              <div class="flex justify-start space-x-4">
                <img src="/images/ig.svg" alt="" />
                <img src="/images/fb.svg" alt="" />
                <img src="/images/ld.svg" alt="" />
                <img src="/images/yt.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-3 hidden md:block">
          <div>
            <NewsLetter />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsLetter from "./newsLetter.vue";
export default {
  components: {
    NewsLetter,
  },
};
</script>

<style></style>
