<template>
  <div class="section">
    <p class="text-wrapper-51">Explore os serviços em alta</p>
    <img class="icon-4" alt="Icon" src="https://c.animaapp.com/dmaOkRSZ/img/icon-4.svg" />
    <Overlap />
    <DivSlickList />
  </div>
</template>

<script>
import Overlap from "./Section/sections/Overlap.vue";
import DivSlickList from "./Section/sections/DivSlickList.vue";

export default {
  name: "Section",
  components: {
    Overlap,
    DivSlickList,
  },
};
</script>

<style>
.section {
  height: 522px;
  left: 232px;
  position: absolute;
  top: 4703px;
  width: 1536px;
}

.section .text-wrapper-51 {
  color: #1d1d1d;
  font-family: "Roboto", Helvetica;
  font-size: 32px;
  font-weight: 500;
  height: 48px;
  left: 15px;
  letter-spacing: 0;
  line-height: 48px;
  position: absolute;
  top: -1px;
  white-space: nowrap;
  width: 530px;
}

.section .icon-4 {
  height: 16px;
  left: 15px;
  position: absolute;
  top: 57px;
  width: 16px;
}
</style>