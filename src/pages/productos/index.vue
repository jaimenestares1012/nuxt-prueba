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
    console.log("awa");
    console.log("this.$store.", await this.$store.dispatch);
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