<template>
  <svg
    :class="['feather-icon-more-horizontal-1', className]"
    fill="none"
    height="14"
    viewBox="0 0 15 14"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      clip-rule="evenodd"
      d="M7.68132 8.16634C8.32565 8.16634 8.84798 7.64401 8.84798 6.99967C8.84798 6.35534 8.32565 5.83301 7.68132 5.83301C7.03698 5.83301 6.51465 6.35534 6.51465 6.99967C6.51465 7.64401 7.03698 8.16634 7.68132 8.16634Z"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
    <path
      class="path"
      clip-rule="evenodd"
      d="M12.3483 8.16634C12.9926 8.16634 13.515 7.64401 13.515 6.99967C13.515 6.35534 12.9926 5.83301 12.3483 5.83301C11.704 5.83301 11.1816 6.35534 11.1816 6.99967C11.1816 7.64401 11.704 8.16634 12.3483 8.16634Z"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
    <path
      class="path"
      clip-rule="evenodd"
      d="M3.0153 8.16634C3.65963 8.16634 4.18197 7.64401 4.18197 6.99967C4.18197 6.35534 3.65963 5.83301 3.0153 5.83301C2.37097 5.83301 1.84863 6.35534 1.84863 6.99967C1.84863 7.64401 2.37097 8.16634 3.0153 8.16634Z"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
  </svg>
</template>

<script>
export default {
  name: "FeatherIconMoreHorizontal1",
  props: {
    color: {
      type: String,
      default: "#422F8A",
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
