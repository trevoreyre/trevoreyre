---
updatedAt: 2022-05-21T02:50:00.000Z
type: note
createdAt: 2022-02-14T18:19:00.000Z
tags:
  - design systems
  - note
excerpt: Typography is hard to get right in a design system. My approach usually
  involves a bunch of CSS variables, a couple components with some default...
name: Creating the perfect typography components
cover: null
title: Creating the perfect typography components

---

Typography is hard to get right in a design system. My approach usually involves a bunch of CSS variables, a couple components with some default styles, and a whoooooooole bunch of props to tweak the type of individual components. The issue is that almost every instance of using one of the typography components involves a handful of tweaks.

## The ideal typography component

Here’s my incomplete, unordered list of requirements for the perfect typography component(s).

- Easy to switch font family, font sizes, etc.
- Somehow implements line gap instead of line height
- Vertically centers well in buttons, menu items, and other components
- Aligns well with adjacent icons, inline icons, other text, etc.
- Is highly configurable, but also has a good set of preconfigured components for things like labels, headings, subheadings, and other common typography situations



Line gap instead of line height. A single line of text should only take up the font size. This is hard as shit to pull off, but it’s the single biggest pain point I have in every single design system I’ve ever worked in.
