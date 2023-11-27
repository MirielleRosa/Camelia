<template>
  <svg
    :class="['tab', className]"
    fill="none"
    height="25"
    viewBox="0 0 24 25"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="g" opacity="0.9">
      <path
        class="path"
        d="M21 3.24414H3C1.9 3.24414 1 4.14414 1 5.24414V19.2441C1 20.3441 1.9 21.2441 3 21.2441H21C22.1 21.2441 23 20.3441 23 19.2441V5.24414C23 4.14414 22.1 3.24414 21 3.24414ZM21 19.2441H3V5.24414H13V9.24414H21V19.2441Z"
        fill="#5D5D5D"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Tab",
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
