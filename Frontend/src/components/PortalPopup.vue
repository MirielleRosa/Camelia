<template>
  <div>
    <Teleport to="body">
      <div
        class="flex flex-col fixed inset-0 portalPopupOverlay"
        :style="popupStyle"
        @click="onOverlayClick"
      >
        <div ref="relContainerRef" :style="relativeStyle">
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script>
  import { defineComponent, ref, Teleport } from 'vue'


  export default defineComponent({
      name: 'PortalPopup',
      data() {
          return {
              relContainerRef: "",
              relativeStyle: { type: "static" }
          }
      },
      props: {
          isOpen: { type: Boolean, default: false },
          overlayColor: { type: String },
          placement: { type: String, default: "Centered" },
          zIndex: { type: Number, default: 100 },
          left: { type: String, default: 0 },
          right: { type: String, default: 0 },
          top: { type: String, default: 0 },
          bottom: { type: String, default: 0 },
          onOutsideClick: { type: Function },
          relativeLayerRef: { type: Function },
    },
      mounted() {
        this.setPosition();
        window.addEventListener("resize", this.setPosition);
        window.addEventListener("scroll", this.setPosition, true);
      },
      unmounted() {
        window.removeEventListener("resize", this.setPosition);
        window.removeEventListener("scroll", this.setPosition, true);
      },
      methods: {
          onOverlayClick(e) {
            if (this.onOutsideClick && e.target.classList.contains("portalPopupOverlay")) {
              this.onOutsideClick();
            }
            e.stopPropagation();
          },
          setPosition() {
              const relativeItem = this.relativeLayerRef?.getBoundingClientRect();
              const containerItem = this.$refs.relContainerRef.getBoundingClientRect();
              const style  = {};
              if (relativeItem && containerItem) {
                  const {
                      x: relativeX,
                      y: relativeY,
                      width: relativeW,
                      height: relativeH,
                  } = relativeItem;
                  const { width: containerW, height: containerH } = containerItem;
                  style.position = "absolute";
                  switch (this.placement) {
                    case "Top left":
                      style.top =
                        (relativeY - containerH - parseInt(this.top)).toString() + "px";
                      style.left = (relativeX + parseInt(this.left)).toString() + "px";
                      break;
                    case "Top right":
                      style.top =
                        (relativeY - containerH - parseInt(this.top)).toString() + "px";
                      style.left =
                        (
                          relativeX +
                          relativeW -
                          containerW -
                          parseInt(this.right)
                        ).toString() + "px";
                      break;
                    case "Bottom left":
                      style.top =
                        (relativeY + relativeH + parseInt(this.bottom)).toString() + "px";
                      style.left = (relativeX + parseInt(this.left)).toString() + "px";
                      break;
                    case "Bottom right":
                      style.top =
                        (relativeY + relativeH + parseInt(this.bottom)).toString() + "px";
                      style.left =
                        (
                          relativeX +
                          relativeW -
                          containerW -
                          parseInt(this.right)
                        ).toString() + "px";
                      break;
                  }
                  this.relativeStyle = style;
              } else {
                  style.maxWidth = "90%";
                  style.maxHeight = "90%";
                  this.relativeStyle = style;
              }
          }
      },
      computed: {
          popupStyle()  {
              const style = {};
              style.zIndex = 100;
              if (this.overlayColor) {
                  style.backgroundColor = this.overlayColor;
              }
              if (!this.relativeLayerRef?.current) {
                  switch (this.placement) {
                      case "Centered":
                          style.alignItems = "center";
                          style.justifyContent = "center";
                          break;
                      case "Top left":
                          style.alignItems = "flex-start";
                          break;
                      case "Top center":
                          style.alignItems = "center";
                          break;
                      case "Top right":
                          style.alignItems = "flex-end";
                          break;
                      case "Bottom left":
                          style.alignItems = "flex-start";
                          style.justifyContent = "flex-end";
                          break;
                      case "Bottom center":
                          style.alignItems = "center";
                          style.justifyContent = "flex-end";
                          break;
                      case "Bottom right":
                          style.alignItems = "flex-end";
                          style.justifyContent = "flex-end";
                          break;
                  }
              }
              return style;
          }
      }
  })
</script>
