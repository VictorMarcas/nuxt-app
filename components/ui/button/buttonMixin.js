export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'sm',
    },
  },
  data() {
    return {
      styles: {
        default:
          'inline-flex items-center justify-center px-10 py-2 space-x-2 leading-6 rounded-md',
        primary: {
          outline: 'text-indigo-500 border border-indigo-500',
          solid:
            'bg-indigo-500 text-white border-transparent hover:bg-indigo-500/80',
        },
        secondary: {
          outline: 'text-gray-600 border border-gray-300',
          solid:
            'bg-gray-600 text-white border-transparent hover:bg-gray-600/80',
        },
        sizes: {
          sm: 'text-xs',
          md: 'text-sm',
          lg: 'text-base',
        },
      },
    }
  },
  computed: {
    defaultTheme() {
      return this.styles.default
    },
    colorTheme() {
      if (this.border && this.color) return this.styles[this.color].outline
      return this.styles[this.color].solid
    },
    sizeTheme() {
      return this.styles.sizes[this.size]
    },
  },
}
