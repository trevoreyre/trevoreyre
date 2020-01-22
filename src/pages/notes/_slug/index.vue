<script>
import { mapGetters } from 'vuex'
import Container from '~/components/Container'
import NavButton from '~/components/NavButton'
import PageHeader from '~/components/PageHeader'

export default {
  components: { Container, NavButton, PageHeader },

  props: {
    slug: String,
  },

  computed: {
    ...mapGetters(['getPost']),
    post() {
      return this.getPost(this.slug)
    },
  },
}
</script>

<template>
  <article class="note">
    <nav-button href="/notes" open></nav-button>
    <page-header :title="post.title" theme="primary" size="small">
      <p>{{ post.datePublishedDisplay }}</p>
      <p>
        {{ post.tags.join(', ') }}
      </p>
    </page-header>
    <section>
      <container size="small">
        <div v-html="post.html"></div>
      </container>
    </section>
  </article>
</template>
