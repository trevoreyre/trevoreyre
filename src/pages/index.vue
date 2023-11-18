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
    <div class="resume">
      <section class="experience">
        <header>
          <h3>Experience</h3>
        </header>
        <div class="content">
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>Senior Front-end Software Engineer</h3>
                <p class="date-range">Mar 2022 - Nov 2023</p>
              </div>
              <p class="location">Sensei - Santa Monica, CA</p>
            </div>
            <div class="entry-body">
              <p class="entry-description">
                Lead front-end engineer for multiple internal and
                customer-facing applications, working remotely full time.
              </p>
              <ul class="entry-details">
                <li>
                  Architected front-end design system and component library,
                  built in React
                </li>
                <li>
                  Involved in architecture and design of REST and GraphQL APIs,
                  built in C# and Python
                </li>
                <li>
                  Built and released multiple features in customer-facing guest
                  portal for a luxury resort and wellness retreat center
                </li>
                <li>
                  Skills used: React, TypeScript, GraphQL, C#, Python
                </li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>Full Stack Software Engineer</h3>
                <p class="date-range">Jan 2020 - Mar 2022</p>
              </div>
              <p class="location">Ephesoft - Irvine, CA</p>
            </div>
            <div class="entry-body">
              <p class="entry-description">
                Full stack development on Semantik Invoice product, working
                remotely full time.
              </p>
              <ul class="entry-details">
                <li>
                  Utilized Amazon Web Services, machine learning, and OCR to
                  extract structured data from invoices
                </li>
                <li>
                  Involved in architecture decisions in design, front-end, and
                  back-end
                </li>
                <li>
                  Skills used: AWS, Angular, Node, TypeScript
                </li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>Senior Front-end Software Engineer</h3>
                <p class="date-range">Mar 2019 - Jan 2020</p>
              </div>
              <p class="location">Vynyl, LLC - Boise, ID</p>
            </div>
            <div class="entry-body">
              <p class="entry-description">
                Front-end software engineer for client product development.
              </p>
              <ul class="entry-details">
                <li>
                  Built new UI component library in React for major client in
                  the healthcare industry
                </li>
                <li>
                  Lead development for multiple client projects simultaneously
                  under tight deadlines
                </li>
                <li>
                  Skills used: React, JavaScript, HTML, CSS, Craft CMS, Node, C#
                </li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>Software Engineer</h3>
                <p class="date-range">Oct 2016 - Mar 2019</p>
              </div>
              <p class="location">Healthwise - Boise, ID</p>
            </div>
            <div class="entry-body">
              <p class="entry-description">
                Full stack software development for client-facing content
                management system and administrative tools.
              </p>
              <ul class="entry-details">
                <li>
                  Built and open sourced React component library used in
                  multiple client-facing and internal applications -
                  <strong>github.com/healthwise/healthwise-ui</strong>
                </li>
                <li>
                  Helped standardize front-end development tools and guidelines
                  as member of Front-end Core Team
                </li>
                <li>
                  Skills used: React, JavaScript, Node, C#, HTML, CSS
                </li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>Freelance and open source</h3>
                <p class="date-range">Jan 2015 - Present</p>
              </div>
              <p class="location">Self</p>
            </div>
            <div class="entry-body">
              <p class="entry-description">
                Freelance and open source web development and design.
              </p>
              <ul class="entry-details">
                <li>
                  Built open source autocomplete component for JavaScript and
                  Vue - <strong>autocomplete.trevoreyre.com</strong>
                </li>
                <li>
                  Designed and built website for Better Homes and Gardens Real
                  Estate 43 Degrees North in Boise, ID -
                  <strong>www.43re.com</strong>
                </li>
                <li>
                  Designed and built website for Touché Photography, an
                  underwater photographer in Portland, OR -
                  <strong>touchephotography.com</strong>
                </li>
                <li>
                  Skills used: Vue, JavaScript, HTML, CSS, Docker, Figma, Node,
                  PHP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="education">
        <header>
          <h3>Education</h3>
        </header>
        <div class="content">
          <div class="entry">
            <div class="entry-header">
              <div class="row">
                <h3>BS in Computer Science</h3>
                <p class="date-range">Jan 2012 - Mar 2016</p>
              </div>
              <p class="location">Portland State University - Portland, OR</p>
            </div>
            <div class="entry-body">
              <ul class="entry-details">
                <li>Graduated cum laude</li>
                <li>President's List for 2 terms, Dean's List for 4 terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
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
        </p>
        <p class="services-actions">
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
            href="https://codepen.io/TrevorEyre"
            target="_blank"
          >
            <icon-codepen></icon-codepen>
            <span>CodePen</span>
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
  text-align: center;
}

.services-action {
  margin: 0 $spacing-l 0 0;
  display: inline-flex;
  align-items: center;
  color: $text-color-primary;
  text-decoration: none;
}

.services-action:last-child {
  margin-right: 0;
}

.services-action svg {
  fill: $text-color-disabled;
}

.services-action > *:not(:last-child) {
  margin-right: $spacing-s;
}

a.services-action:hover {
  text-decoration: underline;
}

.resume {
  margin: 0 0 $spacing-xl;
}

.resume > header {
  margin: 0 0 $spacing-l 0;
}

.resume .header-container {
  width: 100%;
  margin: 0 auto;
  padding: $spacing-xxl $spacing-l $spacing-l;
  display: flex;
  flex-flow: column nowrap;
  border-bottom: 2px solid $color-primary;
  @include breakpoint-tablet() {
    max-width: $breakpoint-tablet;
    flex-flow: row nowrap;
    align-items: flex-end;
  }
  @include breakpoint-desktop() {
    padding: $spacing-l;
  }
}

.resume .header-container h1 {
  color: $color-primary;
}

.resume .header-container h2,
.resume .header-container p {
  color: $text-color-primary;
}

.resume .header-container > .summary {
  flex: 2;
}

.resume .header-container > .details {
  flex: 1;
}

.resume .summary {
  text-align: left;
}

.resume .summary h1 {
  line-height: 1;
  margin: 0 0 $spacing-m 0;
}

.resume .summary h2 {
  line-height: 1;
  margin: 0;
}

.resume .details {
  margin-top: $spacing-l;
  color: $text-color-secondary-on-primary;
  text-align: left;
  @include breakpoint-tablet() {
    margin-top: 0;
    color: $text-color-primary-on-primary;
    text-align: right;
  }
}

.resume .details p {
  margin: 0 0 $spacing-s 0;
  line-height: 1;
}

.resume .details p:last-child {
  margin-bottom: 0;
}

.resume .details .website-link {
  display: none;
}

.resume section,
.resume section:last-of-type {
  max-width: $breakpoint-tablet;
  display: flex;
  flex-flow: column nowrap;
}

.resume section header {
  margin: 0 0 $spacing-l;
  width: 100%;
}

.resume section h3 {
  text-align: left;
  margin: 0;
  line-height: 1.35;
}

.resume section p {
  font-size: 1em;
  line-height: 1.35;
}

.resume .content {
  flex: 1;
}

.resume ul {
  margin: 0;
  padding: 0 0 0 1.1em;
}

.resume .skill-list {
  margin: 0 0 $spacing-s;
  padding: 0;
  height: 8em;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
}

.resume .skill-list li {
  margin-right: $spacing-m;
  line-height: 2;
}

.resume section header h3 {
  color: $color-primary;
}

.resume .row {
  @include breakpoint-tablet() {
    display: flex;
    align-items: flex-end;
  }
}

.resume .entry {
  margin: 0 0 $spacing-l;
}

.resume .entry:last-child {
  margin-bottom: 0;
}

.resume .entry-header h3 {
  margin-right: $spacing-m;
  flex: 1;
}

.resume .date-range {
  margin: $spacing-xs 0;
  color: $text-color-secondary;
  @include breakpoint-tablet() {
    margin: 0;
    color: $text-color-primary;
  }
}

.resume .location {
  margin: 0;
  color: $text-color-secondary;
}

.resume .entry-description {
  margin: $spacing-s 0;
}

.resume .entry-details {
  margin: $spacing-s 0 0 0;
}
</style>
