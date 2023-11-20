<template>
  <div id="app">
    <nav-button href="/" open></nav-button>
    <page-header title="Projects" theme="primary" size="medium"> </page-header>
    <section>
      <container size="large">
        <project-summary
          id="projects-touche-photography"
          title="Touché Photography"
          href="https://touchephotography.com"
          :actions="[
            { href: 'https://touchephotography.com', text: 'Check it out' },
            {
              href: 'https://github.com/trevoreyre/touche-photography',
              text: 'View the code'
            }
          ]"
        >
          <p>
            Fully custom website and e-commerce integration for underwater
            photographer in Portland, Oregon.
          </p>
          <div slot="image">
            <device-group>
              <img
                slot="phone-content"
                class="image-phone"
                src="/img/touche-phone.jpg"
                alt=""
                width="750"
                height="1334"
              />
              <img
                slot="tablet-content"
                class="image-tablet"
                src="/img/touche-tablet.jpg"
                alt=""
                width="1536"
                height="2048"
              />
              <img
                slot="desktop-content"
                class="image-desktop"
                src="/img/touche-desktop.jpg"
                alt=""
                width="1600"
                height="900"
              />
            </device-group>
          </div>
        </project-summary>
        <project-summary
          id="projects-43re"
          title="Better Homes and Gardens Real Estate 43 Degrees North"
          href="https://www.43re.com"
          :actions="[{ href: 'https://www.43re.com', text: 'Check it out' }]"
        >
          <p>
            Full site redesign and custom SquareSpace template for a real estate
            brokerage in Boise, Idaho.
          </p>
          <div slot="image">
            <device-group>
              <img
                slot="phone-content"
                class="image-phone"
                alt=""
                src="/img/43re-phone.png"
                width="750"
                height="1334"
              />
              <img
                slot="tablet-content"
                class="image-tablet"
                alt=""
                src="/img/43re-tablet.png"
                width="1536"
                height="2048"
              />
              <img
                slot="desktop-content"
                class="image-desktop"
                alt=""
                src="/img/43re-desktop.png"
                width="1600"
                height="900"
              />
            </device-group>
          </div>
        </project-summary>
      </container>
    </section>
  </div>
</template>

<script>
import analytics from "~/common/analytics";
import Button from "~/components/Button";
import ButtonGroup from "~/components/ButtonGroup";
import Container from "~/components/Container";
import Device from "~/components/Device";
import DeviceGroup from "~/components/DeviceGroup";
import NavButton from "~/components/NavButton";
import PageHeader from "~/components/PageHeader";
import ProjectSummary from "~/components/ProjectSummary";

export default {
  name: "app",
  components: {
    "te-button": Button,
    ButtonGroup,
    Container,
    Device,
    DeviceGroup,
    NavButton,
    PageHeader,
    ProjectSummary
  },
  methods: {
    track: analytics.track
  }
};
</script>

<style lang="scss" scoped>
@import "~common/variables";

section {
  margin-bottom: $spacing-xxl;
}

.image-phone {
  aspect-ratio: 56 / 100;
}

.image-tablet {
  aspect-ratio: 3 / 4;
}

.image-desktop {
  aspect-ratio: 16 / 9;
}
</style>
