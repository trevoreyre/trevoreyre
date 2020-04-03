---
title: Writing AWS Lambda functions in TypeScript
datePublished: 2020-04-03T18:38:10.177Z
dateUpdated: ''
tags:
  - serverless
  - typescript
notes: '- aws lambdas in typescript'
---
The [Serverless Framework][serverless] makes writing Lambda functions in Node.js pretty easy to get up and running. But once you add a few dependencies from `npm`, you pretty quickly end up packaging and deploying huge `node_modules` folders to AWS.

The [Serverless Webpack][serverless-webpack] plugin can help optimize these functions, and also allows you to integrate your favorite build tooling to do things like compiling TypeScript or optimizing your deployed bundles.

A basic configuration for TypeScript may look like this:

```bash
npm install --save-dev serverless serverless-webpack webpack typescript ts-loader
```

```yml
# serverless.yml
service: serverless-webpack-example

plugins:
  - serverless-offline
  - serverless-webpack

custom:
  webpack:
    includeModules: true

provider:
  name: aws
  runtime: nodejs12.x

functions:
  hello:
    handler: src/hello.handler
    events:
      - http:
          path: hello
          method: post
```

Add a `webpack.config.js` file like this.

```js
// webpack.config.js
const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
  mode: 'production',
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
}
```

Now you can write you functions in TypeScript, and Serverless will automatically build and compile your code for you. This integrates with other Serverless Framework commands such as `serverless invoke local`, as well as the [serverless-offline] plugin for local development.

## Optimizing your Webpack configuration

But we can still do a little better. A simple configuration like this can still end up bundling a lot of extra unnecessary code if you're not careful, such as the `aws-sdk` package. Some of these packages don't need to included in your bundle, since they're already included in the AWS runtime. One option is to use the `webpack-node-externals` plugin to exclude *all* `node_modules` from bundling, and only build your own source code.

```js
// webpack.config.js
...
const nodeExternals = require('webpack-node-externals')

module.exports = {
  ...
  externals: [nodeExternals()],
  ...
}
```

However, once again you'll packaging huge `node_modules` folders to AWS leading to slower builds and giant Lambda packages. Instead, you can exclude individual dependencies from your build.

```js
// webpack.config.js
...

module.exports = {
  ...
  externals: ['aws-sdk'],
  ...
}
```

This will tell Webpack to exclude `aws-sdk` from your bundle, but it will still zip it into a `node_modules` folder to deploy to AWS. You can go one step further to avoid packaging the library entirely by excluding it in your `serverless-webpack` configuration.

```yml
# serverless.yml
service: serverless-webpack-example
...

custom:
  webpack:
    includeModules:
      forceExclude:
        - aws-sdk
...
```

This will prevent `aws-sdk` from being bundles in your JavaScript bundle, or shipped to AWS in a `node_modules` folder, and you'll end up with leaner, better optimized JavaScript bundles.

## Links

[serverless]

[serverless-webpack]

[serverless-offline]

[serverless]: https://serverless.com/
[serverless-webpack]: https://github.com/serverless-heaven/serverless-webpack
[serverless-offline]: https://github.com/dherault/serverless-offline

