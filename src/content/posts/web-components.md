---
updatedAt: 2023-09-08T16:41:00.000Z
type: note
createdAt: 2021-11-18T03:40:00.000Z
tags:
  - web components
  - note
excerpt: Web components have a lot of potential. So far my big takeaway is that
  they are averydifferent beast from the components you’re used to in your...
name: Web components
cover: null
title: Web components

---

Web components have a lot of potential. So far my big takeaway is that they are a **very** different beast from the components you’re used to in your favorite JavaScript framework.

## Forms

Form elements are more painful with web components. You have to use some extra hacks to get them working with native `form` elements. This can be worked around now by listening for the formdata event, and appending your data to the `FormData` object. In the future, it should get even better with the ElementInternals interface. But support for that is still a ways off.

## Pros

- Interoperable. Write a component and use it in any framework. Sorta. React is kind of a pain still…
- You can write more flexible, more customizable versions of native HTML elements with better defaults.

## Cons

- Writing flexible, composable components is super difficult. One of the primary goals of web components is encapsulation of styles and functionality. Which is nice in some cases, but when you *want* it to be flexible and usable in a variety of situations, that encapsulation can fight you a lot.
- There’s no built-in context like in React. If you want a channel for related components to communicate with each other, you have to use something like Redux or roll your own.
- Extending native HTML elements is kind of excruciating. Say, you want to create a web component that just extends an HTML `<input>` with a little extra functionality or custom styling. You can’t really expose the inner `<input>` component, so you basically have to re-implement all the attributes and functionality of that input manually. For an example, see how complex it is to implement a basic custom checkbox element.

## Links

[Pros and cons of using Shadow DOM and style encapsulation](https://www.matuzo.at/blog/2023/pros-and-cons-of-shadow-dom/)

[Web Components Accessibility FAQ](https://www.matuzo.at/blog/2023/web-components-accessibility-faq/)

[Misadventures in web components](https://www.falldowngoboone.com/blog/misadventures-in-web-components/)

Custom elements everywhere

HTML attributes reference

HowTo: Components

Custom elements best practices
