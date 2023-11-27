<template>
  <img :class="['feather-icon-more', className]" alt="Feather icon more" :src="featherIconMore" />
</template>

<script>
export default {
  name: "FeatherIconMore",
  props: {
    className: {
      type: String,
      default: "",
    },
    featherIconMore: {
      type: String,
      default: "/img/feather-icon-more-horizontal-1.png",
    },
  },
};
</script>

<style>
.feather-icon-more {
  height: 14px;
  left: 0;
  position: absolute;
  top: 0;
  width: 14px;
}
</style>
