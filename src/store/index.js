import path from 'path'
import { compareDesc, format, parseISO } from 'date-fns'

export const state = () => ({
  posts: {},
  tags: []
})

export const mutations = {
  setPosts (state, { posts }) {
    state.posts = posts
  }
}

export const getters = {
  posts: state => {
    return Object.values(state.posts).sort((post1, post2) => {
      return compareDesc(post1.datePublished, post2.datePublished)
    })
  },

  getPost: state => slug => {
    return state.posts[slug]
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const req = await require.context('~/content/notes', true, /\.md$/)
    const posts = await req.keys().reduce((posts, filename) => {
      const post = req(filename)
      const { title, datePublished, dateUpdated, tags } = post.attributes
      const slug = path.basename(filename, '.md')
      const datePublishedParsed = parseISO(datePublished)
      const dateUpdatedParsed = parseISO(dateUpdated)
      const datePublishedDisplay = format(datePublishedParsed, 'MMMM do, yyyy')
      const dateUpdatedDisplay = dateUpdated ? format(dateUpdatedParsed, 'MMMM do, yyyy') : ''

      posts[slug] = {
        title,
        tags,
        datePublished: datePublishedParsed,
        datePublishedDisplay,
        dateUpdated: dateUpdatedParsed,
        dateUpdatedDisplay,
        html: post.html,
        url: `/notes/${slug}`
      }
      return posts
    }, {})

    commit({ type: 'setPosts', posts })
  }
}
