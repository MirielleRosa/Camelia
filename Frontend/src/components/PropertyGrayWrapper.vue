<template>
  <div :class="['property-gray-wrapper', 'property-' + property]">
    <template v-if="['gray', 'white'].includes(property)">
      <IconText
        class="icon-text-2"
        :iconSet="iconTextIconSet"
        iconSetSize="sixteen"
        iconSetSizeBgFalseClassName="icon-text-3"
        textDirectionVerticalClassName="icon-text-instance"
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
        class="icon-text-2"
        :iconSet="iconTextIconSet"
        iconSetSize="sixteen"
        iconSetSizeBgFalseClassName="icon-text-3"
        textDirectionVerticalClassName="icon-text-instance"
        textText="Type Something|"
        type="icon-text"
      />
      <IconSet
        BG="false"
        badge="false"
        class="instance-node-3"
        size="sixteen"
      />
    </template>
  </div>
</template>

<script>
import IconSet from "./IconSet.vue";
import IconText from "./IconText.vue";
import Search from "./Search.vue";
import Text from "./Text.vue";

export default {
  name: "PropertyGrayWrapper",
  components: {
    IconSet,
    IconText,
    Search,
    Text,
  },
  props: {
    property: {
      type: String,
      validator: function (value) {
        return ["type", "gray", "white"].indexOf(value) !== -1;
      },
    },
    iconTextIconSet: {
      type: Object,
      default: function () {
        return <Search className="search-instance" search="/img/search-2.png" />;
      },
    },
    textHasDiv: {
      type: Boolean,
    },
  },
};
</script>

<style>
.property-gray-wrapper {
  align-items: center;
  border-radius: var(--corner-radius-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8-duplicate);
  overflow: hidden;
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
  position: relative;
}

.property-gray-wrapper .instance-node-2 {
  color: var(--themes-black-20) !important;
}

.property-gray-wrapper .icon-text-instance {
  display: var(--show-text-show-text, flex) !important;
  flex: 1 !important;
  flex-grow: 1 !important;
}

.property-gray-wrapper .icon-text-2 {
  display: flex !important;
  flex: 1 !important;
  flex-grow: 1 !important;
}

.property-gray-wrapper .icon-text-3 {
  border-radius: var(--spacing-radius-8) !important;
  flex: 0 0 auto !important;
}

.property-gray-wrapper .instance-node-3 {
  flex: 0 0 auto !important;
}

.property-gray-wrapper .search-instance {
  height: 16px !important;
  left: unset !important;
  position: relative !important;
  top: unset !important;
  width: 16px !important;
}

.property-gray-wrapper.property-type {
  background-color: var(--themes-white-40);
  border: 1px solid;
  border-color: var(--themes-black-10);
  width: 180px;
}

.property-gray-wrapper.property-gray {
  background-color: var(--themes-black-5);
  width: 160px;
}

.property-gray-wrapper.property-white {
  background-color: var(--themes-white-40);
  border: 1px solid;
  border-color: var(--themes-black-10);
  width: 160px;
}
</style>