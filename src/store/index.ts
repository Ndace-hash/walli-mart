import { reactive } from 'vue'
import type { Product } from '@/types/utils'

const store = reactive({
  cart: [] as Product[]
})

export default store
