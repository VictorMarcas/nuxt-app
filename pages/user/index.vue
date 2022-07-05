<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserPage',
  middleware: 'auth',
  computed: {
    ...mapState('auth', ['user']),
  },
  mounted() {
    window.console.log(':::user', this.user)
  },
}
</script>
