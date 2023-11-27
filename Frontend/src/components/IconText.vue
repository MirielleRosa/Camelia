<template>
  <div :class="['icon-text', className]">
    <template v-if="type === 'icon-text'">
      <IconSet
        :BG="false"
        :badge="false"
        :class="iconSetSizeBgFalseClassName"
        :icon="iconSetIcon"
        :size="iconSetSize"
      />
      <Text
        :class="textDirectionVerticalClassName"
        direction="vertical"
        :divClassName="textDivClassName"
        number="one"
        :text="textText"
      />
    </template>

    <template v-if="type === 'text-icon'">
      <Text class="instance-node" direction="vertical" number="one" text="Text" />
      <IconSet
        :BG="false"
        :badge="false"
        class="instance-node"
        icon="<WeightDuotone5 className='default-6' />"
        size="twenty"
      />
    </template>
  </div>
</template>

<script>
import WeightDuotone5 from "../icons/WeightDuotone5.vue";
import IconSet from "./IconSet.vue";
import Text from "./Text.vue";

export default {
  name: "IconText",
  components: {
    IconSet,
    Text,
  },
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ["icon-text", "text-icon"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
    iconSetSize: {
      type: String,
      default: "twenty",
    },
    iconSetSizeBgFalseClassName: {
      type: String,
      default: "",
    },
    iconSetIcon: {
      type: Object,
      default: function () {
        return <WeightDuotone5 className="default-6" />;
      },
    },
    textDivClassName: {
      type: String,
      default: "",
    },
    textDirectionVerticalClassName: {
      type: String,
      default: "",
    },
    textText: {
      type: String,
      default: "Text",
    },
  },
};
</script>

<style>
.icon-text {
  align-items: center;
  border-radius: var(--corner-radius-8);
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  position: relative;
}

.icon-text .instance-node {
  flex: 0 0 auto !important;
}

.icon-text .default-6 {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}
</style>