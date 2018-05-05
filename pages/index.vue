<template lang="pug">
  .container
    .section
      app-hero
    .section
      div(class="field is-grouped is-grouped-centered")
          p(class="control")
            nuxt-link(v-if="user != undefined" class="button is-link is-outlined" to="/account" v-text="user.email")
            nuxt-link(v-else class="button is-link" to="/account/login") Login
          p(class="control")
            nuxt-link(v-if="user === undefined || anonymus" class="button is-link is-outlined" to="/account/signup") Sign Up
            nuxt-link(v-else class="button is-link is-outlined" to="/account/settings") Profile Settings
    .section.capsule
      app-sidebar(:pricerange.sync="highprice")
      transition-group.content(name="items" tag="div")
        app-card(v-for="(item, index) in products",
          :key="index",
          :item="item",
          :index="index")
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Sidebar from '@/components/Sidebar.vue'

const { mapGetters } = createNamespacedHelpers('product')

export default {
  components: {
    AppHero: Hero,
    AppCard: Card,
    AppSidebar: Sidebar
  },
  computed: {
    ...mapGetters(['products', 'highprice'])
  },
  created () {
    this.$store.dispatch('product/setProductsRef')
  }
}
</script>

<style lang="stylus" scoped>
  .content
    /*no grid support*/
    float right
    width 79.7872%
    /* grid */
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 1rem
    padding 0
</style>
