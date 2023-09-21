import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './router/permissions'

// createApp create a vue instance
const app = createApp(App)

// The error handler receives three arguments:
// the error, the component instance that triggered the error, and an information string specifying the error source type.
app.config.errorHandler = (err, vm, info) => {
  console.error('vue error: ', err)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
