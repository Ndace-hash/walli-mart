<template>
  <div>
    {{ product }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      product: null,
      error: null,
      loading: false
    }
  },
  beforeMount() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      try {
        const { data } = await axios({
          url: `https://fakestoreapi.com/products/${this.$route.params.id}`
        })
        this.product = await data
        console.log(data)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>
