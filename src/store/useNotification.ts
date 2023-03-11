import { reactive } from 'vue'
import type { Product } from '../types/utils'

const state = reactive({
  visible: false,
  product: null as Product | null,
  addTo: ''
})

export default state
