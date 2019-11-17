<template>
  <article id='about'>
    <site-header></site-header>
    <section id='about-summary'>
      <container size='small'>
        <p>Hi, I'm Trevor. I love creating websites with my wife, Lia Eyre, and building cool things on the web. I'm especially passionate about user experience and believe that every website should be simple and enjoyable to use.</p>
        <p>Take a look at some of my work below.</p>
      </container>
    </section>
    <section id='projects'>
      <header>
        <h1>Projects</h1>
      </header>
      <container size='large'>
        <project-summary id='projects-43re'
          title='Better Homes and Gardens Real Estate 43 Degrees North'
          href='https://www.43re.com'
          :actions="[{href: 'https://www.43re.com', text: 'Check it out'}]"
        >
          <p>Full site redesign and custom SquareSpace template for a real estate brokerage in Boise, Idaho.</p>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/43re-phone.png'>
              <img slot='tablet-content' src='/img/43re-tablet.png'>
              <img slot='desktop-content' src='/img/43re-desktop.png'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-forthelove'
          title='For the Love'
          href='http://fortheloveblog.com'
          :actions="[{href: 'http://fortheloveblog.com', text: 'Check it out'}]"
        >
          <p>Full site redesign and custom WordPress template for a fashion blog in San Francisco, California.</p>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/forthelove-phone.png'>
              <img slot='tablet-content' src='/img/forthelove-tablet.png'>
              <img slot='desktop-content' src='/img/forthelove-desktop.png'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-oldscpa'
          title='Jack W Olds &amp; Company, LLP'
          href='http://www.oldscpa.com'
          :actions="[{href: 'http://www.oldscpa.com', text: 'Check it out'}]"
        >
          <p>Logo design and site customization for a CPA firm in Portland, Oregon.</p>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/oldscpa-phone.jpg'>
              <img slot='tablet-content' src='/img/oldscpa-tablet.jpg'>
              <img slot='desktop-content' src='/img/oldscpa-desktop.jpg'>
            </device-group>
          </div>
        </project-summary>
        <button-group align='center'>
          <te-button theme='primary'
            href='/portfolio'
            internal
          >
            View more projects
          </te-button>
        </button-group>
      </container>
    </section>
    <section id='lab'>
      <header>
        <h1>Code experiments</h1>
      </header>
      <container size='large'>
        <experiment-group>
          <grid-cell class='experiment-container'
            v-for='experiment in experiments'
            :key='experiment.id'
          >
            <experiment :experiment='experiment'></experiment>
          </grid-cell>
        </experiment-group>
        <button-group class='experiment-actions' align='center'>
          <te-button theme='primary'
            href='/lab'
            internal
          >
            View more experiments
          </te-button>
        </button-group>
      </container>
    </section>
    <section id='services'>
      <header>
        <h1>How can I help?</h1>
      </header>
      <container size='small'>
        <p>Whether you need a brand new website, or help updating an existing one, I've got you covered. Below are some services I can provide.</p>
        <div class='services-list'>
          <ul>
            <li>Website design</li>
            <li>WordPress setup</li>
            <li>Custom WordPress template</li>
            <li>Branding and logo design</li>
          </ul>
          <ul>
            <li>Graphic design</li>
            <li>Host and domain setup</li>
            <li>Google Analytics</li>
            <li>Database design</li>
          </ul>
        </div>
        <p>Drop me a line with a few details of your project, and we can start putting together a plan.</p>
      </container>
    </section>
    <section id='contact'>
      <header>
        <h1>Contact</h1>
      </header>
      <container size='small'>
        <p class='services-actions'>
          <a class='services-action'
            href='mailto:trevoreyre@gmail.com'
            target='_blank'
          >
            <icon-email></icon-email>
            <span>trevoreyre&commat;gmail.com</span>
          </a>
        </p>
        <p class='services-actions'>
          <a class='services-action'
            href='https://github.com/TrevorEyre'
            target='_blank'
          >
            <icon-github></icon-github>
            <span>GitHub</span>
          </a>
          <a class='services-action'
            href='https://codepen.io/TrevorEyre'
            target='_blank'
          >
            <icon-codepen></icon-codepen>
            <span>Codepen</span>
          </a>
          <a class='services-action'
            href='https://www.linkedin.com/in/trevoreyre'
            target='_blank'
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
  import analytics from '~/common/analytics'
  import pens from '~/common/pens'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import ContactForm from '~/components/ContactForm'
  import Container from '~/components/Container'
  import Device from '~/components/Device'
  import DeviceGroup from '~/components/DeviceGroup'
  import Experiment from '~/components/Experiment'
  import ExperimentGroup from '~/components/ExperimentGroup'
  import GridCell from '~/components/GridCell'
  import IconCodepen from '~/components/icons/IconCodepen'
  import IconEmail from '~/components/icons/IconEmail'
  import IconGithub from '~/components/icons/IconGithub'
  import IconLinkedin from '~/components/icons/IconLinkedin'
  import ProjectSummary from '~/components/ProjectSummary'
  import SiteHeader from '~/components/SiteHeader'

  export default {
    components: {
      'te-button': Button,
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
      ProjectSummary,
      SiteHeader
    },
    methods: {
      track: analytics.track
    },
    computed: {
      experiments () {
        return pens.slice(0, 3)
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

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
</style>
