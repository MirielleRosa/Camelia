<template>
  <div class="overlap-group-wrapper">
    <div class="overlap-10">
      <OverlapGroup />
      <GroupWrapper />
    </div>
  </div>
</template>

<script>
import OverlapGroup from "./OverlapGroupWrapper/sections/OverlapGroup.vue";
import GroupWrapper from "./OverlapGroupWrapper/sections/GroupWrapper.vue";

export default {
  name: "OverlapGroupWrapper",
  components: {
    OverlapGroup,
    GroupWrapper,
  },
};
</script>

<style>
.overlap-group-wrapper {
  background-color: #d9d9d93d;
  height: 762px;
  left: 208px;
  position: absolute;
  top: 5317px;
  width: 1488px;
}

.overlap-group-wrapper .overlap-10 {
  height: 668px;
  left: 183px;
  position: relative;
  top: 35px;
  width: 1229px;
}
</style>