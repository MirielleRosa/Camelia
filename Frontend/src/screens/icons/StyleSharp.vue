<template>
  <svg
    :class="['style-sharp', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H13V9H21V19ZM23 3H1V21H23V3ZM21 19H3V5H13V9H21V19Z"
      fill="#A8B0B9"
    />
    <path
      class="path"
      d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H13V9H21V19ZM23 3H1V21H23V3ZM21 19H3V5H13V9H21V19Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
</template>

<script>
export default {
  name: "StyleSharp",
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
