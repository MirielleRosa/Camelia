<template>
  <svg
    :class="['dot-6', className]"
    fill="none"
    height="14"
    viewBox="0 0 16 14"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z"
      fill="#C6C7F8"
    />
  </svg>
</template>

<script>
export default {
  name: "Dot6",
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
