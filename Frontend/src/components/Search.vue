<template>
  <div :class="['search', `property-${property}`]">
    <template v-if="['gray', 'white'].includes(property)">
      <IconText
        class="icon-text-instance"
        :iconSetIcon="iconTextIconSetIcon"
        iconSetSize="sixteen"
        iconSetSizeBgFalseClassName="icon-text-2"
        textDirectionVerticalClassName="icon-text-3"
        textDivClassName="instance-node-2"
        textText="Search"
        type="icon-text"
      />
      <Text
        class="instance-node-3"
        direction="vertical"
        divClassName="instance-node-2"
        :hasDiv="textHasDiv"
        number="one"
        text="⌘/"
      />
    </template>

    <template v-else-if="property === 'type'">
      <IconText
        class="icon-text-instance"
        :iconSetIcon="iconTextIconSetIcon"
        iconSetSize="sixteen"
        iconSetSizeBgFalseClassName="icon-text-2"
        textDirectionVerticalClassName="icon-text-3"
        textText="Type Something|"
        type="icon-text"
      />
      <IconSet
        BG="false"
        badge="false"
        class="instance-node-3"
        icon="<Xcircle class='x-circle' />"
        size="sixteen"
      />
    </template>
  </div>
</template>

<script>
import IconText from "./IconText.vue";
import Text from "./Text.vue";
import IconSet from "./IconSet.vue";
import Search2 from "../icons/Search2.vue";
import Xcircle from "../icons/Xcircle/Xcircle.vue";

export default {
  name: "Search",
  components: {
    IconText,
    Text,
    IconSet,
    Search2,
    Xcircle,
  },
  props: {
    property: {
      type: String,
      validator: function (value) {
        return ["type", "gray", "white"].indexOf(value) !== -1;
      },
    },
    textHasDiv: {
      type: Boolean,
    },
  },
  computed: {
    iconTextIconSetIcon() {
      return <Search2 class="x-circle" opacity="0.2" />;
    },
  },
};
</script>

<style>
.search {
  align-items: center;
  border-radius: var(--corner-radius-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8-duplicate);
  overflow: hidden;
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
  position: relative;
}

.search .icon-text-instance {
  display: flex !important;
  flex: 1 !important;
  flex-grow: 1 !important;
}

.search .icon-text-2 {
  border-radius: var(--spacing-radius-8) !important;
  flex: 0 0 auto !important;
}

.search .instance-node-2 {
  color: var(--themes-black-20) !important;
}

.search .icon-text-3 {
  display: var(--show-text-show-text, flex) !important;
  flex: 1 !important;
  flex-grow: 1 !important;
}

.search .instance-node-3 {
  flex: 0 0 auto !important;
}

.search .x-circle {
  height: 16px !important;
  position: relative !important;
  width: 16px !important;
}

.search.property-type {
  background-color: var(--themes-white-40);
  border: 1px solid;
  border-color: var(--themes-black-10);
  width: 180px;
}

.search.property-gray {
  background-color: var(--themes-black-5);
  width: 160px;
}

.search.property-white {
  background-color: var(--themes-white-40);
  border: 1px solid;
  border-color: var(--themes-black-10);
  width: 160px;
}
</style>