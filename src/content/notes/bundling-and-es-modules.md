---
title: Bundling and ES Modules
datePublished: 2020-01-03T21:10:32.624Z
dateUpdated: ''
tags:
  - frontend
---
It's 2020. What's the state of ES modules and bundling for front-end code? Can we finally write *real* ES modules without having to transpile everything down to ES5, use CommonJS `require` modules, and shove it all into one (or a handful of) big JavaScript bundles that we deliver to the browser?

Webpack supports ES module syntax since v2, which is more than a couple years old now.

When delivering code to the browser, does it still need to be in an IIFE or UMD module? Can we start using the module/nomodule pattern to deliver native ES modules to the browser? Especially if you're not supporting older browsers that don't support ES6+ anymore?

## Links

[Webpack 4.1 and ES Modules (ESM)](https://medium.com/@zwegrzyniak/webpack-4-1-and-es-modules-esm-dd0bd7dca4da)

[How to write and build JS libraries in 2018](https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953)

[You might not need to transpile your JavaScript](https://www.freecodecamp.org/news/you-might-not-need-to-transpile-your-javascript-4d5e0a438ca/https://www.freecodecamp.org/news/you-might-not-need-to-transpile-your-javascript-4d5e0a438ca/)
