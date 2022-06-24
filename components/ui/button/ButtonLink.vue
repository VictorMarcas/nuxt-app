<template>
  <NuxtLink :to="to" :class="[defaultTheme, colorTheme, sizeTheme]">
    <slot></slot>
  </NuxtLink>
</template>
<script>
import buttonMixin from './buttonMixin'
export default {
  name: 'ButtonLink',
  mixins: [buttonMixin],
  props: {
    to: {
      type: String,
      default: '',
    },
  },
}
</script>
