export default () => {
  const fullEnvName = process.env.NODE_ENV || 'dev';
  const url = process.env.BASE_URL || 'http://localhost';
  const port = process.env.PORT || 3000;
  const authPort = process.env.AUTH_PORT || 3000;
  const baseUrl = port ? `${url}:${port}` : url;
  const config = {
    publicRuntimeConfig: {
      environment: fullEnvName,
      baseUrl,
      port,
      authPort
    },
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    server: {
      port: 3001,
      host: '0.0.0.0'
    },
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'sportify_frontend',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    colorMode: {
      preference: 'system', // default value of $colorMode.preference
      fallback: 'light', // fallback value if not system preference found
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      storageKey: 'nuxt-color-mode',
      classSuffix: ''
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/main',
      '~/plugins/auth',
      '~/plugins/api',
      '~/plugins/validation',
      '~/plugins/i18n',
      '~/plugins/store',
      '~/plugins/presenter',
      '~/plugins/cache',
      '~/plugins/notification',
      '~/plugins/bus',
      '~/plugins/context',
      '~/plugins/directives'
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
      {
        path: '~/components',
        extensions: ['vue'],
        ignore: ['~components/pages', '**/_**']
      },
      {
        path: '~/business',
        extensions: ['vue']
      }
    ],
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      '@nuxt/postcss8'
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      [
        '@nuxtjs/i18n',
        {
          locales: [
            {
              name: 'Russian',
              code: 'ru',
              iso: 'ru-RU',
              file: 'ru.js'
            },
            {
              name: 'English',
              code: 'en',
              iso: 'en-US',
              file: 'en.js'
            }
          ],
          strategy: 'no_prefix',
          langDir: 'lang/',
          defaultLocale: 'en',
          silentTranslationWarn: true
        }
      ]
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
    // router: {
    //   middleware: 'route-guard'
    // }
  };
  return config;
};
