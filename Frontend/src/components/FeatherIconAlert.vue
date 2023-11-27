<template>
  <img :class="['feather-icon-alert', className]" alt="Feather icon alert" :src="featherIconAlert" />
</template>

<script>
export default {
  name: "FeatherIconAlert",
  props: {
    className: {
      type: String,
      default: "",
    },
    featherIconAlert: {
      type: String,
      default: "/img/feather-icon-alert-circle.png",
    },
  },
};
</script>

<style>
.feather-icon-alert {
  height: 18px;
  left: 0;
  position: absolute;
  top: 0;
  width: 18px;
}
</style>
