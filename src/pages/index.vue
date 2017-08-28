<template>
  <article id='about'>
    <site-header></site-header>
    <section id='about-summary'>
      <div class='container small'>
        <p>Hi, I'm Trevor. I love creating websites with my wife, Lia Eyre, and building cool things on the web. We are especially passionate about user experience and believe that every website should be simple and enjoyable to use.</p>
        <p>Take a look at some of our work below.</p>
      </div>
    </section>
    <section id='projects'>
      <header>
        <h1>Projects</h1>
      </header>
      <div class='container'>
        <section id='projects-gbo' class='project-summary'>
          <div class='container small project-summary-description'>
            <h2>For the Love</h2>
            <p>Full site redesign and custom WordPress template for a fashion blog in San Francisco, California.</p>
            <div class='actions'>
              <te-button theme='secondary'
                href='http://forthelove.blog'>
                Check it out
              </te-button>
            </div>
          </div>
          <div class='project-summary-image'>
            <div class='device-collection'>
              <div class='device phone'>
                <img src='/img/gbo-phone.jpg'>
              </div>
              <div class='device tablet'>
                <img src='/img/gbo-tablet.jpg'>
              </div>
              <div class='device desktop'>
                <img src='/img/gbo-desktop.jpg'>
              </div>
            </div>
          </div>
        </section>
        <section id='projects-oldscpa' class='project-summary'>
          <div class='project-summary-description'>
            <h2>Jack W Olds &amp; Company, LLP</h2>
            <p>Logo design and site customization for a CPA firm in Portland, Oregon.</p>
            <div class='actions'>
              <te-button theme='secondary'
                href='http://www.oldscpa.com'>
                Check it out
              </te-button>
            </div>
          </div>
          <div class='project-summary-image'>
            <div class='device-collection'>
              <div class='device phone'>
                <img src='/img/oldscpa-phone.jpg'>
              </div>
              <div class='device tablet'>
                <img src='/img/oldscpa-tablet.jpg'>
              </div>
              <div class='device desktop'>
                <img src='/img/oldscpa-desktop.jpg'>
              </div>
            </div>
          </div>
        </section>
        <section id='projects-aikidonw' class='project-summary'>
          <div class='project-summary-description'>
            <h2>Aikido Northwest</h2>
            <p>WordPress installation and customization for an Aikido Dojo in Portland, Oregon.</p>
            <div class='actions'>
              <te-button theme='secondary'
                href='http://aikidonw.com'>
                Check it out
              </te-button>
            </div>
          </div>
          <div class='project-summary-image'>
            <div class='device-collection'>
              <div class='device phone'>
                <img src='/img/aikidonw-phone.jpg'>
              </div>
              <div class='device tablet'>
                <img src='/img/aikidonw-tablet.jpg'>
              </div>
              <div class='device desktop'>
                <img src='/img/aikidonw-desktop.jpg'>
              </div>
            </div>
          </div>
        </section>
        <section id='projects-excel' class='project-summary'>
          <div class='project-summary-description'>
            <h2>Excel VBA Date Picker</h2>
            <p>A fully customizable date picker widget with no dependencies, coded in Excel VBA. Currently with over 10,000 downloads.</p>
            <div class='actions'>
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
            </div>
          </div>
          <div class='project-summary-image'>
            <img src='/img/excel-datepicker.png'>
          </div>
        </section>
      </div>
    </section>
    <section id='contact'>
      <header>
        <h1>How can we help?</h1>
      </header>
      <div class='container small'>
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
        <div id='services-actions' class='actions'>
          <te-button type='flat'
            href='mailto:trevoreyre@gmail.com'>
            trevoreyre@gmail.com
          </te-button>
          <te-button type='flat'
            href='https://github.com/TrevorEyre'>
            GitHub
          </te-button>
          <te-button type='flat'
            href='https://www.linkedin.com/in/trevor-eyre-958976108'>
            LinkedIn
          </te-button>
        </div>
      </div>
      <contact-form></contact-form>
    </section>
  </article>
</template>

<script>
  import analytics from '~/common/analytics'
  import Button from '~/components/Button'
  import ContactForm from '~/components/ContactForm'
  import SiteHeader from '~/components/SiteHeader'

  export default {
    components: {
      'te-button': Button,
      ContactForm,
      SiteHeader
    },
    methods: {
      track: analytics.track
    }
  }
</script>

<style lang='scss'>
</style>
