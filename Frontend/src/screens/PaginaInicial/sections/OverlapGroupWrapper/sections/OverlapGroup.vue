<template>
  <div class="overlap-group">
    <MainSectionList />
    <Group />
  </div>
</template>

<script>
import MainSectionList from "./OverlapGroup/sections/MainSectionList.vue";
import Group from "./OverlapGroup/sections/Group.vue";

export default {
  name: "OverlapGroup",
  components: {
    MainSectionList,
    Group,
  },
};
</script>

<style>
.overlap-group {
  height: 668px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1229px;
}
</style>