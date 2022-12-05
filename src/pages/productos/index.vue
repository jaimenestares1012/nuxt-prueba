<template>
  <div>
    productos {{productos}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters('producto', ['productos']),
  },
  async mounted(){
    console.log("awa");
    console.log("this.$store.", await this.$store.dispatch);
    let paylodad = {
        "nombreProducto": "papa",
        "categoria": "abarrotes"
      }
    await this.$store.dispatch('producto/getProducto',paylodad);
  }
}
</script>

<style>

</style>