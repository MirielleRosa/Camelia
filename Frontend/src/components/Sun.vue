<template>
  <img
    :class="['sun', className]"
    alt="Weight regular"
    :src="getImageSrc()"
  />
</template>

<script>
export default {
  name: "Sun",
  props: {
    weight: {
      type: String,
      default: "regular",
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
      default: "/img/weight-duotone-1.png",
    },
  },
  methods: {
    getImageSrc() {
      switch (this.weight) {
        case "thin":
          return "/img/weight-thin-1.png";
        case "light":
          return "/img/weight-light-1.png";
        case "bold":
          return "/img/weight-bold-1.png";
        case "fill":
          return "/img/weight-fill-1.png";
        case "duotone":
          return this.weightDuotone;
        default:
          return "/img/weight-regular-1.png";
      }
    },
  },
};
</script>

<style>
.sun {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
</style>
