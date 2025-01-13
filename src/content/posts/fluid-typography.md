---
updatedAt: 2024-06-06T20:19:00.000Z
type: note
createdAt: 2024-05-03T02:26:00.000Z
tags:
  - note
excerpt: Taming line height in web typography has been a challenge since the
  beginning of the web. Use the newcapunit to size things to the capital
  letter...
name: Fluid typography
cover: null
title: Fluid typography

---

Taming line height in web typography has been a challenge since the beginning of the web.

Use the new `cap` unit to size things to the capital letter size of the typography around it.

[CSS Cap Unit](https://ishadeed.com/article/css-cap-unit/?utm_source=flipboard&utm_medium=activitypub)

I feel like there should be a way to combine `calc`, `cap`, `ex`, and `lh` to achieve the same effect as Capsize, without needing a build step and pre-generating a bunch of styles for all combinations of fonts and font sizes.

That still might not be possible though, because calculating line height - cap height will only work if the text is perfectly centered within the text box, which is not always the case. 
