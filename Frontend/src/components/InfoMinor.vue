<template>
  <img :class="['info-minor', className]" alt="Info minor" src="/img/infominor-3.png" />
</template>

<script>
export default {
  name: "InfoMinor",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.info-minor {
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}
</style>
