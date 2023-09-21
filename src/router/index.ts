// vite-plugin-vue-layouts
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'

// Creates a Router instance that can be used by a Vue app.
const router = createRouter({
  extendRoutes: routes => setupLayouts(routes),
  // Creates an HTML5 history. Most common history for single page applications.
  // 部署应用时的基本 URL
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
