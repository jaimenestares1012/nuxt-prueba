<template>
  <div>
    <producto :productos="productos"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import producto from '@/components/views/productos';
export default {
  components:{
    producto,
  },
  computed:{
    ...mapGetters('producto', ['productos']),
  },
  async mounted(){
    let paylodad = {
        "nombreProducto": "papa",
        "categoria": "abarrotes",
        "numeroDias": "40"
      }
    await this.$store.dispatch('producto/getProducto',paylodad);
  }
}
</script>

<style>

</style>