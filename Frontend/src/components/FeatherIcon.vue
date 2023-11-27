<template>
  <img :class="['feather-icon', className]" alt="Feather icon" :src="featherIcon" />
</template>

<script>
export default {
  name: "FeatherIcon",
  props: {
    className: {
      type: String,
      default: "",
    },
    featherIcon: {
      type: String,
      default: "/img/feather-icon-calendar-1.png",
    },
  },
};
</script>

<style>
.feather-icon {
  height: 14px;
  left: 0;
  position: absolute;
  top: 0;
  width: 14px;
}
</style>
