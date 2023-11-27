<template>
  <svg
    :class="['feather-icon-alert-circle-1', className]"
    fill="none"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      clip-rule="evenodd"
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.5"
    />
    <path class="path" d="M9 6V9" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
    <circle class="circle" cx="9" cy="12" :fill="color" r="0.75" />
  </svg>
</template>

<script>
export default {
  name: "FeatherIconAlertCircle1",
  props: {
    color: {
      type: String,
      default: "#D0D1D2",
    },
    opacity: {
      type: String,
      default: "unset",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
