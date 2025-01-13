---
updatedAt: 2024-12-10T00:11:00.000Z
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

2024-12-09 update - The fix above doesn’t really work any more. The bluetooth issues are getting worse and worse.

I’ll just try to write down whatever suggestions I come across to see if any of them work.

[](https://www.reddit.com/r/mac/comments/rdzygc/help_with_bluetooth_bluetooth_suddenly_stopped/)

> Anyone seeing this in the future with the same issue, here's what worked for me: Reset the SMC, you can google how to do this for your model. For me, I needed to turn off the system and hold the Shift + Control + Option + Power keys for 10 seconds. After booting the bluetooth was fixed. None of the .plist fixes worked for me
