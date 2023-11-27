<template>
  <img
    :class="['clock-counter', className]"
    alt="Weight regular"
    :src="getImageSrc()"
  />
</template>

<script>
export default {
  name: "ClockCounter",
  props: {
    weight: {
      type: String,
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
      default: "/img/weight-duotone-2.png",
    },
  },
  methods: {
    getImageSrc() {
      switch (this.weight) {
        case "thin":
          return "/img/weight-thin-2.png";
        case "light":
          return "/img/weight-light-2.png";
        case "bold":
          return "/img/weight-bold-2.png";
        case "fill":
          return "/img/weight-fill-2.png";
        case "duotone":
          return this.weightDuotone;
        default:
          return "/img/weight-regular-2.png";
      }
    },
  },
};
</script>

<style>
.clock-counter {
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}
</style>
