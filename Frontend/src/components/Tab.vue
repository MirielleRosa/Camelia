<template>
  <img
    :class="['tab', className]"
    alt="Style rounded"
    :src="getImageSrc"
  />
</template>

<script>
export default {
  name: "Tab",
  props: {
    style: {
      type: String,
      validator: function (value) {
        return ["sharp", "rounded", "filled", "two-tone", "outlined"].indexOf(value) !== -1;
      },
    },
    styleFilled: {
      type: String,
      default: "/img/style-two-tone.png",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    getImageSrc() {
      if (this.style === "rounded") return "/img/style-rounded.png";
      if (this.style === "sharp") return "/img/style-sharp.png";
      return this.styleFilled;
    },
  },
};
</script>

<style>
.tab {
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}
</style>
