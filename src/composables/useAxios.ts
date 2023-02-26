import axios, { AxiosError } from 'axios'

export const getProducts: (endpoint: string) => Product[] = async (endpoint: string) => {
  try {
    const { data } = await axios.get(endpoint)
    return data
  } catch (error: Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      throw new Error(`AxiosError: ${error.message}`)
    } else console.log(error)
  }
}
