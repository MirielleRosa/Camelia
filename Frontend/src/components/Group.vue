<template>
  <div :class="['group', `number-${number}`, `direction-6-${direction}`, className]">
    <template v-if="number === 'four'">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon1"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon2"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <template v-if="visible">
        <Button
          class="button-instance"
          :iconSetIcon="buttonIconSetIcon5"
          size="small"
          stateProp="default"
          style="borderless"
          type="icon"
        />
      </template>
    </template>

    <template v-if="['one', 'seven', 'six'].includes(number)">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
    </template>

    <template v-if="['seven', 'six'].includes(number)">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
    </template>

    <template v-if="number === 'seven'">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        type="icon"
      />
    </template>

    <template v-if="['five', 'three'].includes(number)">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="number === 'five' ? buttonTextDivClassName1 : buttonTextDivClassName"
        :textText="number === 'five' ? buttonTextText2 : buttonTextText"
        :type="number === 'five' ? buttonType2 : buttonType"
      />
    </template>

    <template v-if="number === 'five'">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="buttonTextDivClassName2"
        :textText="buttonTextText3"
        :type="buttonType3"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="buttonTextDivClassName3"
        :textText="buttonTextText4"
        :type="buttonType4"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="buttonTextDivClassName4"
        :textText="buttonTextText5"
        :type="buttonType5"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="buttonTextDivClassName5"
        :textText="buttonTextText6"
        :type="buttonType6"
      />
    </template>

    <template v-if="number === 'three'">
      <template v-if="override">
        <component :is="override" />
      </template>
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon"
        size="small"
        stateProp="default"
        style="borderless"
        :textDivClassName="buttonTextDivClassNameOverride"
        :textHasDiv="buttonTextHasDiv"
        :textText="buttonTextText1"
        :type="buttonType1"
      />
    </template>

    <template v-if="number === 'two'">
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon3"
        size="small"
        stateProp="default"
        :style="buttonStyle"
        :textDivClassName="buttonTextDivClassName6"
        :textText="buttonTextText7"
        :type="buttonType7"
      />
      <Button
        class="button-instance"
        :iconSetIcon="buttonIconSetIcon4"
        size="small"
        stateProp="default"
        :style="buttonStyle1"
        :textDivClassName="buttonTextDivClassName7"
        :textText="buttonTextText8"
        :type="buttonType8"
      />
    </template>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Group",
  components: {
    Button,
  },
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
        return ["seven", "zero", "two", "three", "four", "one", "five", "six"].indexOf(value) !== -1;
      },
    },
    className: String,
    buttonTextText: String,
    buttonType: String,
    buttonTextHasDiv: Boolean,
    buttonType1: String,
    visible: Boolean,
    buttonTextText1: String,
    buttonTextText2: String,
    buttonType2: String,
    buttonTextText3: String,
    buttonType3: String,
    buttonTextText4: String,
    buttonType4: String,
    buttonTextText5: String,
    buttonType5: String,
    buttonTextText6: String,
    buttonType6: String,
    buttonTextText7: String,
    buttonType7: String,
    buttonStyle: String,
    buttonTextText8: String,
    buttonType8: String,
    buttonStyle1: String,
    buttonTextDivClassName: String,
    buttonTextDivClassNameOverride: String,
    buttonTextDivClassName1: String,
    buttonTextDivClassName2: String,
    buttonTextDivClassName3: String,
    buttonTextDivClassName4: String,
    buttonTextDivClassName5: String,
    buttonTextDivClassName6: String,
    buttonTextDivClassName7: String,
    buttonIconSetIcon: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
    buttonIconSetIcon1: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
    buttonIconSetIcon2: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
    buttonIconSetIcon3: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
    buttonIconSetIcon4: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
    buttonIconSetIcon5: {
      type: Object,
      default: () => ({
        render() {
          return (
            <Fourleafclover96
              class="fourleafclover-96"
              color="#1C1C1C"
            />
          );
        },
      }),
    },
  },
};
</script>

<style>
.group {
  border-radius: var(--corner-radius-8);
  gap: var(--spacing-8-duplicate);
}

.group .button-instance {
  flex: 0 0 auto !important;
}

.group .fourleafclover-96 {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.group.number-six {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-two {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-five {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-one {
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  position: relative;
}

.group.number-three {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-zero {
  height: 28px;
  width: 28px;
}

.group.direction-6-vertical {
  flex-direction: column;
  justify-content: flex-end;
}

.group.number-seven {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-four {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.group.number-three.direction-6-horizontal {
  flex-wrap: wrap;
}

.group.number-two.direction-6-horizontal {
  flex-wrap: wrap;
}

.group.direction-6-horizontal.number-five {
  flex-wrap: wrap;
}

.group.direction-6-horizontal.number-four {
  flex-wrap: wrap;
}

.group.direction-6-horizontal.number-seven {
  flex-wrap: wrap;
}

.group.number-six.direction-6-horizontal {
  flex-wrap: wrap;
}
</style>