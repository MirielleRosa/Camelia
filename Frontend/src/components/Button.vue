<template>
  <button
    :class="['button', `type-${buttonState.type}`, buttonState.size, buttonState.style, buttonState.state, className]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <template v-if="buttonState.type === 'icon'">
      <IconSet
        BG="false"
        badge="false"
        :class="[buttonState.size === 'large' ? 'class' : 'class-2']"
        :icon="iconSetIcon"
        :size="[buttonState.size === 'large' ? 'twenty-four' : 'twenty']"
      />
    </template>

    <template v-if="buttonState.type === 'text'">
      <Text
        class="text-instance"
        direction="vertical"
        :divClassName="textDivClassName"
        :hasDiv="textHasDiv"
        number="one"
        :text="textText"
      />
    </template>

    <template v-if="buttonState.type === 'text-icon'">
      <Text
        class="text-instance"
        direction="vertical"
        :divClassName="[
          buttonState.state === 'disabled' && ['large', 'medium'].includes(buttonState.size) ? 'class-3' :
          (buttonState.size === 'large' && buttonState.state === 'default' && buttonState.style === 'filled') ||
          (buttonState.size === 'large' && buttonState.state === 'hover' && buttonState.style === 'filled') ||
          (buttonState.size === 'medium' && buttonState.state === 'default' && buttonState.style === 'filled') ||
          (buttonState.size === 'medium' && buttonState.state === 'hover' && buttonState.style === 'filled') ? 'class-4' :
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'borderless') ||
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'gray') ||
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'outline') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'borderless') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'gray') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'outline') ? 'class-5' :
          buttonState.state === 'disabled' && buttonState.size === 'small' ? 'class-6' :
          buttonState.size === 'small' && buttonState.style === 'filled' && ['default', 'hover'].includes(buttonState.state) ? 'class-7' :
          'class-8'
        ]"
        number="one"
        text="Button"
      />
    </template>

    <template v-if="['icon-icon', 'icon-text-icon', 'icon-text', 'text-icon'].includes(buttonState.type)">
      <IconSet
        BG="false"
        badge="false"
        :class="[buttonState.size === 'large' ? 'class' : 'class-2']"
        :icon="buttonState.type === 'text-icon' ? (
          <Arrowlinedown39
            :class="[buttonState.size === 'large' && 'class-9', buttonState.size === 'small' && 'class-10', buttonState.size === 'medium' && 'four-leaf-clover']"
            :color="(
              (buttonState.state === 'default' && buttonState.style === 'borderless') ||
              (buttonState.state === 'default' && buttonState.style === 'gray') ||
              (buttonState.state === 'default' && buttonState.style === 'outline') ||
              buttonState.state === 'disabled' ||
              (buttonState.state === 'hover' && buttonState.style === 'borderless') ||
              (buttonState.state === 'hover' && buttonState.style === 'gray') ||
              (buttonState.state === 'hover' && buttonState.style === 'outline')
            ) ? '#1C1C1C' :
            buttonState.style === 'filled' && ['default', 'hover'].includes(buttonState.state) ? 'white' :
            undefined"
            :opacity="['default', 'hover'].includes(buttonState.state) ? '0.4' :
            buttonState.state === 'disabled' ? '0.1' :
            undefined"
          />
        ) : (
          <Fourleafclover96
            :class="[buttonState.size === 'large' && 'class-9', buttonState.size === 'small' && 'class-10', buttonState.size === 'medium' && 'four-leaf-clover']"
            :color="(
              (buttonState.state === 'default' && buttonState.style === 'borderless') ||
              (buttonState.state === 'default' && buttonState.style === 'gray') ||
              (buttonState.state === 'default' && buttonState.style === 'outline') ||
              buttonState.state === 'disabled' ||
              (buttonState.state === 'hover' && buttonState.style === 'borderless') ||
              (buttonState.state === 'hover' && buttonState.style === 'gray') ||
              (buttonState.state === 'hover' && buttonState.style === 'outline')
            ) ? '#1C1C1C' :
            buttonState.style === 'filled' && ['default', 'hover'].includes(buttonState.state) ? 'white' :
            undefined"
            :opacity="buttonState.state === 'disabled' ? '0.1' : undefined"
          />
        )"
        :size="[buttonState.size === 'small' ? 'sixteen' : buttonState.size === 'medium' ? 'twenty' : 'twenty-four']"
      />
    </template>

    <template v-if="['icon-text-icon', 'icon-text'].includes(buttonState.type)">
      <Text
        class="text-instance"
        direction="vertical"
        :divClassName="[
          buttonState.state === 'disabled' && ['large', 'medium'].includes(buttonState.size) ? 'class-3' :
          (buttonState.size === 'large' && buttonState.state === 'default' && buttonState.style === 'filled') ||
          (buttonState.size === 'large' && buttonState.state === 'hover' && buttonState.style === 'filled') ||
          (buttonState.size === 'medium' && buttonState.state === 'default' && buttonState.style === 'filled') ||
          (buttonState.size === 'medium' && buttonState.state === 'hover' && buttonState.style === 'filled') ? 'class-4' :
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'borderless') ||
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'gray') ||
          (buttonState.size === 'small' && buttonState.state === 'default' && buttonState.style === 'outline') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'borderless') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'gray') ||
          (buttonState.size === 'small' && buttonState.state === 'hover' && buttonState.style === 'outline') ? 'class-5' :
          buttonState.state === 'disabled' && buttonState.size === 'small' ? 'class-6' :
          buttonState.size === 'small' && buttonState.style === 'filled' && ['default', 'hover'].includes(buttonState.state) ? 'class-7' :
          'class-8'
        ]"
        number="one"
        text="Button"
      />
    </template>

    <template v-if="['icon-icon', 'icon-text-icon'].includes(buttonState.type)">
      <IconSet
        BG="false"
        badge="false"
        :class="[buttonState.size === 'large' ? 'class' : 'class-2']"
        :icon="(
          <Arrowlinedown39
            :class="[buttonState.size === 'large' && 'class-9', buttonState.size === 'small' && 'class-10', buttonState.size === 'medium' && 'four-leaf-clover']"
            :color="(
              (buttonState.state === 'default' && buttonState.style === 'borderless') ||
              (buttonState.state === 'default' && buttonState.style === 'gray') ||
              (buttonState.state === 'default' && buttonState.style === 'outline') ||
              buttonState.state === 'disabled' ||
              (buttonState.state === 'hover' && buttonState.style === 'borderless') ||
              (buttonState.state === 'hover' && buttonState.style === 'gray') ||
              (buttonState.state === 'hover' && buttonState.style === 'outline')
            ) ? '#1C1C1C' :
            buttonState.style === 'filled' && ['default', 'hover'].includes(buttonState.state) ? 'white' :
            undefined"
            :opacity="buttonState.state === 'disabled' ? '0.1' : undefined"
          />
        )"
        :size="[buttonState.size === 'small' ? 'sixteen' : buttonState.size === 'medium' ? 'twenty' : 'twenty-four']"
      />
    </template>
  </button>
</template>

<script>
import Arrowlinedown39 from "../icons/Arrowlinedown39.vue";
import Fourleafclover96 from "../icons/Fourleafclover96.vue";
import IconSet from "./IconSet.vue";
import Text from "./Text.vue";

export default {
  name: "Button",
  components: {
    IconSet,
    Text,
  },
  props: {
    type: {
      type: String,
      default: "icon-text-icon",
      validator: function (value) {
        return [
          "icon-icon",
          "icon",
          "icon-text-icon",
          "text-icon",
          "icon-text",
          "text",
        ].indexOf(value) !== -1;
      },
    },
    style: {
      type: String,
      default: "borderless",
      validator: function (value) {
        return ["gray", "filled", "outline", "borderless"].indexOf(value) !== -1;
      },
    },
    stateProp: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["disabled", "hover", "default"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "large",
      validator: function (value) {
        return ["large", "medium", "small"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
    textDivClassName: {
      type: String,
      default: "",
    },
    textText: {
      type: String,
      default: "Button",
    },
    textHasDiv: {
      type: Boolean,
      default: undefined,
    },
    iconSetIcon: {
      type: Object,
      default: () => (
        <Fourleafclover96
          class="four-leaf-clover"
          color="#1C1C1C"
        />
      ),
    },
  },
  data() {
    return {
      buttonState: {
        type: this.type,
        style: this.style,
        state: this.stateProp,
        size: this.size,
      },
    };
  },
  methods: {
    handleMouseEnter() {
      this.buttonState.state = "hover";
    },
    handleMouseLeave() {
      this.buttonState.state = "default";
    },
  },
};
</script>

<style>
.button {
  all: unset;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
}

.button .class {
  border-radius: var(--spacing-radius-8) !important;
  flex: 0 0 auto !important;
  gap: var(--spacing-4) !important;
  height: var(--spacing-size-24) !important;
  width: var(--spacing-size-24) !important;
}

.button .class-2 {
  border-radius: var(--spacing-radius-8) !important;
  flex: 0 0 auto !important;
  gap: var(--spacing-4) !important;
  height: var(--spacing-size-20) !important;
  width: var(--spacing-size-20) !important;
}

.button .text-instance {
  flex: 0 0 auto !important;
}

.button .class-3 {
  color: var(--themes-black-10) !important;
  font-family: var(--18-regular-font-family) !important;
  font-size: var(--18-regular-font-size) !important;
  font-style: var(--18-regular-font-style) !important;
  font-weight: var(--18-regular-font-weight) !important;
  letter-spacing: var(--18-regular-letter-spacing) !important;
  line-height: var(--18-regular-line-height) !important;
  text-align: center !important;
}

.button .class-4 {
  color: var(--themes-white-100) !important;
  font-family: var(--18-regular-font-family) !important;
  font-size: var(--18-regular-font-size) !important;
  font-style: var(--18-regular-font-style) !important;
  font-weight: var(--18-regular-font-weight) !important;
  letter-spacing: var(--18-regular-letter-spacing) !important;
  line-height: var(--18-regular-line-height) !important;
  text-align: center !important;
}

.button .class-5 {
  text-align: center !important;
}

.button .class-6 {
  color: var(--themes-black-10) !important;
  text-align: center !important;
}

.button .class-7 {
  color: var(--themes-white-100) !important;
  text-align: center !important;
}

.button .class-8 {
  font-family: var(--18-regular-font-family) !important;
  font-size: var(--18-regular-font-size) !important;
  font-style: var(--18-regular-font-style) !important;
  font-weight: var(--18-regular-font-weight) !important;
  letter-spacing: var(--18-regular-letter-spacing) !important;
  line-height: var(--18-regular-line-height) !important;
  text-align: center !important;
}

.button .class-9 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.button .class-10 {
  height: 16px !important;
  position: relative !important;
  width: 16px !important;
}

.button .four-leaf-clover {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.button.type-text-icon {
  display: inline-flex;
}

.button.large {
  border-radius: 16px;
  display: inline-flex;
  gap: var(--spacing-8-duplicate);
}

.button.small {
  border-radius: var(--corner-radius-8);
  display: inline-flex;
  gap: var(--spacing-4);
}

.button.type-icon-icon {
  display: inline-flex;
}

.button.medium {
  border-radius: var(--corner-radius-12);
  gap: var(--spacing-8-duplicate);
}

.button.type-text {
  display: inline-flex;
}

.button.type-icon-text-icon {
  display: inline-flex;
}

.button.type-icon-text {
  display: inline-flex;
}

.button.outline {
  border: 1px solid;
}

.button.hover.filled {
  background-color: var(--themes-white-20);
}

.button.type-text-icon.medium {
  padding: var(--spacing-8-duplicate) var(--spacing-16) var(--spacing-8-duplicate) var(--spacing-16);
}

.button.hover.gray {
  background-color: var(--themes-black-10);
}

.button.gray.disabled {
  background-color: var(--themes-black-5);
}

.button.type-text-icon.large {
  padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-24);
}

.button.type-icon.large {
  padding: var(--spacing-16);
}

.button.small.type-icon-text {
  height: var(--spacing-size-28);
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
}

.button.default.filled {
  background-color: var(--themes-primary-brand);
}

.button.type-text.large {
  padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-24);
}

.button.medium.type-icon-text {
  padding: var(--spacing-8-duplicate) var(--spacing-16) var(--spacing-8-duplicate) var(--spacing-16);
}

.button.type-icon.medium {
  display: flex;
  height: var(--icon-size-40);
  padding: var(--spacing-8-duplicate);
  width: var(--icon-size-40);
}

.button.hover.borderless {
  background-color: var(--themes-black-5);
}

.button.type-icon-text-icon.small {
  height: var(--spacing-size-28);
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
}

.button.hover.outline {
  border-color: var(--themes-black-20);
}

.button.small.type-icon-icon {
  height: var(--icon-size-28-duplicate);
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
}

.button.outline.default {
  border-color: var(--themes-black-10);
}

.button.type-icon-text-icon.large {
  padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-24);
}

.button.type-text.small {
  height: var(--spacing-size-28);
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
}

.button.large.type-icon-text {
  padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-24);
}

.button.medium.type-icon-icon {
  height: var(--icon-size-40);
  padding: var(--spacing-8-duplicate) var(--spacing-16) var(--spacing-8-duplicate) var(--spacing-16);
}

.button.disabled.filled {
  background-color: var(--themes-black-5);
}

.button.type-icon-text-icon.medium {
  padding: var(--spacing-8-duplicate) var(--spacing-16) var(--spacing-8-duplicate) var(--spacing-16);
}

.button.large.type-icon-icon {
  padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-24);
}

.button.small.type-text-icon {
  height: var(--spacing-size-28);
  padding: var(--spacing-4) var(--spacing-8-duplicate) var(--spacing-4) var(--spacing-8-duplicate);
}

.button.type-icon.small {
  padding: var(--spacing-4);
}

.button.gray.default {
  background-color: var(--themes-black-5);
}

.button.type-text.medium {
  padding: var(--spacing-8-duplicate) var(--spacing-16) var(--spacing-8-duplicate) var(--spacing-16);
}

.button.outline.disabled {
  border-color: var(--themes-black-10);
}
</style>