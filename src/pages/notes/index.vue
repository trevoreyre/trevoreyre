<script>
import { mapGetters } from 'vuex'
import Container from '~/components/Container'
import NavButton from '~/components/NavButton'
import PageHeader from '~/components/PageHeader'

export default {
  components: { Container, NavButton, PageHeader },
  computed: mapGetters(['posts']),
}
</script>

<template>
  <div id="app">
    <nav-button href="/" open></nav-button>
    <page-header title="Notes" theme="primary" size="small"></page-header>
    <section>
      <container size="small">
        <div v-for="post in posts" :key="post.title">
          <nuxt-link :to="post.url">
            <h3>{{ post.title }}</h3>
          </nuxt-link>
        </div>
      </container>
    </section>
  </div>
</template>
