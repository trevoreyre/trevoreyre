---
updatedAt: 2023-03-19T21:19:00.000Z
type: note
createdAt: 2023-01-27T22:42:00.000Z
tags:
  - react
  - typescript
  - note
excerpt: This post describes the problem perfectly. You want to do something
  like <Button as="a" href="/">Home</Button> You also want to support passing...
name: Typing React.forwardRef with generics and dynamic components
cover: null
title: Typing React.forwardRef with generics and dynamic components

---

This post describes the problem perfectly.

[](https://www.reddit.com/r/typescript/comments/mj95on/q_how_to_type_a_react_forwardref_component_with/)

You want to do something like

```typescript
<Button as="a" href="/">Home</Button>
```
You also want to support passing a `ref` to the `Button` in case you need it.

You want it all to be type safe. Good luck!

This article does a great job explaining how to use `forwardRef` with a component that has generic props.

[](https://fettblog.eu/typescript-react-generic-forward-refs/)

But it doesn’t cover rendering a dynamic HTML element for the component, and keeping it type safe.

This article covers building a polymorphic/dynamic component where you can change the HTML element.

[](https://javascript.plainenglish.io/building-a-polymorphic-component-in-react-and-typescript-d9f236950af4)

BUT! How do you do both?

This article might be the answer!

[](https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/)

And it’s ugly as hell. These are the times when I hate TypeScript. When the type definitions are twice as long and 10 times as confusing as the actual implementation itself! Sigh…
