<template lang="pug">
.container
    transition(name="fade")
      form.register(v-if="status !== 'failure'", @submit.prevent='pay')
        .field
          label.label(for="email") Email
          .control.has-icons-left.has-icons-right
            input.input#email(type="email",
                              required,
                              placeholder="name@example.com",
                              name='email',
                              v-validate="'required|email'")
            span.icon.is-small.is-left
              i.fa.fa-envelope
        .field
            label.label(for="password") Password
            .control.has-icons-left.has-icons-right
                input.input#password(type="password",
                required,
                placeholder="your password",
                name='password',
                v-validate="'required|password'")
                span.icon.is-small.is-left
                    i.fa.fa-key

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import User from '@/components/User.vue'
import Hero from '@/components/Hero.vue'
import Sidebar from '@/components/Sidebar.vue'

const { mapGetters } = createNamespacedHelpers('user')

export default {
  components: {
    AppHero: Hero,
    AppCard: User,
  },
  computed: {
    ...mapGetters(['products', 'highprice'])
  },
  created () {
    this.$store.dispatch('product/setProductsRef')
  },
data() {
    return {
        status: null,
        actualStep: 0
    }
},
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
