---
title: Vue JSX for the React developer
datePublished: 2019-12-09T15:55:55.717Z
dateUpdated: ''
tags:
  - vue
---
I have a lot of experience writing React components, but much less writing Vue components. And this is my first time using JSX in Vue. So here's a quick cheatsheet on how to use JSX in Vue.

## Props and attributes

Defined props are available on `this.$props`. Any additional attributes passed to the component are available on `this.$attrs`. Additional attributes are automatically added to the root component. If you want to explicitly manage how these attributes are handled in the HTML, you can add `inheritAttrs: false` to your component. The one exception is `class` and `style`, which are always automatically merged with your component's, regardless of `inheritAttrs`.

### Example

```js
// AppButton.vue
<script>
export default {
  name: 'AppButton',
  props: {
    size: String,
  }
  render() {
    const { size } = this.$props

    return (
      <button class={size}>
        {this.$slots.default}
      </button>
    )
  }
}
</script>
```

```html
<app-button size="sm" id="submit">Submit</app-button>

<!-- Result -->
<button class="sm" id="submit">Submit</button>
```
