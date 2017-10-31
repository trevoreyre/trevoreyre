<template>
  <article id='about'>
    <site-header></site-header>
    <section id='about-summary'>
      <container size='small'>
        <p>Hi, I'm Trevor. I love creating websites with my wife, Lia Eyre, and building cool things on the web. We are especially passionate about user experience and believe that every website should be simple and enjoyable to use.</p>
        <p>Take a look at some of our work below.</p>
      </container>
    </section>
    <section id='projects'>
      <header>
        <h1>Projects</h1>
      </header>
      <container size='large'>
        <project-summary id='projects-forthelove'
          title='For the Love'>
          <p>Full site redesign and custom WordPress template for a fashion blog in San Francisco, California.</p>
          <button-group slot='actions'>
            <te-button theme='secondary'
              href='http://forthelove.blog'>
              Check it out
            </te-button>
          </button-group>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/gbo-phone.jpg'>
              <img slot='tablet-content' src='/img/gbo-tablet.jpg'>
              <img slot='desktop-content' src='/img/gbo-desktop.jpg'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-oldscpa'
          title='Jack W Olds &amp; Company, LLP'>
          <p>Logo design and site customization for a CPA firm in Portland, Oregon.</p>
          <button-group slot='actions'>
            <te-button theme='secondary'
              href='http://www.oldscpa.com'>
              Check it out
            </te-button>
          </button-group>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/oldscpa-phone.jpg'>
              <img slot='tablet-content' src='/img/oldscpa-tablet.jpg'>
              <img slot='desktop-content' src='/img/oldscpa-desktop.jpg'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-aikidonw'
          title='Aikido Northwest'>
          <p>WordPress installation and customization for an Aikido Dojo in Portland, Oregon.</p>
          <button-group slot='actions'>
            <te-button theme='secondary'
              href='http://aikidonw.com'>
              Check it out
            </te-button>
          </button-group>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/aikidonw-phone.jpg'>
              <img slot='tablet-content' src='/img/aikidonw-tablet.jpg'>
              <img slot='desktop-content' src='/img/aikidonw-desktop.jpg'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-excel'
          title='Excel VBA Date Picker'>
          <p>A fully customizable date picker widget with no dependencies, coded in Excel VBA. Currently with over 10,000 downloads.</p>
          <button-group slot='actions'>
            <te-button theme='secondary'
              href='/portfolio/excel-datepicker'
              internal>
              Project details
            </te-button>
            <te-button type='flat'
              href='/downloads/CalendarForm v1.5.2.zip'
              @click.native="track('Excel', 'download', 'Date Picker')">
              Download
            </te-button>
          </button-group>
          <div slot='image'>
            <img src='/img/excel-datepicker.png'>
          </div>
        </project-summary>
      </container>
    </section>
    <section id='contact'>
      <header>
        <h1>How can we help?</h1>
      </header>
      <container size='small'>
        <p>Whether you need a brand new website, or help updating an existing one, we've got you covered. Below is a sample of available services.</p>
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
        <p>Drop us a line with a few details of your project, and we can start putting together a plan.</p>
        <div class='services-actions'>
          <button-group align='center'>
            <te-button type='flat'>
              trevoreyre&commat;gmail.com
            </te-button>
            <te-button type='flat'
              href='https://github.com/TrevorEyre'>
              GitHub
            </te-button>
            <te-button type='flat'
              href='https://www.linkedin.com/in/trevor-eyre-958976108'>
              LinkedIn
            </te-button>
          </button-group>
        </div>
      </container>
      <contact-form></contact-form>
    </section>
  </article>
</template>

<script>
  import analytics from '~/common/analytics'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import ContactForm from '~/components/ContactForm'
  import Container from '~/components/Container'
  import Device from '~/components/Device'
  import DeviceGroup from '~/components/DeviceGroup'
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
      ProjectSummary,
      SiteHeader
    },
    methods: {
      track: analytics.track
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';

  .services-actions {
    margin-bottom: $spacing-l;
  }
</style>
