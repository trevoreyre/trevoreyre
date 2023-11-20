<template>
  <div class="device-group">
    <div class="phone-container">
      <device type="phone">
        <slot name="phone-content"></slot>
      </device>
    </div>
    <div class="tablet-container">
      <device type="tablet">
        <slot name="tablet-content"></slot>
      </device>
    </div>
    <div class="desktop-container">
      <device type="desktop">
        <slot name="desktop-content"></slot>
      </device>
    </div>
  </div>
</template>

<script>
import Device from "~/components/Device";

export default {
  name: "device-group",
  components: {
    Device
  }
};
</script>

<style lang="scss" scoped>
@import "~common/mixins";

.device-group {
  width: 100%;
  position: relative;
}

.device-group::after {
  content: "";
  display: block;
  padding-top: 62.75%;
}

.device-group .phone-container,
.device-group .tablet-container,
.device-group .desktop-container {
  position: absolute;
  bottom: 0;
}

.device-group .phone-container {
  left: 0;
  max-width: 15%;
  z-index: 2;
}

.device-group .tablet-container {
  right: 0;
  max-width: 30%;
  z-index: 1;
}

.device-group .desktop-container {
  left: 0;
  right: 0;
  margin: 0 5% 0;
}

.device-group .device {
  border-radius: 12px;
  @include breakpoint-phone() {
    border-radius: 1vw;
  }
}
</style>
