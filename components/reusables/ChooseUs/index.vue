<template>
  <div>
    <div class="h-[356px] rounded-[4px] relative" :class="className">
      <div class="absolute bottom-0 m-5">
        <div class="text-[22px] choose-title app-font-Semibold">
          {{ title }}
        </div>
        <div class="choose-text text-sm mt-2">
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
    url(/images/choose1.png), no-repeat;
  background-size: cover;
}

.choose2 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(/images/choose2.png), no-repeat;
  background-size: cover;
}

.choose3 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(/images/choose3.png);
}

.choose4 {
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url(/images/choose4.png);
}

.choose-title {
  color: white;
}

.choose-text {
  color: white;
}
</style>
