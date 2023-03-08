import { useRouter } from 'vue-router'
export const goToProductPage = () => {
  const viewProduct = (id: number) => {
    const router = useRouter()
    router.push({
      name: 'productDetails',
      params: {
        id
      }
    })
  }

  return { viewProduct }
}
