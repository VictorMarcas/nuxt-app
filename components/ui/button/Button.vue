<template>
  <button :type="type" :class="[defaultTheme, colorTheme, sizeTheme]">
    <slot></slot>
  </button>
</template>
<script>
import buttonMixin from './buttonMixin'
export default {
  name: 'Button',
  mixins: [buttonMixin],
  props: {
    type: {
      type: String,
      default: null,
    },
  },
}
</script>
