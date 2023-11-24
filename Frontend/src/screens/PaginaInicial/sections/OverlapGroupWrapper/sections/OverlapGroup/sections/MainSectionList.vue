<template>
  <div class="main-section-list">
    <Item />
    <ItemWrapper />
    <Div />
    <SectionComponentNode />
    <NamecandidateNameItemScore10001 />
  </div>
</template>

<script>
import Item from "./MainSectionList/sections/Item.vue";
import ItemWrapper from "./MainSectionList/sections/ItemWrapper.vue";
import Div from "./MainSectionList/sections/Div.vue";
import SectionComponentNode from "./MainSectionList/sections/SectionComponentNode.vue";
import NamecandidateNameItemScore10001 from "./MainSectionList/sections/NamecandidateNameItemScore10001.vue";

export default {
  name: "MainSectionList",
  components: {
    Item,
    ItemWrapper,
    Div,
    SectionComponentNode,
    NamecandidateNameItemScore10001,
  },
};
</script>

<style>
.main-section-list {
  height: 472px;
  left: 325px;
  position: absolute;
  top: 196px;
  width: 904px;
}
</style>