<template>
  <article id="about">
    <site-header></site-header>
    <section id="about-summary" class="about-summary">
      <div>
        <p>
          I'm Trevor. I love everything front-end. I especially enjoy developing
          design systems and component libraries to deliver consistent
          experiences across applications.
        </p>
        <p>
          I also live in an RV and travel full time with my wife, daughter, and
          2 dogs (you can follow along at
          <a
            href="https://www.instagram.com/llamallamaadventure/"
            target="_blank"
          >
            @llamallamaadventure</a
          >). When I'm not coding, you might find me hiking or visiting a local
          brewery somewhere in the US.
        </p>
      </div>
      <img src="/img/trevor-eyre.jpg" />
    </section>
    <resume-body class="resume"></resume-body>
    <section id="contact">
      <header>
        <h2 class="h1">Contact</h2>
      </header>
      <container size="small">
        <p class="services-actions">
          <a class="services-action" href="tel:+12086316741" target="_blank">
            <icon-phone></icon-phone>
            <span>208.631.6741</span>
          </a>
          <a
            class="services-action"
            href="mailto:trevoreyre@gmail.com"
            target="_blank"
          >
            <icon-email></icon-email>
            <span>trevoreyre&commat;gmail.com</span>
          </a>
          <a
            class="services-action"
            href="https://github.com/TrevorEyre"
            target="_blank"
          >
            <icon-github></icon-github>
            <span>GitHub</span>
          </a>
          <a
            class="services-action"
            href="https://www.linkedin.com/in/trevoreyre"
            target="_blank"
          >
            <icon-linkedin></icon-linkedin>
            <span>LinkedIn</span>
          </a>
        </p>
        <contact-form></contact-form>
      </container>
    </section>
  </article>
</template>

<script>
import analytics from "~/common/analytics";
import pens from "~/common/pens";
import Button from "~/components/Button";
import ButtonGroup from "~/components/ButtonGroup";
import ContactForm from "~/components/ContactForm";
import Container from "~/components/Container";
import Device from "~/components/Device";
import DeviceGroup from "~/components/DeviceGroup";
import Experiment from "~/components/Experiment";
import ExperimentGroup from "~/components/ExperimentGroup";
import GridCell from "~/components/GridCell";
import IconCodepen from "~/components/icons/IconCodepen";
import IconEmail from "~/components/icons/IconEmail";
import IconGithub from "~/components/icons/IconGithub";
import IconLinkedin from "~/components/icons/IconLinkedin";
import IconPhone from "~/components/icons/IconPhone";
import ProjectSummary from "~/components/ProjectSummary";
import ResumeBody from "~/components/ResumeBody";
import SiteHeader from "~/components/SiteHeader";

export default {
  components: {
    "te-button": Button,
    ButtonGroup,
    ContactForm,
    Container,
    Device,
    DeviceGroup,
    Experiment,
    ExperimentGroup,
    GridCell,
    IconCodepen,
    IconEmail,
    IconGithub,
    IconLinkedin,
    IconPhone,
    ProjectSummary,
    ResumeBody,
    SiteHeader
  },
  methods: {
    track: analytics.track
  },
  computed: {
    experiments() {
      return pens.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~common/variables";
@import "~common/mixins";

.about-summary {
  max-width: $breakpoint-tablet;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: $spacing-l;
  @include breakpoint-tablet() {
    flex-flow: row wrap;
  }
}

.about-summary > div {
  flex: 1;
}

.about-summary > img {
  width: 300px;
  max-width: 100%;
  border-radius: 999px;
  @include breakpoint-desktop() {
    margin-right: -$spacing-xxl;
  }
}

.about-summary p {
  margin-top: 0;
}

.about-summary p:last-child {
  margin-bottom: 0;
}

.resume {
  margin: 0 0 $spacing-xl;
}

.experiment-container {
  max-width: $experiment-width;
}

.experiment-actions {
  margin-top: $spacing-m !important;
  @include breakpoint-desktop() {
    margin-top: $spacing-l !important;
  }
}

.services-actions {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: $spacing-l;
}

.services-action {
  display: flex;
  align-items: center;
  gap: $spacing-s;
  color: $text-color-primary;
  text-decoration: none;
}

.services-action svg {
  fill: $text-color-disabled;
}

a.services-action:hover {
  text-decoration: underline;
}
</style>
