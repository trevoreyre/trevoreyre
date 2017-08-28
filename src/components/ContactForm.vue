<template>
  <div id='contact' class='container small'>
    <form method='post' action='https://formspree.io/trevoreyre@gmail.com'>
      <div>
        <input type='text' name='name' id='contact-name' placeholder='Name' />
        <input type='email' name='_replyto' id='contact-email' placeholder='Email' />
      </div>
      <div>
        <textarea name='message' id='contact-message' placeholder='Message' rows='6'></textarea>
      </div>
      <div id='contact-actions' class='actions'>
        <te-button theme='secondary'>
          Send Message
        </te-button>
      </div>
      <input type='text' name='_gotcha' style='display:none' />
    </form>
  </div>
</template>

<script>
  import Button from '~/components/Button'

  export default {
    name: 'contact-form',
    components: {
      'te-button': Button
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  form {
    width: 100%;
    margin-bottom: $spacing-xl;
  }

  form > div {
    display: flex;
    flex-flow: row wrap;
  }

  form > div > * {
    flex: 1;
    @include breakpoint('', '600px') {
      flex: 1 1 100%;
    }
  }

  form input,
  form textarea {
    margin: 0 $spacing-m $spacing-l $spacing-m;
  }

  input,
  textarea,
  select {
    border: solid 1px $border-color;
    border-radius: $border-radius-s;
    padding: $spacing-s;
  }
</style>
