---
updatedAt: 2021-11-23T21:32:00.000Z
type: note
createdAt: 2019-09-11T22:31:00.000Z
tags:
  - note
excerpt: Makethfocusable withtabindex="0"if it can be clicked, like sortable
  columns. Maybe it should be a button inside so it can interact like a
  button?...
name: HTML tables accessibility
cover: null
icon: ♿
title: HTML tables accessibility

---

Make `th` focusable with `tabindex="0"` if it can be clicked, like sortable columns. Maybe it should be a button inside so it can interact like a button?

Make `tr` focusable if you can click a row. IE, selecting a row.

Make sure every row/column has a header. Add an invisible header for cells like a checkbox that you don't want a visible label for. Or an `aria-label`

`tfoot`

Use `th` in `tbody` rows, when applicable.

<details>
<summary>Links</summary>
[](https://www.w3.org/TR/wai-aria-practices-1.1/#grid)
</details>
