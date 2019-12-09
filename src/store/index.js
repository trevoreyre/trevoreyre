import path from 'path'
import { format, parseISO } from 'date-fns'

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
    return Object.values(state.posts)
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
      const datePublishedDisplay = format(parseISO(datePublished), 'MMMM do, yyyy')
      const dateUpdatedDisplay = dateUpdated ? format(parseISO(dateUpdated), 'MMMM do, yyyy') : ''

      posts[slug] = {
        title,
        tags,
        datePublished,
        datePublishedDisplay,
        dateUpdated,
        dateUpdatedDisplay,
        html: post.html,
        url: `/notes/${slug}`
      }
      return posts
    }, {})

    commit({ type: 'setPosts', posts })
  }
}
