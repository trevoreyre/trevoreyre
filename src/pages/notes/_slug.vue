<script>
import Container from '~/components/Container'
import NavButton from '~/components/NavButton'
import PageHeader from '~/components/PageHeader'

export default {
  components: { Container, NavButton, PageHeader },
  data() {
    return {
      post: null
    }
  },
  async asyncData({ params }) {
    try {
      const { attributes, html } = await import(`~/content/notes/${params.slug}.md`)
      return {
        post: { ...attributes, html }
      }
    } catch(err) {
      console.error(err)
      return false
    }
  }
}
</script>

<template>
  <div id="app">
    <nav-button href="/notes" open></nav-button>
    <page-header :title="post.title" theme="primary" size="small"></page-header>
    <section>
      <container size="large">
        <div v-if="post.featuredImage" class="featured-image">
          <img :src="post.featuredImage">
        </div>
        <div class="content" v-html="post.html"></div>
      </container>
    </section>
  </div>
</template>
