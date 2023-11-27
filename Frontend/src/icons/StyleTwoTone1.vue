<template>
  <svg
    :class="['style-two-tone-1', className]"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="path"
      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM16 15H18V17H16V15Z"
      fill="#A8B0B9"
      opacity="0.3"
    />
    <path
      class="path"
      d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM16 15H18V17H16V15Z"
      fill="black"
      fill-opacity="0.54"
      opacity="0.3"
    />
    <path
      class="path"
      d="M16 15H18V17H16V15ZM16 11H18V13H16V11ZM22 7H12V3H2V21H22V7ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19Z"
      fill="#A8B0B9"
    />
    <path
      class="path"
      d="M16 15H18V17H16V15ZM16 11H18V13H16V11ZM22 7H12V3H2V21H22V7ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
</template>

<script>
export default {
  name: "StyleTwoTone1",
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
