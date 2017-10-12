const mapPenToExperiment = pen => ({
  id: pen.id,
  title: pen.title,
  details: pen.details.replace(/<[^>]+>/g, ''), // Strip HTML tags
  link: pen.link,
  image: pen.images.large
})

export { mapPenToExperiment }
