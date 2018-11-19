<template>
  <article class='resume'>
    <nav-button class='resume-nav-button' href='/' open></nav-button>
    <header>
      <div class='header-container'>
        <div class='summary'>
          <h1>Trevor Eyre</h1>
          <h2>Full stack web developer</h2>
        </div>
        <div class='details'>
          <p>208.631.6741</p>
          <p class='website-link'>https://trevoreyre.com</p>
          <p>trevoreyre@gmail.com</p>
        </div>
      </div>
    </header>
    <section class='skills'>
      <header>
        <h3>Proficiencies and Skills</h3>
      </header>
      <div class='content'>
        <ul class='skill-list'>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>C#</li>
          <li>Python</li>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Webpack</li>
          <li>Docker</li>
          <li>WordPress</li>
          <li>SQL</li>
          <li>Java</li>
          <li>Android</li>
        </ul>
        <ul>
          <li>Figma, Photoshop, Illustrator</li>
          <li>Fluent in Romanian</li>
        </ul>
      </div>
    </section>
    <section class='experience'>
      <header>
        <h3>Experience</h3>
      </header>
      <div class='content'>
        <div class='entry'>
          <div class='entry-header'>
            <div class='row'>
              <h3>Software Engineer</h3>
              <p class='date-range'>Oct 2016 - Present</p>
            </div>
            <p class='location'>Healthwise - Boise, ID</p>
          </div>
          <div class='entry-body'>
            <p class='entry-description'>
              Full stack software development for client-facing content management system and administrative tools. Skills used: React.js, JavaScript, Node.js, C#, HTML, CSS.
            </p>
            <ul class='entry-details'>
              <li>
                Architect organization-wide UI component library and development guidelines, as member of Front End Core Team
              </li>
              <li>
                Built centralized React build scripts and configuration tools to maintain consistent development workflows across teams
              </li>
              <li>
                Built new administration and analytics app for clients of existing products
              </li>
            </ul>
          </div>
        </div>
        <div class='entry'>
          <div class='entry-header'>
            <div class='row'>
              <h3>Freelance Web Developer</h3>
              <p class='date-range'>Jan 2015 - Present</p>
            </div>
            <p class='location'>Self</p>
          </div>
          <div class='entry-body'>
            <p class='entry-description'>
              Freelance services such as web design, WordPress development, and branding. Skills used: Vue.js, JavaScript, HTML, CSS, Docker, PHP.
            </p>
            <ul class='entry-details'>
              <li>
                Designed and built website for Better Homes and Gardens Real Estate 43 Degrees North in Boise, ID (www.43re.com)
              </li>
              <li>
                Designed and built For the Love website, a fashion blog based in San Francisco, CA (fortheloveblog.com)
              </li>
              <li>
                Designed logo and built custom website functionality for Jack W. Olds and Company, a CPA firm in Portland, OR (www.oldscpa.com)
              </li>
            </ul>
          </div>
        </div>
        <div class='entry'>
          <div class='entry-header'>
            <div class='row'>
              <h3>Platform Engineering Intern</h3>
              <p class='date-range'>Apr 2016 - Sep 2016</p>
            </div>
            <p class='location'>Intel Corporation - Portland, OR</p>
          </div>
          <div class='entry-body'>
            <p class='entry-description'>
              Software development for electrical testing framework and platform validation. Skills used: Python, JavaScript, HTML, CSS.
            </p>
            <ul class='entry-details'>
              <li>
                Developed new user interface features, using web technologies and deployed cross-platform on Chromium Embedded Framework
              </li>
              <li>
                Assisted in testing and debugging command line interface, written in Python
              </li>
              <li>
                Created continuous integration builds and workflows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class='education'>
      <header>
        <h3>Education</h3>
      </header>
      <div class='content'>
        <div class='entry'>
          <div class='entry-header'>
            <div class='row'>
              <h3>BS in Computer Science</h3>
              <p class='date-range'>Jan 2012 - Mar 2016</p>
            </div>
            <p class='location'>Portland State University - Portland, OR</p>
          </div>
          <div class='entry-body'>
            <ul class='entry-details'>
              <li>Graduated cum laude</li>
              <li>President's List for 2 terms, Dean's List for 4 terms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import NavButton from '~/components/NavButton'

export default {
  name: 'resume',
  components: {
    NavButton
  }
}
</script>

<style lang='scss'>
@import "~common/variables";
@import "~common/mixins";

.resume {
  margin: 0;
}

.resume > header {
  // background: $color-primary;
  margin: 0 0 $spacing-xxl 0;
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

.resume .header-container > div {
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
  margin: 0 auto $spacing-xxl auto;
  padding: 0 $spacing-l;
  max-width: $breakpoint-tablet;
  display: flex;
  flex-flow: column nowrap;
  @include breakpoint-tablet() {
    flex-flow: row nowrap;
  }
}

.resume section header {
  margin: 0 0 $spacing-xl;
  width: 100%;
  @include breakpoint-tablet() {
    margin: 0 $spacing-m 0 0;
    width: 160px;
  }
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
  height: 4.05em;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
}

.resume .skill-list li {
  margin-right: $spacing-m;
  line-height: 1.35;
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
  margin: 0 0 $spacing-xl;
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

@media print {
  body {
    background: #fff;
  }

  .resume-nav-button {
    display: none;
  }

  .site-footer {
    display: none;
  }

  .resume {
    background: #fff;
    font-size: 0.875rem;
  }

  .resume > header,
  .resume section,
  .resume section:last-of-type,
  .resume .entry {
    margin-bottom: $spacing-m + $spacing-s;
  }

  .resume section,
  .resume section:last-of-type {
    flex-flow: row nowrap;
  }

  .resume section header {
    margin: 0 $spacing-m 0 0;
    width: 140px;
  }

  .resume .header-container {
    max-width: $breakpoint-tablet;
    padding: $spacing-l;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  .resume .details {
    margin-top: 0;
    color: $text-color-primary-on-primary;
    text-align: right;
  }

  .resume .details .website-link {
    display: block;
  }

  .resume .row {
    display: flex;
    align-items: flex-end;
  }

  .resume .date-range {
    margin: 0;
    color: $text-color-primary;
  }
}
</style>
