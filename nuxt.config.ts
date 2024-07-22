import { ElementPlus } from "@element-plus/icons-vue";
import { icons } from "@element-plus/icons-vue/global";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ["@/assets/global.css"],
  modules: ["@nuxt/ui", "@element-plus/nuxt"],
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})




