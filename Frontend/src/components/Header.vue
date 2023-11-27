<template>
  <div :class="['header', type, className]">
    <div v-if="type === 'a'">
      <div v-if="hasIconBreadcrumb" class="icon-breadcrumb">
        <Group
          v-if="visible"
          :buttonIconSetIcon3="Sidebar"
          :buttonIconSetIcon4="Star"
          class="group-instance"
          direction="horizontal"
          number="two"
        />

        <Group
          :buttonTextDivClassName="breadcrumb"
          :buttonTextDivClassNameOverride="'group-2'"
          :buttonTextHasDiv="groupButtonTextHasDiv"
          buttonTextText="Dashboards"
          buttonTextText1="Default"
          buttonType="text"
          buttonType1="text"
          class="group-instance"
          direction="horizontal"
          number="three"
          :override="group"
        />
      </div>
      <div v-if="hasFrame" class="frame">
        <Search
          :iconTextIconSetIcon="searchIconTextIconSetIcon"
          property="gray"
          :textHasDiv="searchTextHasDiv"
        />
        <Group
          :buttonIconSetIcon="override"
          :buttonIconSetIcon1="groupButtonIconSetIcon1"
          :buttonIconSetIcon2="groupButtonIconSetIcon"
          :buttonIconSetIcon5="Sidebar"
          class="group-instance"
          direction="horizontal"
          number="four"
          :visible="groupVisible"
        />
      </div>
    </div>

    <div v-if="type === 'b'" class="logo">
      <div class="snowui-logo">
        <SnowuiLogo1 class="snowui-logo-1" />
        <SnowuiLogo class="snowui-logo-instance" />
      </div>
    </div>

    <Group
      v-if="type === 'b'"
      :buttonTextDivClassName1="'group-2'"
      :buttonTextDivClassName2="'group-2'"
      :buttonTextDivClassName3="'group-2'"
      :buttonTextDivClassName4="'group-2'"
      :buttonTextDivClassName5="'group-2'"
      buttonTextText2="Product"
      buttonTextText3="Solutions"
      buttonTextText4="Resources"
      buttonTextText5="Download"
      buttonTextText6="Pricing"
      buttonType2="text"
      buttonType3="text"
      buttonType4="text"
      buttonType5="text"
      buttonType6="text"
      class="group-3"
      direction="horizontal"
      number="five"
    />

    <Group
      v-if="type === 'b'"
      buttonStyle="gray"
      buttonStyle1="filled"
      :buttonTextDivClassName6="'group-2'"
      :buttonTextDivClassName7="'group-4'"
      buttonTextText7="Sign up"
      buttonTextText8="Sign in"
      buttonType7="text"
      buttonType8="text"
      class="group-5"
      direction="horizontal"
      number="two"
    />
  </div>
</template>

<script>
import Bell1 from "../icons/Bell1.vue";
import Search2 from "../icons/Search2.vue";
import Sidebar from "../icons/Sidebar/Sidebar.vue";
import SnowuiLogo from "../icons/SnowuiLogo.vue";
import SnowuiLogo1 from "../icons/SnowuiLogo1.vue";
import Star from "../icons/Star.vue";
import Sun1 from "../icons/Sun1.vue";
import WeightDuotone2 from "../icons/WeightDuotone2.vue";
import Group from "./Group.vue";
import Search from "./Search.vue";
import Text from "./Text.vue";

export default {
  name: "Header",
  components: {
    Bell1,
    Search2,
    Sidebar,
    SnowuiLogo,
    SnowuiLogo1,
    Star,
    Sun1,
    WeightDuotone2,
    Group,
    Search,
    Text,
  },
  props: {
    type: {
      type: String,
      validator: function (value) {
        return ["b", "a"].indexOf(value) !== -1;
      },
    },
    visible: {
      type: Boolean,
      default: true,
    },
    groupButtonTextHasDiv: {
      type: Boolean,
    },
    searchTextHasDiv: {
      type: Boolean,
    },
    groupVisible: {
      type: Boolean,
    },
    hasIconBreadcrumb: {
      type: Boolean,
      default: true,
    },
    hasFrame: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      searchIconTextIconSetIcon: <Search2 class="search-2" opacity="0.2" />,
      groupButtonIconSetIcon: <Bell1 class="icon-instance-node" />,
      override: <Sun1 class="icon-instance-node" />,
      groupButtonIconSetIcon1: <WeightDuotone2 class="icon-instance-node" />,
      group: (
        <Text
          class="group-instance"
          direction="vertical"
          divClassName="design-component-instance-node"
          number="one"
          text="/"
        />
      ),
    };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 948px;
}

.header .icon-breadcrumb {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}

.header .group-instance {
  flex: 0 0 auto !important;
}

.header .icon-instance-node {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.header .group-2 {
  text-align: center !important;
}

.header .breadcrumb {
  color: var(--themes-black-40) !important;
  text-align: center !important;
}

.header .frame {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: var(--spacing-20);
  position: relative;
}

.header .logo {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.header .snowui-logo {
  height: 28px;
  position: relative;
  width: 105px;
}

.header .snowui-logo-1 {
  height: 12px !important;
  left: 34px !important;
  position: absolute !important;
  top: 8px !important;
  width: 71px !important;
}

.header .snowui-logo-instance {
  height: 28px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 28px !important;
}

.header .group-3 {
  flex: 0 0 auto !important;
  gap: var(--spacing-16) !important;
}

.header .group-4 {
  color: var(--themes-white-100) !important;
  text-align: center !important;
}

.header .group-5 {
  display: flex !important;
  flex: 1 !important;
  flex-grow: 1 !important;
  justify-content: flex-end !important;
}

.header .design-component-instance-node {
  color: var(--themes-black-20) !important;
}

.header .search-2 {
  height: 16px !important;
  position: relative !important;
  width: 16px !important;
}

.header.a {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--themes-black-10);
  padding: var(--spacing-20) var(--spacing-28) var(--spacing-20) var(--spacing-28);
}

.header.b {
  align-items: flex-start;
  padding: var(--spacing-16) var(--spacing-28) var(--spacing-16) var(--spacing-28);
}
</style>