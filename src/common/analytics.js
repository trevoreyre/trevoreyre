const track = (category, action, label) => {
  const analytics = window.ga
  if (analytics === undefined) {
    console.warn(`Analytics unavailable. Unable to track event: ${category}, ${action}, ${label}`)
    return
  }

  console.log(`Track event: ${category}, ${action}, ${label}`)
  analytics('send', 'event', category, action, label)
}

export {track}
export default {
  track
}
