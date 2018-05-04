<template lang="pug">
  .container
    p.title <strong class="has-text-info">User</strong> Profile
    p.subtitle Sign in or Register
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapActions } = createNamespacedHelpers('user')

    export default {
        name: 'User',
        props: {
            name: {
                type: Object,
                required: true
            },
            email: {
                type: Text,
                required: true
            }
        },
        methods: {
            ...mapActions(['addItem'])
        }
    }
</script>
