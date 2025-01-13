---
updatedAt: 2021-11-23T21:32:00.000Z
type: note
createdAt: 2019-12-06T19:02:00.000Z
tags:
  - note
excerpt: Button links If you have a button on a page that redirects to a
  different page, it should rendered as an anchor tag. Semantically,
  abuttonperforms...
name: Accessibility tricks
cover: null
icon: ♿
title: Accessibility tricks

---

## Button links

If you have a button on a page that redirects to a different page, it should rendered as an anchor tag. Semantically, a `button` performs some sort of action on the current page, while a link redirects to a different page. If you are styling a link as a button, here are some things to keep in mind.

### Use `aria-disabled` instead of `disabled`

The `disabled` attribute only works on form elements, like `button`, `input`, `textarea`, `select`, etc. But sometimes you do want an anchor button to be disabled. In this case, you should set `aria-disabled="true"` so that it is communicated to screen readers. You can also set `pointer-events: none` in your CSS to prevent users from clicking on the button. However, pointer-events won't prevent keyboard usage. For that you'll also need `tabindex="-1"` to prevent keyboard navigation, and a click handler to `event.preventDefault()` as a backup to make sure the link isn't triggered.

```html
<a class="button" href="//example.com" aria-disabled="true" tabindex="-1">
  Disabled Link Button
</a>
```
```css
/* Button.css */
.button {
  /* Button styles... */
}

.button[disabled],
.button[aria-disabled="true"] {
  pointer-events: none;
  /* Disabled styles... */
}
```
```javascript
// Button.js
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
  button.addEventListener(event => {
    if (button.getAttribute('aria-disabled') === 'true') {
      event.preventDefault()
    }
  })
})
```