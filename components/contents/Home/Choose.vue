<template>
  <div class="py-8 md:py-14">
    <div class="text-3xl lg:text-5xl app-font-Semibold">Why Choose Us</div>
    <section class="mt-6 md:mt-8">
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6"
      >
        <div v-for="list in chooseList" :key="list.index">
          <ChooseUs
            :title="list.title"
            :text="list.text"
            :className="list.className"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ChooseUs from "@/components/reusables/ChooseUs";
export default {
  components: {
    ChooseUs,
  },
  data() {
    return {
      chooseList: [
        {
          title: "Efficiency & Comfort",
          text: "Skip the queues and fly on your schedule.",
          className: "choose",
        },
        {
          title: "Luxury at Every Turn",
          text: "State-of-the-art jets outfitted for your comfort.",
          className: "choose2",
        },
        {
          title: "Safety First",
          text: "Highly trained professionals that have strict safety protocols.",
          className: "choose3",
        },
        {
          title: "Personalized Services",
          text: "Catering to your unique travel needs.",
          className: "choose4",
        },
      ],
    };
  },
};
</script>

<style></style>
