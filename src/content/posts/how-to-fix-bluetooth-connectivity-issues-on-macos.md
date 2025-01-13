---
updatedAt: 2024-11-21T02:15:00.000Z
type: note
createdAt: 2024-11-21T02:14:00.000Z
tags:
  - note
excerpt: I think i found a solution from preventing the problem from coming back
  again and again. . BEFORE doing the 'sudo pkill bluetoothd'. go into...
name: How to fix bluetooth connectivity issues on macOS
cover: null
title: How to fix bluetooth connectivity issues on macOS

---

[](https://www.reddit.com/r/MacOS/comments/yhltz0/comment/jw7jv5z/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

> I think i found a solution from preventing the problem from coming back again and again. . BEFORE doing the 'sudo pkill bluetoothd'. go into bluetooth settings. go to your mouse and FORGET DEVICE. Then turn off your mouse power. THEN go into terminal and do `sudo pkill bluetoothd`. After, turn on the mouse and connect. I haven't had an issue with it happening since. but everytime i tried this and didnt forget device, it came back. Hope this helped you as it did me.

This does work, but the problem did eventually come back for me.
