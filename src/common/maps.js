import pens from '~/common/pens'

const mapPenToExperiment = pen => ({
  id: pen.id,
  title: pen.title,
  details: pen.details.replace(/<[^>]+>/g, ''), // Strip HTML tags
  link: pen.link,
  image: (pens[pen.id] && pens[pen.id].image) ? pens[pen.id].image : pen.images.small
})

export { mapPenToExperiment }
