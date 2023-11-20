<template>
  <header :class="['resume-header', { printable }]">
    <div class="summary">
      <h1>Trevor Eyre</h1>
      <h2>Senior Front-end Software Engineer</h2>
    </div>
    <div class="details">
      <p>Remote (Idaho)</p>
      <a href="tel:+12086316741" target="_blank">
        208.631.6741
      </a>
      <a class="website-link" href="https://trevoreyre.com" target="_blank"
        >https://trevoreyre.com</a
      >
      <a href="mailto:trevoreyre@gmail.com" target="_blank">
        trevoreyre@gmail.com
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "resume-header",
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

.resume-header {
  width: 100%;
  margin: 0 auto $spacing-l auto;
  padding: $spacing-xxl $spacing-m $spacing-l;
  display: flex;
  flex-flow: column nowrap;
  border-bottom: 2px solid $color-primary;
  @include breakpoint-tablet() {
    max-width: $breakpoint-tablet;
    padding: $spacing-l;
    flex-flow: row nowrap;
    align-items: flex-end;
  }
}

.resume-header h1 {
  color: $color-primary;
}

.resume-header h2,
.resume-header p {
  color: $text-color-primary;
}

.resume-header > .summary {
  flex: 2;
}

.resume-header > .details {
  flex: 1;
}

.resume-header .summary {
  text-align: left;
}

resume-header .summary h1 {
  line-height: 1;
  margin: 0 0 $spacing-m 0;
}

.resume-header .summary h2 {
  line-height: 1;
  margin: 0;
}

.resume-header .details {
  margin-top: $spacing-l;
  text-align: left;
  @include breakpoint-tablet() {
    margin-top: 0;
    text-align: right;
  }
}

.details p,
.details a {
  display: block;
  margin: 0 0 $spacing-s 0;
  line-height: 1;
}

.resume-header .details *:last-child {
  margin-bottom: 0;
}

.details .website-link {
  display: none;
}

@media print {
  .resume-header.printable {
    background: #fff;
    font-size: 0.875rem;
    margin-bottom: $spacing-m + $spacing-s;
    max-width: $breakpoint-tablet;
    padding: $spacing-l $spacing-m;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  .resume-header.printable .details {
    margin-top: 0;
    text-align: right;
  }

  .resume-header.printable .website-link {
    display: block;
  }

  .resume-header.printable .details a {
    color: $text-color-primary;
    text-decoration: none;
  }
}
</style>
