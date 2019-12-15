---
title: Vue JSX for the React developer
datePublished: 2019-12-09T15:55:55.717Z
dateUpdated: ''
tags:
  - vue
---
Here's a little cheat-sheet for how to use JSX in Vue. JSX is less popular in Vue than React, because Vue already has a very good, easy-to-learn HTML templating system. However, I found myself reaching for JSX more often due to the increased flexibility. For example, I'm a very big fan of adding an `as` prop to my components, to easily change the HTML tag or component that gets rendered.

```html
<AppButton as="a" href="#link">
  Button Link
</AppButton>
```

I found myself using a lot of render functions for this sort of functionality. And once you're using render functions, JSX is MUCH easier to use than stringing together a bunch of `createElement` functions.

## Props and attributes

Props can be accessed via `this.$props`. All additional attributes passed to the component are available via `this.$attrs`, and are automatically added to the root component.

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
<AppButton size="sm" id="submit">Submit</AppButton>

<!-- Result -->
<button class="sm" id="submit">Submit</button>
```

If you want to manually handle how extra attributes are passed to the DOM, you can add `inheritAttrs: false` to your component. You might do this if you want those attributes to pass to a nested element instead of the root, for example. The one exception is `class` and `style`, which are always automatically merged with the root element, regardless of `inheritAttrs`.

```js
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    size: String,
  }
  render() {
    const { size } = this.$props

    return (
      <div class="root">
        <button class={size} attrs={this.$attrs}>
          {this.$slots.default}
        </button>
      </div>
    )
  }
}
</script>
```

```html
<AppButton size="sm" id="submit" class="my-button">
  Submit
</AppButton>

<!-- Result -->
<div class="root my-button">
  <button class="sm" id="submit">
    Submit
  </button>
</div>
```

## Event handlers

```js
// AppButton.vue
<script>
export default {
  name: 'AppButton',
  render() {
    return (
      <button {...{ on: this.$listeners }}>
        {this.$slots.default}
      </button>
    )
  }
}
</script>
```

## Links

[babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)
