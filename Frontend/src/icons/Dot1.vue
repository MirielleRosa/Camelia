<template>
  <svg
    :class="['dot-1', className]"
    fill="none"
    height="8"
    viewBox="0 0 16 8"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M11 0C11 1.65685 9.65685 3 8 3C6.34315 3 5 1.65685 5 0C5 -1.65685 6.34315 -3 8 -3C9.65685 -3 11 -1.65685 11 0Z"
      fill="#C6C7F8"
    />
  </svg>
</template>

<script>
export default {
  name: "Dot1",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
/* No styles */
</style>
