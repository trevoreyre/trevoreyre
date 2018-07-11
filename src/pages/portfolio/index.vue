<template>
  <div id='app'>
    <nav-button href='/' open></nav-button>
    <page-header title='Projects' theme='primary' size='medium'>
    </page-header>
    <section>
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
        <project-summary id='projects-aikidonw'
          title='Aikido Northwest'
          href='http://aikidonw.com'
          :actions="[{href: 'http://aikidonw.com', text: 'Check it out'}]"
        >
          <p>WordPress installation and customization for an Aikido Dojo in Portland, Oregon.</p>
          <div slot='image'>
            <device-group>
              <img slot='phone-content' src='/img/aikidonw-phone.jpg'>
              <img slot='tablet-content' src='/img/aikidonw-tablet.jpg'>
              <img slot='desktop-content' src='/img/aikidonw-desktop.jpg'>
            </device-group>
          </div>
        </project-summary>
        <project-summary id='projects-excel-datepicker'
          title='Excel VBA Date Picker'
          href='/portfolio/excel-datepicker'
          :actions="[{href: '/portfolio/excel-datepicker', text: 'Project details'}]"
        >
          <p>A fully customizable date picker widget with no dependencies, coded in Excel VBA. Currently with over 10,000 downloads.</p>
          <div slot='image'>
            <img src='/img/excel-datepicker.png'>
          </div>
        </project-summary>
      </container>
    </section>
  </div>
</template>

<script>
  import analytics from '~/common/analytics'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Container from '~/components/Container'
  import Device from '~/components/Device'
  import DeviceGroup from '~/components/DeviceGroup'
  import NavButton from '~/components/NavButton'
  import PageHeader from '~/components/PageHeader'
  import ProjectSummary from '~/components/ProjectSummary'

  export default {
    name: 'app',
    components: {
      'te-button': Button,
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
  }
</script>

<style lang='scss' scoped>
</style>
