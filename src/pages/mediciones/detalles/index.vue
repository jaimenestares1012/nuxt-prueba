<template>
   <div class="contenedor-detalles">
    <div class="contenedor-textos">
      <div class="contenedor-titulo-detalles">
          Medición por día
      </div>
      <div class="contenedor-subtitulo-detalles">
          Nombre Lista: <b> {{title}} </b> <br>
           Tienda filtrada:  <b>{{tienda}}  </b> <br>
           Lista creado por : <b> {{creador}}  </b>  
      </div>
      <div class="contenedor-detalles-button">
          <v-btn
              color="primary"
              dark
              @click="redirect()"
          >
              Regresar
          </v-btn>
          <v-btn
              color="primary"
              dark
              style="margin-left:10px"
              @click="resumen()"
          >
              Gráficos
          </v-btn>
      </div>
    </div>
  
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
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters('producto', ['poder', 'creador', 'title', 'tienda']),
   },
  props: {
  },
  components:{
  },
  methods:{
    redirect(){
       this.$router.push('/mediciones');
    },
    ira(url){
      window.open(url, '_blank')
    },
    async resumen(){
      this.$showSpinner(true);
      await this.$store.dispatch('producto/resumenes', this.poder);
      this.$showSpinner(false);
      this.$router.push('/mediciones/resumen');
    }
  }
}
</script>

<style>
.contenedor-detalles{
    padding-top: 30px;
} 
.contenedor-card-detalles{
    width: 95%;
    margin: auto;
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;
}
.contenedor-detalles-button{
  display: flex;
  margin: 0px auto;
  width: 200px;

}
.contenedor-titulo-detalles{
  color: #00498B;
  margin: 10px auto;
  font-size: 40px;
  text-align:center;
  font-weight: 600;
}
.contenedor-subtitulo-detalles{
  color: #00498B;
  margin: 10px auto;
  font-size: 20px;
  text-align: left;
}
.card-nativo-detalles{
  width: 700px;
  margin: 10px;
  padding-bottom: 20px;
}
/* .contenedor-detalles-button{
  margin: 0px auto;
  width: 100px;
} */
</style>