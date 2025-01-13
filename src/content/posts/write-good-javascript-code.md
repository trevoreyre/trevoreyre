---
updatedAt: 2022-11-17T05:33:00.000Z
type: note
createdAt: 2022-11-17T05:24:00.000Z
tags:
  - note
excerpt: This is a collection of random coding guidelines I try to follow. Try
  to export one thing per file. This is one of my looser guidelines. I break
  it...
name: Write good JavaScript code
cover: null
title: Write good JavaScript code

---

This is a collection of random coding guidelines I try to follow.

## Try to export one thing per file.

This is one of my looser guidelines. I break it all the time. But I still think it’s a generally good thing to aim for. Also, the export has to match the file name.

## Imports go up top. Exports go at the bottom.

I used to scatter exports around a file, if it had multiple named exports. That can get tricky to follow. Now I try to always put my exports at the bottom of the file, even if there’s only one.

## Only use named exports.

I used to be all aboard the default export train, but they finally got me. I’ve run into plenty of situations where it was difficult to track down where a component or function was being used, because the default export was imported with a bunch of different names.

## Use kebab-case for file names.

I also used to be all aboard the camelCase file names train, but they got me here too. It matches the naming conventions of npm packages better. And I’ve tripped git up when trying to rename a file from `Componentname` to `ComponentName` on an OS with a case-insensitive file system.

## Always use an object for function parameters.

I still break this rule if there’s only one parameter. But next week there will probably be two, and three the week after that. So I try to always start with an object, even if there is only one parameter to a function.
