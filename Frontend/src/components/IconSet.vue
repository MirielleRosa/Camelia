<template>
  <div :class="['icon-set', borderRadius, size, bgClass, className]">
    <template v-if="!badge && (size === 'eighty' || size === 'forty-eight' || size === 'forty' || size === 'sixteen' || size === 'thirty-two' || size === 'twenty-eight' || size === 'twenty-four' || size === 'twenty')">
      <slot></slot>
    </template>

    <template v-if="badge">
      <slot></slot>
      <div class="badge">
        <template v-if="!bg && (size === 'thirty-two' || size === 'twenty-eight' || size === 'twenty-four')">
          <Dot2 class="dot" />
        </template>

        <template v-if="size === 'sixteen' || (!bg && (size === 'twenty-four' || size === 'twenty'))">
          <Dot1 class="dot" />
        </template>

        <template v-if="bg && (size === 'thirty-two' || size === 'twenty-eight' || size === 'twenty-four')">
          <Dot6 class="dot" />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Dot1 from "../icons/Dot1.vue";
import Dot2 from "../icons/Dot2.vue";
import Dot6 from "../icons/Dot6.vue";

export default {
  name: "IconSet",
  components: {
    Dot1,
    Dot2,
    Dot6,
  },
  props: {
    size: {
      type: String,
      default: "sixteen",
      validator: function (value) {
        return [
          "sixteen",
          "twenty-four",
          "twenty-eight",
          "forty-eight",
          "zero",
          "eighty",
          "twenty",
          "thirty-two",
          "forty",
        ].indexOf(value) !== -1;
      },
    },
    bg: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    borderRadius() {
      return this.bg ? "border-radius-8" : "";
    },
    bgClass() {
      return this.bg ? "BG-true" : "";
    },
  },
};
</script>

<style>
.icon-set {
  border-radius: var(--corner-radius-8);
}

.icon-set .class-11 {
  height: 80px !important;
  position: relative !important;
  width: 80px !important;
}

.icon-set .class-12 {
  height: 48px !important;
  position: relative !important;
  width: 48px !important;
}

.icon-set .class-13 {
  height: 40px !important;
  position: relative !important;
  width: 40px !important;
}

.icon-set .class-14 {
  height: 32px !important;
  position: relative !important;
  width: 32px !important;
}

.icon-set .class-15 {
  height: 28px !important;
  position: relative !important;
  width: 28px !important;
}

.icon-set .class-16 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.icon-set .class-17 {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.icon-set .weight-duotone-5 {
  height: 16px !important;
  position: relative !important;
  width: 16px !important;
}

.icon-set .badge {
  align-items: center;
  border-radius: var(--corner-radius-80);
  display: flex;
  height: var(--icon-size-16-duplicate);
  position: absolute;
  width: var(--icon-size-16-duplicate);
}

.icon-set .dot {
  align-self: stretch !important;
  flex: 1 !important;
  flex-grow: 1 !important;
  position: relative !important;
}

.icon-set.zero {
  display: var(--show-icon-show-icon);
  height: 16px;
  width: 16px;
}

.icon-set.thirty-two {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.BG-true {
  background-color: var(--themes-black-5);
  padding: var(--spacing-4);
}

.icon-set.forty {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.eighty {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.twenty {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.sixteen {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.forty-eight {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.twenty-four {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.twenty-eight {
  align-items: center;
  display: var(--show-icon-show-icon, inline-flex);
  justify-content: center;
  position: relative;
}

.icon-set.BG-true .badge {
  justify-content: center;
}

.icon-set.BG-false.twenty-four .badge {
  left: 10px;
  top: -6px;
}

.icon-set.forty-eight.BG-true .badge {
  left: 30px;
  top: 2px;
}

.icon-set.sixteen.BG-true .badge {
  left: 10px;
  top: -6px;
}

.icon-set.eighty.BG-true .badge {
  left: 56px;
  top: 8px;
}

.icon-set.BG-true.twenty .badge {
  left: 12px;
  top: -4px;
}

.icon-set.BG-true.forty .badge {
  left: 26px;
  top: 2px;
}

.icon-set.BG-false.forty .badge {
  left: 22px;
  top: -2px;
}

.icon-set.BG-false.thirty-two .badge {
  left: 16px;
  top: -4px;
}

.icon-set.forty-eight.BG-false .badge {
  left: 26px;
  top: -2px;
}

.icon-set.BG-true.thirty-two .badge {
  left: 20px;
  top: 0;
}

.icon-set.BG-false.eighty .badge {
  left: 52px;
  top: 4px;
}

.icon-set.BG-false.sixteen .badge {
  left: 6px;
  top: -10px;
}

.icon-set.BG-false.twenty .badge {
  left: 8px;
  top: -8px;
}

.icon-set.BG-false.twenty-eight .badge {
  left: 12px;
  top: -4px;
}

.icon-set.twenty-eight.BG-true .badge {
  left: 16px;
  top: 0;
}

.icon-set.twenty-four.BG-true .badge {
  left: 14px;
  top: -2px;
}
</style>