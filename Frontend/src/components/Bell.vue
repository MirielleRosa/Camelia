<template>
  <img
    :class="['bell', className]"
    alt="Weight regular"
    :src="getImageSrc()"
  />
</template>

<script>
export default {
  name: "Bell",
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
      default: "/img/weight-duotone-3.png",
    },
  },
  methods: {
    getImageSrc() {
      switch (this.weight) {
        case "thin":
          return "/img/weight-thin-3.png";
        case "light":
          return "/img/weight-light-3.png";
        case "bold":
          return "/img/weight-bold-3.png";
        case "fill":
          return "/img/weight-fill-3.png";
        case "duotone":
          return this.weightDuotone;
        default:
          return "/img/weight-regular-3.png";
      }
    },
  },
};
</script>

<style>
.bell {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
</style>
