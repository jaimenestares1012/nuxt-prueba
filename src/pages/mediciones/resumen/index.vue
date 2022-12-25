<template>
   <div class="contenedor-resumen-crear">
    <div class="contenedor-resumen-textos-crear">
      <div>
        <img :src="base64Dolar" alt="">
        <br> <br>
        <img :src="base64Producto" alt="">
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return{
       
    }
  },
  
  computed:{
   ...mapGetters('producto', [ 'base64Dolar', 'base64Producto']),
   },
  props: {
  },
  components:{
  },
 
  methods:{
  }
}
</script>

<style>
.productos-adicionar{
}
.contenedor-resumen-crear{
    padding-top: 30px;
} 
.contenedor-resumen-textos-crear{
  /* width: 750px;
  margin: 20px auto;
  background: #f9f3f3;
  border-radius: 20px;
  border: 1px solid #488FEF;
  padding: 20px; */
}
.contenedor-resumen-card-detalles{
    width: 95%;
    margin: auto;
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;
}
.contenedor-resumen-crear-button{
  margin: 0px auto;
  width: 160px;
}
.contenedor-resumen-botones-crear{
    width: 100px;
    display: flex;
    margin: auto ;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
}
.contenedor-resumen-titulo-crear{
  color: #00498B;
  margin: 10px auto;
  font-size: 40px;
  text-align:center;
  font-weight: 600;
}
.contenedor-resumen-subtitulo-crear{
  color: #00498B;
  margin: 10px auto;
  font-size: 20px;
  text-align: left;
}
.contenedor-resumen-crear-button{
  margin: 0px auto;
  width: 100px;
}
</style>