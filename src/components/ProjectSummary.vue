<template>
  <section class="project-summary">
    <container size="small" class="description">
      <h2 class="title">
        <span v-if="href">
          <a :href="href" :target="href.startsWith('/') ? null : '_blank'">
            {{ title }}
          </a>
        </span>
        <span v-else>
          {{ title }}
        </span>
      </h2>
      <slot></slot>
      <button-group class="actions">
        <a
          class="action"
          v-for="action in actions"
          :key="action.href"
          :href="action.href"
          :target="action.href.startsWith('/') ? null : '_blank'"
        >
          {{ action.text }}
        </a>
      </button-group>
    </container>
    <div class="image">
      <slot name="image"></slot>
    </div>
  </section>
</template>

<script>
import ButtonGroup from "~/components/ButtonGroup";
import Container from "~/components/Container";
import DeviceGroup from "~/components/DeviceGroup";

export default {
  name: "project-summary",
  components: {
    ButtonGroup,
    Container,
    DeviceGroup
  },
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    href: {
      type: String,
      default: "",
      required: false
    },
    actions: {
      type: Array,
      default: () => [],
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~common/variables";
@import "~common/mixins";

.project-summary {
  display: flex;
  flex-direction: column;
  @include breakpoint-tablet() {
    flex-direction: row;
    align-items: center;
  }
}

.title,
.title a {
  text-decoration: none;
}

.title a:hover {
  text-decoration: underline;
}

.description {
  flex: 1;
}

.image {
  min-height: 250px;
  flex: 2;
}

.project-summary > *:first-child {
  margin-bottom: $spacing-l;
  @include breakpoint-tablet() {
    margin-bottom: 0;
    margin-right: $spacing-xl;
  }
}

.project-logo {
  width: auto;
  max-width: 100%;
}
</style>
