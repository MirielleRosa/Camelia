<template>
  <svg
    :class="['dot-2', className]"
    fill="none"
    height="12"
    viewBox="0 0 16 12"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M11 4C11 5.65685 9.65685 7 8 7C6.34315 7 5 5.65685 5 4C5 2.34315 6.34315 1 8 1C9.65685 1 11 2.34315 11 4Z"
      fill="#C6C7F8"
    />
  </svg>
</template>

<script>
export default {
  name: "Dot2",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
