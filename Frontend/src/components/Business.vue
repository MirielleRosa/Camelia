<template>
  <img
    :class="['business', className]"
    alt="Style rounded"
    :src="getImageSrc"
  />
</template>

<script>
export default {
  name: "Business",
  props: {
    style: {
      type: String,
      validator: function (value) {
        return ["sharp", "rounded", "filled", "two-tone", "outlined"].indexOf(value) !== -1;
      },
    },
    styleOutlined: {
      type: String,
      default: "/img/style-sharp-1.png",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    getImageSrc() {
      if (this.style === "rounded") return "/img/style-rounded-1.png";
      if (this.style === "two-tone") return "/img/style-two-tone-1.png";
      return this.styleOutlined;
    },
  },
};
</script>

<style>
.business {
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}
</style>
