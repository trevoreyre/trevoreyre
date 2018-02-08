<template>
  <container size='small' id='contact'>
    <form class='contact-form'
      method='post'
      action='https://formspree.io/trevoreyre@gmail.com'
    >
      <form-element-group>
        <form-element>
          <base-label for='contact-name'>Name</base-label>
          <base-input type='text' name='name' id='contact-name' />
        </form-element>
        <form-element>
          <base-label for='contact-email'>Email</base-label>
          <base-input type='email' name='_replyto' id='contact-email' />
        </form-element>
      </form-element-group>
      <form-element>
        <base-label for='contact-message'>Message</base-label>
        <base-textarea name='message' id='contact-message' rows='6'></base-textarea>
      </form-element>
      <button-group align='center'>
        <te-button theme='primary'>
          Send Message
        </te-button>
      </button-group>
      <input type='text' name='_gotcha' style='display:none' />
    </form>
  </container>
</template>

<script>
  import BaseInput from '~/components/BaseInput'
  import BaseLabel from '~/components/BaseLabel'
  import BaseTextarea from '~/components/BaseTextarea'
  import Button from '~/components/Button'
  import ButtonGroup from '~/components/ButtonGroup'
  import Container from '~/components/Container'
  import FormElement from '~/components/FormElement'
  import FormElementGroup from '~/components/FormElementGroup'

  export default {
    name: 'contact-form',
    components: {
      BaseInput,
      BaseLabel,
      BaseTextarea,
      'te-button': Button,
      ButtonGroup,
      Container,
      FormElement,
      FormElementGroup
    }
  }
</script>

<style lang='scss' scoped>
  @import '~common/variables';
  @import '~common/mixins';

  .contact-form {
    width: 100%;
    margin: 0 0 $spacing-xl;
  }

  input,
  textarea,
  select {
    border: solid 1px $border-color;
    border-radius: $border-radius-s;
    padding: $spacing-s;
  }
</style>
