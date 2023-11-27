<template>
  <svg
    :class="['feather-icon-calendar', className]"
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      clip-rule="evenodd"
      d="M1.75 3.5C1.75 2.85567 2.27233 2.33333 2.91667 2.33333H11.0833C11.7277 2.33333 12.25 2.85567 12.25 3.5V11.6667C12.25 12.311 11.7277 12.8333 11.0833 12.8333H2.91667C2.27233 12.8333 1.75 12.311 1.75 11.6667V3.5Z"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
    <path
      class="path"
      d="M9.33333 1.16667V3.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
    <path
      class="path"
      d="M4.66667 1.16667V3.5"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-opacity="opacity"
      stroke-width="1.16667"
    />
    <path
      class="path"
      d="M1.75 5.83333H12.25"
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
  name: "FeatherIconCalendar",
  props: {
    color: {
      type: String,
      default: "#0D0D0D",
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
