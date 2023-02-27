import { useRouter } from 'vue-router'
const router = useRouter()
export const viewProduct = (id: number) => {
  router.push({
    name: 'productDetails',
    params: {
      id
    }
  })
}
