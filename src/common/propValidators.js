const themeValidator = value => (
  ['neutral', 'primary', 'secondary'].includes(value)
)

const sizeValidator = value => (
  ['small', 'medium', 'large'].includes(value)
)

export { themeValidator }
export { sizeValidator }
