<template>
  <div :class="['header-image', className]">
    <img :class="['unsplash-KHO', unsplashKhoClassName]" alt="Unsplash KHO" :src="unsplashKho" />
  </div>
</template>

<script>
export default {
  name: "HeaderImage",
  props: {
    className: {
      type: String,
      default: "",
    },
    unsplashKhoClassName: {
      type: String,
      default: "",
    },
    unsplashKho: {
      type: String,
      default: "https://c.animaapp.com/dmaOkRSZ/img/unsplash-kho-jvns5xc.png",
    },
  },
};
</script>

<style>
.header-image {
  background-color: #ffe500a6;
  border-radius: 200px;
  height: 400px;
  position: relative;
  width: 400px;
}

.header-image .unsplash-KHO {
  height: 630px;
  left: 18px;
  object-fit: cover;
  position: absolute;
  top: -230px;
  width: 421px;
}
</style>
