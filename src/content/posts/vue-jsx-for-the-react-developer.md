---
updatedAt: 2021-12-16T17:13:00.000Z
type: post
createdAt: 2021-11-18T03:40:00.000Z
tags:
  - post
excerpt: Here’s a little cheat-sheet for how to use JSX in Vue. JSX is less
  popular in Vue than React, because Vue already has a very good HTML templating
  system. However, I found myself reaching for JSX more often due to the
  increased flexibility.
name: Vue JSX for the React developer
cover: null
title: Vue JSX for the React developer

---

Here’s a little cheat-sheet for how to use JSX in Vue. JSX is less popular in Vue than React, because Vue already has a very good, easy to learn HTML templating system. However, I found myself reaching for JSX more often due to the increased flexibility. For example, I’m a very big fan of adding an `as` prop to my components, to easily change the HTML tag or component that gets rendered.

```html
<AppButton as="a" href="#link">
	Button Link
</AppButton>
```
I found myself using a lot of render functions for this sort of functionality. And once you’re using render functions, JSX is MUCH easier to use than stringing together a bunch of `createElement` functions.

## Props and attributes

Props can be accessed via `this.$props`. All additional attributes passed to the component are available via `this.$attrs`, and are automatically added to the root component.

```javascript
export default {
	name: 'AppButton',
	props: {
		size: String,
	},

	render() {
		const { size } = this.$props

		return (
			<button class={size}>
				{this.$slots.default}
			</button>
		)
	},
}
```
```html
<AppButton size="sm" id="submit">
	Submit
</AppButton>

<!-- Result -->
<button class="sm" id="submit">
	Submit
</button>
```
If you want to manually handle how extra attributes are passed to the DOM, you can add `inheritAttrs: false` to your component. You might do this if you want those attributes to pass to a nested element instead of the root, for example. The one exception is `class` and `style`, which are always automatically merged with the root element, regardless of `inheritAttrs`.

```javascript
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    size: String,
  },

  render() {
    const { size } = this.$props

    return (
      <div class="root">
        <button class={size} attrs={this.$attrs}>
          {this.$slots.default}
        </button>
      </div>
    )
  },
}
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

```javascript
export default {
  name: 'AppButton',

  render() {
    return (
      <button {...{ on: this.$listeners }}>
        {this.$slots.default}
      </button>
    )
  },
}
```
## Links

babel-plugin-transform-vue-jsx

Spreading props, attributes, listeners
