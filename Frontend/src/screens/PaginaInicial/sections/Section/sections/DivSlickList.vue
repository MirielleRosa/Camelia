<template>
  <div class="div-slick-list">
    <div class="div-slick-track">
      <Link />
      <DivStylesServiceWrapper />
      <LinkWrapper />
      <DivWrapper />
    </div>
  </div>
</template>

<script>
import Link from "./DivSlickList/sections/Link.vue";
import DivStylesServiceWrapper from "./DivSlickList/sections/DivStylesServiceWrapper.vue";
import LinkWrapper from "./DivSlickList/sections/LinkWrapper.vue";
import DivWrapper from "./DivSlickList/sections/DivWrapper.vue";

export default {
  name: "DivSlickList",
  components: {
    Link,
    DivStylesServiceWrapper,
    LinkWrapper,
    DivWrapper,
  },
};
</script>

<style>
.div-slick-list {
  height: 402px;
  left: 15px;
  overflow: hidden;
  position: absolute;
  top: 120px;
  width: 1506px;
}

.div-slick-list .div-slick-track {
  height: 402px;
  position: relative;
  width: 2262px;
}
</style>