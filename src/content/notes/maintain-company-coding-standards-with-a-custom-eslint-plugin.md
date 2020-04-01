---
title: Maintain company coding standards with a custom ESLint plugin
datePublished: 2020-04-01T06:14:00.529Z
dateUpdated: ''
tags:
  - eslint
---
ESLint and Prettier are an excellent combination for improving code quality and consistent formatting. But even with these tools, if you have a lot of projects, it's easy for your configurations to drift and to end up with different conventions in different projects.

An easy way to help this is with a custom ESLint plugin. An ESLint plugin is a simple way for you to bundle up a group of ESLint configurations or plugins, and expose a configuration for other projects to consume. For example, your plugin could be just a couple files.

```json
// package.json
{
  "name": "eslint-plugin-my-awesome-company",
  "version": "1.0.0",
  "dependencies": {
    "eslint-config-airbnb": "^18.1.0"
  },
  "peerDependencies": {
    "eslint": "^6.0.0"
  }
}
```

```js
// index.js
module.exports = {
  configs: {
    recommended: {
      extends: ['airbnb'],
      rules: {
        // My awesome company's custom rules
      }
    }
  }
}
```

Then, every project only has to install your plugin and extend the recommended configuration.

```sh
npm install --save-dev eslint eslint-plugin-my-awesome-company
```

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:my-awesome-company/recommended']
}
```
