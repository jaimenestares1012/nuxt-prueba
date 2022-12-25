<template>
   <div class="contenedor-resumen-crear">
    <div class="contenedor-resumen-textos-crear">
      <div>
        <img :src="base64Dolar" alt="">
        <br> <br>
        <img :src="base64Producto" alt="">
        
      </div>
        <br>
        <br>
        <h1 style="text-align: center">Detalles</h1>
        <div class="contenedor-card-detalles">

        <v-card
          v-for="(item, key) in poder"
          :key="key"
          class="card-nativo-detalles" 
        >   
            <div class="titulo-medicion">
               {{item.fecha}}
            </div>
            <v-card-text class="text--primary ">
            <div style="font-size:17px">Precio total: <b> S/{{item.montoTotal}} </b> </div>
            <div>Número de productos : <b> {{item.numeroProductos}}  </b></div>
            </v-card-text>
            <table style=" width: 95%; margin:auto; text-align: center">
                <tr style="background: #488FEF; color: white">
                    <th scope="col" style="padding:4px">unidades</th>
                    <th scope="col">Precio</th>
                    <th scope="col"> Producto </th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"> Enlace </th>
                
                </tr>
                <tr v-for="(value, key) in item.productosXFecha" :key="key"> 
                    <td > {{ value.cantidad  }}</td>
                    <td style="padding:6px">S/ {{ value.precio }} </td>
                    <td> {{ value.producto }} </td>
                    <td style="padding:6px">S/ {{ value.sumaParcial }} </td>
                    <td style="padding:6px">  <v-btn color="primary" dark @click="ira(value.url)" > Ir </v-btn> </td>
                </tr>
            </table>
        </v-card>
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
   ...mapGetters('producto', [ 'base64Dolar', 'base64Producto', 'poder']),
   },
  props: {
  },
  components:{
  },
 
  methods:{
    ira(url){
      window.open(url, '_blank')
    },
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