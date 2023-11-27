<template>
  <img
    :class="['four-leaf-clover', className]"
    alt="Weight duotone"
    :src="getImageSrc"
  />
</template>

<script>
export default {
  name: "FourLeafClover",
  props: {
    weight: {
      type: String,
      default: "duotone",
      validator: function (value) {
        return ["duotone", "regular", "thin", "bold", "fill", "light"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
    weightDuotone: {
      type: String,
      default: "/img/weight-duotone-4.png",
    },
  },
  computed: {
    getImageSrc() {
      switch (this.weight) {
        case "fill":
          return "/img/weight-fill-4.png";
        case "bold":
          return "/img/weight-bold-4.png";
        case "light":
          return "/img/weight-light-4.png";
        case "thin":
          return "/img/weight-thin-4.png";
        case "regular":
          return "/img/weight-regular-4.png";
        default:
          return this.weightDuotone;
      }
    },
  },
};
</script>

<style>
.four-leaf-clover {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
</style>
