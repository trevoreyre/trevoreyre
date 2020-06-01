---
title: Setting up Windows to feel like macOS
datePublished: 2020-01-16T22:25:19.787Z
dateUpdated: 2020-02-28T07:00:00.000Z
tags:
  - wsl
  - windows
  - macos
notes: >-
  - Mention remapping modifier keg for screen reader software like VoiceOver and
  NVDA

  - You could use SharpKeys or Magic Keyboard Utilities to remap keys, but Magic Keyboard Utilities will ONLY be in effect when you’re using a magic keyboard, whereas SharpKeys will work with any keyboard


  Search terms:

  macos keyboard shortcuts

  os x keyboard shortcuts

  swap ctrl fn keys

  remap fn key

  autohotkey os x shortcuts
---
My personal machine is a MacBook Pro. My work machine is a Windows laptop. This is not about which OS is better. I'm just used to macOS, so I'd prefer both environments to behave as similarly as possible. If you're in the same situation, you might find this useful as well.

### App launcher

If you use Alfred as an app launcher, on Windows there is [ueli]. It has a very similar feel and functionality, and a lot of the same features. I don't think you can go quite as deep on custom workflows and stuff, but it's got all the basics. I also tried [Wox], which was not bad, but different enough that it didn't feel like a good replacement.

### Development environment

I do software development, so keeping a consistent development environment between systems is crucial. For that, I keep a [repository of dotfiles][dotfiles] that I can clone and use in all my environments. They are Unix-based, but work fine in Windows if you're using the Git Bash shell, or WSL.

I use [Visual Studio Code][vscode] on both Mac and Windows, and sync my settings between the two using the [Settings Sync extension][settings-sync] (although I believe Microsoft is building in first-class support for this soon). The extension automatically creates a GitHub Gist for you, and reads/writes all your settings from there. [Here's my gist][settings-sync-gist] with all my settings and extensions

### Mouse and keyboard settings

Getting my mouse and keyboard to feel like macOS on Windows was difficult. Very difficult. My setup isn't 100% there, but it's close.

I use the Magic Mouse and Magic Keyboard. You can use these with Windows as well, but the default experience is... shit. Touch scrolling on the mouse doesn't work at all. And neither do the keyboard shortcuts for things like volume, screen brightness, and audio controls. I ended up purchasing a license for [Magic Utilities][magic-utilities], which provides support for all of the features of Apple's peripherals on Windows. It is a little bit finicky to use, and you occasionally have to do things like restarting or reinstalling drivers, but I've grown to really hate scroll wheels, and I haven't found a compact Bluetooth keyboard that I like as well as Apple's, so to me the trade off is worth it.

If you use a normal mouse and keyboard, you can skip that step. The only other thing mouse-related is if you use reverse scrolling. Windows doesn't have a setting for this, but you can still manage it with the registry editor (I know it's gross. But it works). [Here's the instructions][reverse-scroll-wheel].

Now, on to keyboard shortcuts. Buckle up, because you're in for a world of pain. I think I have a setup that's pretty damn close to macOS, but still not perfect. I use [Sharp Keys][sharp-keys] to remap the Alt key to Control, and the Windows key to Alt. I then use [AutoHotkey] to remap a bunch of shortcuts.

I followed [this guide for the basic setup of Sharp Keys and AutoHotkey][macos-keyboard-shortcuts], and then spent a thousand years tweaking shortcuts. You can find [my AutoHotkey shortcuts here][autohotkey-shortcuts].

### Other

I use [Notion] for note-taking, because it has great apps on iOS, macOS, Android, and everywhere ever.

I'm using [AquaSnap] for window management, and remapping the keyboard shortcuts to match [Rectangle] on macOS.

## Links

### Apps

[ueli]

[Visual Studio Code][vscode]

[Settings Sync extension][settings-sync]

[Magic Utilities][magic-utilities]

[Sharp Keys][sharp-keys]

[AutoHotkey]

[Notion]

[AquaSnap]

### Guides

[My configuration files (dotfiles)][dotfiles]

[My VS Code settings][settings-sync-gist]

[My AutoHotkey shortcuts][autohotkey-shortcuts]

[A guide for using WSL for development - Janel Brandon - Medium](https://medium.com/@janelgbrandon/a-guide-for-using-wsl-for-development-d135670313a6)

[Setting Up Docker for Windows and WSL to Work Flawlessly — Nick Janetakis](https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly)

[How to reverse Mouse and Touchpads scrolling direction in Windows 10](https://www.thewindowsclub.com/reverse-mouse-touchpad-scrolling-direction)

[Mapping your macOS keybinds to Windows][macos-keyboard-shortcuts]

[Mac keyboard shortcuts][apple-support-mac-keyboard-shortcuts]

[ueli]: https://ueli.app/
[vscode]: https://code.visualstudio.com
[settings-sync]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
[settings-sync-gist]: https://gist.github.com/trevoreyre/8d9e08eec4c53d8aa8740112fb659885
[wox]: http://www.wox.one/
[dotfiles]: https://github.com/trevoreyre/dotfiles
[reverse-scroll-wheel]: https://www.thewindowsclub.com/reverse-mouse-touchpad-scrolling-direction
[magic-utilities]: https://magicutilities.net/
[sharp-keys]: https://github.com/randyrants/sharpkeys
[autohotkey]: https://www.autohotkey.com/
[autohotkey-shortcuts]: https://gist.github.com/trevoreyre/8df3a186bb18df4b17d5417a5d1143ad
[notion]: https://www.notion.so
[macos-keyboard-shortcuts]: https://medium.com/@chrisdhanaraj/mapping-your-macos-keybinds-to-windows-b6009c50065b
[apple-support-mac-keyboard-shortcuts]: https://support.apple.com/en-us/HT201236
[aquasnap]: https://www.nurgo-software.com/products/aquasnap
[rectangle]: https://rectangleapp.com/
