import router from './index'
import { useUserStore } from '@/stores/useUserStore'

router.beforeEach(async (to) => {
  const store = useUserStore()
  const token = localStorage.getItem('jwt-token')
  const WHITE_LIST = ['Root', 'Login', 'Register', 'ArticleId?']
  // is logged in
  if (store.isLoggedIn) {
    return true
  } else {
    if (token) {
      try {
        await store.getUserInfo()
        return true
      } catch {
        localStorage.removeItem('jwt-token')
        return '/'
      }
    } else {
      if (WHITE_LIST.includes(to.name as string)) {
        return true
      } else {
        return '/'
      }
    }
  }
})
