<script>
import Container from '~/components/Container'
import NavButton from '~/components/NavButton'
import PageHeader from '~/components/PageHeader'

export default {
  components: { Container, NavButton, PageHeader },
  async asyncData () {
    const req = await require.context('~/content/notes', true, /\.md$/)
    const posts = await req.keys().map(filename => ({
      ...req(filename),
      _path: `/notes/${filename.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  },
}
</script>

<template>
  <div id="app">
    <nav-button href="/" open></nav-button>
    <page-header title="Notes" theme="primary" size="small"></page-header>
    <section>
      <container size="large">
        <div v-for="post in posts" :key="post.attributes.title">
          <nuxt-link :to="post._path">
            <h2>{{ post.attributes.title }}</h2>
          </nuxt-link>
        </div>
      </container>
    </section>
  </div>
</template>
