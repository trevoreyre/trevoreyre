<template>
  <article id='project-excel' class='project'>
    <nav-button href='/#projects-excel' open></nav-button>
    <section>
      <container size='large' class='project-summary'>
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
      <header>
        <h2>Overview</h2>
      </header>
      <container size='small'>
        <p>The goal in creating this form was first and foremost to overcome the monstrosity that is the Microsoft MonthView control. If you're reading this, you probably already know what I'm talking about. Many others have been in my place and have come up with their own date pickers to solve this problem. So why yet another custom date picker?</p>
        <p>I was most interested in the following features:</p>
        <ul>
          <li>Ease of use. I wanted a completely self-contained form that could be imported into any VBA project and used without any additional coding.</li>
          <li>Simple, attractive design. While a lot of custom date pickers on the internet look good and work well, none of them quite nailed it for me in terms of style and UI design.</li>
          <li>Fully customizable functionality and look. I tried to include as many of the options from the MonthView control as I could, without getting too messy.</li>
        </ul>
        <p>Since none of the date pickers I have been able to find in all my searching have quite completed my checklist, here we are! Now my hope is that some other tired soul may also benefit from my labors.</p>
        <p>If you encounter any bugs, or have any great ideas or feature requests that could improve this bad boy, please send me a message.</p>
      </container>
    </section>
    <section>
      <header>
        <h2>Importing the Date Picker</h2>
      </header>
      <container size='small'>
        <p>To use the Excel VBA date picker, you must first import the userform into your project. Start by clicking the link above to download <code>CalendarForm v1.5.2.zip</code>. Extract the files in the zip archive, and save the <code>CalendarForm.frm</code> and <code>CalendarForm.frx</code> files on your computer.</p>
        <p>Open a new Excel workbook, and press <code>alt-F11</code> to open the VBA project window. Right-click on the left hand side of the project window, and select <code>Import File...</code> from the menu. Find the <code>CalendarForm.frm</code> file you saved on your computer, and click <code>Open</code>. This will import the date picker into your workbook, so it is ready to use.</p>
      </container>
    </section>
    <section>
      <header>
        <h2>Using the Date Picker</h2>
      </header>
      <container size='small'>
        <p>Once the <code>CalendarForm</code> date picker has been imported into your workbook, it can be used by calling the <code>CalendarForm.GetDate</code> function. The <code>GetDate</code> function is the single point of entry into the date picker. It controls everything. Every argument in the function is optional, meaning your function call an be as simple as <code>dateVariable = CalendarForm.GetDate</code>. That's all there is to it. The date picker initializes and pops up, the user selects a date, and the selection is returned to your variable.</p>
<pre><code>Dim dateVariable as Date
dateVariable = CalendarForm.GetDate</code></pre>
        <p>From there, you can use as many or as few arguments as you want in order to get the desired calendar that suits your needs. Below are some examples of different calendars you can get from the various arguments in the <code>GetDate</code> function.</p>
        <p>All default values are also set in the GetDate function, so if you want to change default colors or behavior without having to explicitly do so in every function call, you can set those values in the argument list for the function. By setting the various arguments, you can obtain vastly different calendars, all with the same function.</p>
      </container>
    </section>
  </article>
</template>

<script>
  import analytics from '~/common/analytics'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Container from '~/components/Container'
  import NavButton from '~/components/NavButton'
  import ProjectSummary from '~/components/ProjectSummary'

  export default {
    components: {
      'te-button': Button,
      ButtonGroup,
      Container,
      NavButton,
      ProjectSummary
    },
    methods: {
      track: analytics.track
    }
  }
</script>

<style lang='scss' scoped>

</style>
