---
updatedAt: 2021-12-15T20:55:00.000Z
type: post
createdAt: 2021-11-18T03:40:00.000Z
tags:
  - post
excerpt: My personal machine is a MacBook Pro. My work machine is a Windows
  laptop. This is not about which OS is better. I’m just used to macOS, so I’d
  prefer both environments to behave as similarly as possible. If you’re in the
  same situation, you might find this useful as well.
name: Setting up Windows to feel like macOS
cover: null
title: Setting up Windows to feel like macOS

---

My personal machine is a MacBook Pro. My work machine is a Windows laptop. This is not about which OS is better. I’m just used to macOS, so I’d prefer both environments to behave as similarly as possible. If you’re in the same situation, you might find this useful as well.

If you use Alfred as an app launcher, on Windows there is ueli. It has a very similar feel and functionality, and a lot of the same features. I don’t think you can go quite as deep on custom workflows and stuff, but it’s got all the basics. I also tried Wox, which was not bad, but different enough that it didn’t feel like a good replacement.

I keep a repository of dotfiles that I can clone and use in all my environments. They are Unix-based, but work fine in Windows if you’re using the Git Bash shell, or WSL.

I use Visual Studio Code on both Mac and Windows, and sync my settings between the two using the Settings Sync extension. The extension automatically creates a GitHub Gist for you, and reads/writes all your settings from there. Here’s my gist with all my settings and extensions

## Random tweaks

I got used to reverse scrolling on my Mac, even when using a mouse. Windows doesn’t have a setting for this, but you can still manage it with the registry editor (I know it’s gross. But it works). Here’s the instructions

The other big one is keyboard shortcuts. This is tricky, and I’m still experimenting with it. I’m gonna give AutoHotkey a try, and try to use some scripts to remap everything to be closer to macOS. We’ll see how it goes. So far, I’ve followed the directions from this post - Mapping your macOS keybinds to Windows. It gets you most of the way there, but there are still some tweaks I want to make to it. I’ll publish a GitHub gist when I get that script to a good spot.

I use Notion for note-taking, because it has great apps on iOS, macOS, Android, and everywhere ever.

I’m using AquaSnap for window management, and remapping the keyboard shortcuts to match Rectangle on macOS.

## Links

### Apps

ueli

Visual Studio Code

Settings Sync extension

Notion

AquaSnap

### Guides

A guide for using WSL for development - Janel Brandon - Medium

Setting Up Docker for Windows and WSL to Work Flawlessly — Nick Janetakis

How to reverse Mouse and Touchpads scrolling direction in Windows 10

Mapping your macOS keybinds to Windows

### Random

My configuration files (dotfiles)

My VS Code settings

Mac keyboard shortcuts
