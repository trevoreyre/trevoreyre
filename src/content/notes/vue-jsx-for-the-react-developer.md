---
title: Vue JSX for the React developer
datePublished: 2019-12-09T15:55:55.717Z
dateUpdated: ''
tags:
  - vue
---
I have a lot of experience writing React components, but much less writing Vue components. And this is my first time using JSX in Vue. So here's a quick cheatsheet on how to use JSX in Vue.

JSX is less popular in Vue because it already has a very good, easy-to-learn HTML templating system. I found myself reaching for JSX more due to the increased flexibility it can give you. As an example, I'm a very big fan of adding an `as` prop to almost all of my components, to allow the user to easily change the HTML tag or component that gets rendered. For example:

```html
<button-component as="a" href="#link">
  Button Link
</button-component>
```

I found myself turning to render functions for this sort of functionality. And once you're using render functions regularly, switching from the `createElement` function to JSX is a MUCH better experience.

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
