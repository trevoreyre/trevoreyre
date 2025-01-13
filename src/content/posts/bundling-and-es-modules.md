---
updatedAt: 2021-11-23T21:32:00.000Z
type: note
createdAt: 2021-11-18T03:40:00.000Z
tags:
  - note
excerpt: It’s 2020. What’s the state of ES modules and bundling for front-end
  code? Can we finally writerealES modules without having to transpile
  everything...
name: Bundling and ES modules
cover: null
title: Bundling and ES modules

---

It’s 2020. What’s the state of ES modules and bundling for front-end code? Can we finally write *real* ES modules without having to transpile everything down to ES5, use CommonJS `require` modules, and shove it all into one (or a handful of) big JavaScript bundles that we deliver to the browser?

Webpack supports ES module syntax since v2, which is more than a couple years old now.

When delivering code to the browser, does it still need to be in an IIFE or UMD module? Can we start using the module/nomodule pattern to deliver native ES modules to the browser? Especially if you’re not supporting older browsers that don’t support ES6+ anymore?

Look into Snowpack and Pika Pkg. Possibly bundle all your CommonJS packages from npm into one ES module using Snowpack (which I believe uses Rollup under the hood), and then you can write the rest of your own JavaScript in native ES modules without needing any bundling steps.

Probably need to have a backup CommonJS bundle for the time being until publishing ES modules becomes more widespread.

## Links

Webpack 4.1 and ES Modules (ESM)

How to write and build JS libraries in 2018

You might not need to transpile your JavaScript

Snowpack

Syntax podcast - Pika Pkg
