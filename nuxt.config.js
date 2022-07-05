export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'static',
  head: {
    title: 'Enterprise',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  publicRuntimeConfig: {
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    supabaseBaseUrl: process.env.SUPABASE_BASE_URL,
  },
  privateRuntimeConfig: {
    maintenance: process.env.MAINTENANCE_MODE,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/supabase.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // tailwindcss
    '@nuxt/postcss8',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  // Google Font config
  googleFonts: {
    families: {
      Manrope: {
        wght: [300, 400, 700, 800],
      },
      'Montserrat+Alternates': {
        wght: [700],
      },
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    download: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next',
    '@nuxt/image',
  ],
  // Router config
  router: {
    middleware: ['auth', 'maintenance'],
    prefetchLinks: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  eslint: { cache: false },
}
