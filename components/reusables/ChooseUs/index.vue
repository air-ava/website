<template>
  <div>
    <div
      class="h-[199px] md:h-[356px] rounded-[4px] relative"
      :class="className"
    >
      <div class="absolute bottom-0 m-3 md:m-5">
        <div class="text-[16px] md:text-[22px] choose-title app-font-Semibold">
          {{ title }}
        </div>
        <div class="choose-text text-[10px] md:text-sm md:mt-2">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.choose {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(https://res.cloudinary.com/godfadatun/image/upload/v1701054572/airava/choose1_pshmvl.png),
    no-repeat;
  background-size: cover;
}

.choose2 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(https://res.cloudinary.com/godfadatun/image/upload/v1701054574/airava/choose2_zsxxmy.png),
    no-repeat;
  background-size: cover;
}

.choose3 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(https://res.cloudinary.com/godfadatun/image/upload/v1701054574/airava/choose3_t1visr.png),
    no-repeat;
  background-size: cover;
}

.choose4 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(https://res.cloudinary.com/godfadatun/image/upload/v1701054573/airava/choose4_hvoojo.png),
    no-repeat;
  background-size: cover;
}

.choose-title {
  color: white;
}

.choose-text {
  color: white;
}
</style>
