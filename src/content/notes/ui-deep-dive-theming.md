---
title: UI Deep Dive - Theming
datePublished: 2020-09-22T18:50:51.722Z
dateUpdated: ""
tags:
  - component library
---
Colors are hard as shit.

```
--color-neutral-100, --color-neutral-200, ..., --color-neutral-900
--color-primary-100, --color-primary-200, ..., --color-primary-900
--color-secondary-100, --color-secondary-200, ..., --color-secondary-900
--color-info-100, ..., --color-info-500
--color-success-100, ..., --color-success-500

--color-text-primary: black
--color-text-secondary: grey;
```

Components should update text colors based on their background color.

```
Button {
  background: color-primary-500;
  --color-text-primary: white;
  --color-text-secondary: less white;
}
```