const track = (category, action, label) => {
  const analytics = window.ga
  if (analytics === undefined) {
    return
  }

  analytics('send', 'event', category, action, label)
}

export {track}
export default {
  track
}
