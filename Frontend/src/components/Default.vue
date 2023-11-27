<template>
  <img
    :class="['default', className]"
    alt="Weight duotone"
    :src="getImageSrc"
  />
</template>

<script>
export default {
  name: "Default",
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
      default: "/img/weight-duotone-5.png",
    },
  },
  computed: {
    getImageSrc() {
      if (this.weight === "regular") return "/img/weight-regular-5.png";
      if (this.weight === "thin") return "/img/weight-thin-5.png";
      if (this.weight === "light") return "/img/weight-light-5.png";
      if (this.weight === "bold") return "/img/weight-bold-5.png";
      if (this.weight === "fill") return "/img/weight-fill-5.png";
      return this.weightDuotone;
    },
  },
};
</script>

<style>
.default {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
</style>
