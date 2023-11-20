<template>
  <article class="resume">
    <nav-button class="resume-nav-button" href="/" open></nav-button>
    <resume-header printable></resume-header>
    <resume-body printable></resume-body>
  </article>
</template>

<script>
import NavButton from "~/components/NavButton";
import ResumeBody from "~/components/ResumeBody";
import ResumeHeader from "~/components/ResumeHeader";

export default {
  name: "resume",
  components: {
    NavButton,
    ResumeBody,
    ResumeHeader
  }
};
</script>

<style lang="scss">
@import "~common/variables";
@import "~common/mixins";

.resume {
  margin: 0 0 $spacing-l;
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
}
</style>
