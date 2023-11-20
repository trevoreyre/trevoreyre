<template>
  <div :class="['resume-body', { printable }]">
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
              Lead front-end engineer for multiple internal and customer-facing
              applications, working remotely full time.
            </p>
            <ul class="entry-details">
              <li>
                Architected front-end design system and component library, built
                in React
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
                Built new UI component library in React for major client in the
                healthcare industry
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
                Built and open sourced React component library used in multiple
                client-facing and internal applications -
                <a
                  href="https://github.com/healthwise/healthwise-ui"
                  target="_blank"
                  >github.com/healthwise/healthwise-ui</a
                >
              </li>
              <li>
                Helped standardize front-end development tools and guidelines as
                member of Front-end Core Team
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
                Built a warehouse inventory management application for Freeform,
                a commercial furniture company in Idaho and Washington
              </li>
              <li>
                Built an open source autocomplete component for JavaScript and
                Vue -
                <a href="https://autocomplete.trevoreyre.com" target="_blank"
                  >autocomplete.trevoreyre.com</a
                >
              </li>
              <li>
                Designed and built website for Touché Photography, an underwater
                photographer in Portland, Oregon -
                <a href="https://touchephotography.com" target="_blank"
                  >touchephotography.com</a
                >
              </li>
              <li>
                Designed and built website for Better Homes and Gardens Real
                Estate 43 Degrees North in Boise, Idaho -
                <a href="https://www.43re.com" target="_blank">43re.com</a>
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
</template>

<script>
export default {
  name: "resume-body",
  props: {
    printable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~common/variables";
@import "~common/mixins";

.resume-body {
  margin: 0 0 $spacing-xl;
}

.resume-body section,
.resume-body section:last-of-type {
  max-width: $breakpoint-tablet;
  display: flex;
  flex-flow: column nowrap;
}

.resume-body section header {
  margin: 0 0 $spacing-l;
  width: 100%;
}

.resume-body section h3 {
  text-align: left;
  margin: 0;
  line-height: 1.35;
}

.resume-body section p {
  font-size: 1em;
  line-height: 1.35;
}

.resume-body .content {
  flex: 1;
}

.resume-body ul {
  margin: 0;
  padding: 0 0 0 1.1em;
}

.resume-body .skill-list {
  margin: 0 0 $spacing-s;
  padding: 0;
  height: 8em;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
}

.resume-body .skill-list li {
  margin-right: $spacing-m;
  line-height: 2;
}

.resume-body section header h3 {
  color: $color-primary;
}

.resume-body .row {
  @include breakpoint-tablet() {
    display: flex;
    align-items: flex-end;
  }
}

.resume-body .entry {
  margin: 0 0 $spacing-l;
}

.resume-body .entry:last-child {
  margin-bottom: 0;
}

.resume-body .entry-header h3 {
  margin-right: $spacing-m;
  flex: 1;
}

.resume-body .date-range {
  margin: $spacing-xs 0;
  color: $text-color-secondary;
  @include breakpoint-tablet() {
    margin: 0;
    color: $text-color-primary;
  }
}

.resume-body .location {
  margin: 0;
  color: $text-color-secondary;
}

.resume-body .entry-description {
  margin: $spacing-s 0;
}

.resume-body .entry-details {
  margin: $spacing-s 0 0 0;
}

@media print {
  .resume-body.printable {
    background: #fff;
    font-size: 0.875rem;
  }

  .resume-body.printable section {
    padding: 0 $spacing-m;
  }

  .resume-body.printable section,
  .resume-body.printable section:last-of-type,
  .resume-body.printable .entry {
    margin-bottom: $spacing-m + $spacing-s;
  }

  .resume-body.printable section header {
    margin: 0 0 $spacing-m;
  }

  .resume-body.printable .skill-list {
    height: 6em;
  }

  .resume-body.printable .row {
    display: flex;
    align-items: flex-end;
  }

  .resume-body.printable .date-range {
    margin: 0;
    color: $text-color-primary;
  }

  .resume-body.printable a {
    color: $text-color-secondary;
    text-decoration: none;
  }
}
</style>
