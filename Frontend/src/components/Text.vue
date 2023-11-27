<template>
  <div :class="['text', direction, number, className]">
    <div v-if="['five', 'four', 'seven', 'six', 'three', 'two'].includes(number)" class="text-wrapper">{{ text }}</div>

    <div v-if="['five', 'four', 'seven', 'six', 'three', 'two'].includes(number)" class="div">{{ text }}</div>

    <div v-if="['five', 'four', 'seven', 'six', 'three'].includes(number)" class="text-wrapper-2">{{ text }}</div>

    <div v-if="['five', 'four', 'seven', 'six'].includes(number)" class="text-wrapper-3">{{ text }}</div>

    <div v-if="['five', 'seven', 'six'].includes(number)" class="text-wrapper-4">{{ text }}</div>

    <div v-if="['seven', 'six'].includes(number)" class="text-wrapper-5">{{ text }}</div>

    <div v-if="number === 'seven'" class="text-wrapper-6">{{ text }}</div>

    <div v-if="number === 'one'">
      <div v-if="hasDiv" :class="['text-wrapper-7', divClassName]">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Text",
  props: {
    direction: {
      type: String,
      validator: function (value) {
        return ["vertical", "horizontal"].indexOf(value) !== -1;
      },
    },
    number: {
      type: String,
      validator: function (value) {
        return ["seven", "two", "three", "four", "one", "five", "six"].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: "Text",
    },
    hasDiv: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.text {
  border-radius: var(--corner-radius-8);
  position: relative;
}

.text .text-wrapper {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  margin-top: -1px;
  position: relative;
}

.text .div {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-2 {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-3 {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-4 {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-5 {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-6 {
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  position: relative;
}

.text .text-wrapper-7 {
  align-self: stretch;
  color: var(--themes-black-100);
  font-family: var(--14-regular-font-family);
  font-size: var(--14-regular-font-size);
  font-style: var(--14-regular-font-style);
  font-weight: var(--14-regular-font-weight);
  letter-spacing: var(--14-regular-letter-spacing);
  line-height: var(--14-regular-line-height);
  margin-top: -1px;
  position: relative;
}

.text.horizontal {
  align-items: center;
  display: var(--show-text-show-text, flex);
  flex-wrap: wrap;
  gap: 0px 0px;
}

.text.vertical {
  align-items: flex-start;
  display: var(--show-text-show-text, inline-flex);
  flex-direction: column;
  justify-content: center;
}

.text.three.horizontal {
  width: 87px;
}

.text.two.horizontal {
  width: 58px;
}

.text.horizontal.five {
  width: 145px;
}

.text.horizontal.four {
  width: 116px;
}

.text.horizontal.seven {
  width: 203px;
}

.text.six.horizontal {
  width: 174px;
}

.text.vertical .text-wrapper {
  align-self: stretch;
}

.text.horizontal .text-wrapper {
  flex: 1;
}

.text.vertical .div {
  align-self: stretch;
}

.text.horizontal .div {
  flex: 1;
  margin-top: -1px;
}

.text.vertical .text-wrapper-2 {
  align-self: stretch;
}

.text.horizontal .text-wrapper-2 {
  flex: 1;
  margin-top: -1px;
}

.text.vertical .text-wrapper-3 {
  align-self: stretch;
}

.text.horizontal .text-wrapper-3 {
  flex: 1;
  margin-top: -1px;
}

.text.vertical .text-wrapper-4 {
  align-self: stretch;
}

.text.horizontal .text-wrapper-4 {
  flex: 1;
  margin-top: -1px;
}

.text.vertical .text-wrapper-5 {
  align-self: stretch;
}

.text.horizontal .text-wrapper-5 {
  flex: 1;
  margin-top: -1px;
}

.text.vertical .text-wrapper-6 {
  align-self: stretch;
}

.text.horizontal .text-wrapper-6 {
  flex: 1;
  margin-top: -1px;
}
</style>
