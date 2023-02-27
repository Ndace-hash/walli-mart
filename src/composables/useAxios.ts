import axios from 'axios'
// import type { Product } from '@/types/utils'

export const getProducts = async (endpoint: string) => {
  try {
    const { data } = await axios.get(endpoint)
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`AxiosError: ${error.message}`)
    } else console.log(error)
  }
}
