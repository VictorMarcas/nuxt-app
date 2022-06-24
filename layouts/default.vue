<template>
  <div>
    <Header></Header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/sections/Header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
}
</script>
