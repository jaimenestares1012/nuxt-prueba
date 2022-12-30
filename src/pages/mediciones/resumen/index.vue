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
        <div style="margin:auto; width: 200px">
          <v-btn
              color="primary"
              dark
              style=""
              width="200px"
              v-if="!condicionMuestra"
              @click="verdetalles()"
            >
              Ver detalles
          </v-btn>
        </div>
        <!-- {{poderDetalle}} -->
        <h1 v-if="condicionMuestra" style="text-align: center; margin:30px 0px ">Detalle por grupo</h1>
        <div v-if="condicionMuestra" class="contenedor-card-detalles">
           <table style=" width: 120%; margin:auto; text-align: center; margin-bottom:50px">
              <tr style="background: #488FEF; color: white">
                  <th scope="col" style="padding:4px">unidades</th>
                  <th scope="col" v-for="(value, key) in arrayPoder" :key="key">{{value.fecha}}</th>
              </tr>
              <tr>
                  <td > Precio total (S/)</td>
                  <td :style="{ background: value.background }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key">{{value.montoTotal}} </td>
              </tr>
               <tr>
                  <td > Var ( % )</td>
                  <td :style="{ background: value.background }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key">{{value.varPorcentual}}  </td>
              </tr>
               <tr>
                  <td > Var (S/)</td>
                  <td :style="{ background: value.background }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key"> {{value.varMonetario}} </td>
              </tr>
              <tr>
                  <td > -- </td>
                  <td  style="padding:5px" v-for="(value, key) in arrayPoder" :key="key"> --  </td>
              </tr>
              <tr>
                  <td > Precio (S/)</td>
                  <td :style="{ background: value.variacionDolarBackground }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key"> {{value.ultimoPrice}} </td>
              </tr>
              <tr>
                  <td > Var (%)</td>
                  <td :style="{ background: value.variacionDolarBackground }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key"> {{value.variacionDolar}} </td>
              </tr>
          </table>

          
        </div>
        <h1 v-if="condicionMuestra" style="text-align: center; margin:30px 0px ">Detalle por producto</h1>
        <div v-if="condicionMuestra" class="contenedor-card-detalles">
          <table style=" width: 120%; margin:auto; text-align: center; margin-bottom:50px">
              <tr  style="background: #488FEF; color: white">
                 <th  style="padding:4px"> Fechas </th>
                  <th v-for="(value, key2) in arrayPoder[0].productosXFecha" :key="key2"  style="padding:4px">{{value.producto}}</th>
                  <!-- <th scope="col" v-for="(value2, key3) in value.productosXFecha" :key="key3">{{value2}}</th> -->
              </tr>
              <tr v-for="(value, key2) in arrayPoder" :key="key2">
                  <td  style="padding:4px">{{value.fecha}}</td>
                  <td v-for="(value2, key3) in value.productosXFecha" :key="key3"  :style="{ background: value2.background }" > 
                    <b>(S/): </b> {{value2.variacionMonetariaProducto}} <br>
                    <b>(%):  </b> {{value2.variacionPorcentual}}
                  </td>
                  <!-- <td :style="{ background: value.background }" style="padding:5px" v-for="(value, key) in arrayPoder" :key="key">{{value.montoTotal}} </td> -->
              </tr>
          </table>
        </div>

        <div v-if="condicionMuestra" class="contenedor-card-detalles">
          <v-card
              v-for="(item, key) in poderDetalle"
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
                        <td :style="{ background: value.background }" > {{ value.cantidad  }}</td>
                        <td  :style="{ background: value.background }" style="padding:6px">S/ {{ value.precio }} </td>
                        <td :style="{ background: value.background }"> {{ value.producto }} </td>
                        <td :style="{ background: value.background }"  style="padding:6px">S/ {{ value.sumaParcial }} </td>
                        <td  :style="{ background: value.background }" style="padding:6px">  <v-btn color="primary" dark @click="ira(value.url)" > Ir </v-btn> </td>
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
      
        condicionMuestra: false
    }
  },
  
  computed:{
   ...mapGetters('producto', [ 'base64Dolar', 'base64Producto', 'poder', 'bodyPoder', 'poderDetalle']),

    arrayPoder(){
      console.log("this.poderDetalle.slice(12)", this.poderDetalle.slice(0, -2));
      return this.poderDetalle.slice(-0, -2)
    },
    background() {
      console.log("arrayPoder", this.arrayPoder);
      return "green"
    },
    arrayNombre(){
      return this.poderDetalle[0].productosXFecha
    }
  },
  props: {
  },
  components:{
  },
 
  methods:{
    ira(url){
      window.open(url, '_blank')
    },
    async verdetalles(){
      this.$showSpinner(true);
      await this.$store.dispatch('producto/getReporte', this.bodyPoder);
      this.$showSpinner(false);
      this.condicionMuestra = true
    }

  }
}
</script>

<style>
.productos-adicionar{
}
.contenedor-resumen-crear{
    padding-top: 30px;
    padding-bottom: 40px;
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