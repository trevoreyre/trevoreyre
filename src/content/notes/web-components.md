---
title: Web components
datePublished: 2020-03-15T05:29:46.562Z
dateUpdated: ''
tags:
  - web components
---
Web components have a lot of potential. So far my big takeaway is that they are a **very** different beast from the components you're used to in your favorite JavaScript framework.

## Pros

- Interoperable. Write a component and use it in any framework. Sorta. [React is kind of a pain still](https://custom-elements-everywhere.com/#react)...

## Cons

- Writing flexible, composable components is super difficult. One of the primary goals of web components is encapsulation of styles and functionality. Which is nice in some cases, but when you *want* it to be flexible and usable in a variety of situations, that encapsulation can fight you a lot.

- There's no built-in context like in React. If you want a channel for related components to communicate with each other, you have to use something like Redux or roll your own.

- Extending native HTML elements is kind of excruciating. Say, you want to create a web component that just extends an HTML `<input>` with a little extra functionality or custom styling. You can't really expose the inner `<input>` component, so you basically have to re-implement all the attributes and functionality of that input manually.