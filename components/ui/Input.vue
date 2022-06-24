<template>
  <div class="relative">
    <label
      v-if="label"
      :for="id"
      class="absolute inline-block px-2 text-xs text-gray-500 bg-white left-4 top-0 -mt-[1ex] pointer-events-none"
      >{{ label }}</label
    >
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="value"
      :class="[styles.default]"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      styles: {
        default:
          'px-4 leading-4 py-3 rounded-md border border-gray-200 text-gray-700 w-full text-xs bg-white focus:ring-indigo-500',
      },
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
