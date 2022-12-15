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
      </div>
    </div>
    
    <div class="contenedor-card-detalles">
     <v-card
          v-for="(item, key) in poder"
          :key="key"
          class="card-nativo-detalles" 
        > 
            <!-- <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
           
            </v-img> -->
            
            <div class="titulo-medicion">
               {{item.fecha}}
            </div>
            <v-card-text class="text--primary ">
            <div><b>Precio total: {{item.montoTotal}} </b> </div>
            <div><b>Número de productos : {{item.numeroProductos}}  </b></div>
            </v-card-text>
            <table style=" width: 95%; margin:auto; text-align: center">
                <tr style="background: #488FEF; color: white">
                    <th scope="col"># unidades</th>
                    <th scope="col">Precio</th>
                    <th scope="col"> Producto </th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"> Enlace </th>
                
                </tr>
                <tr v-for="(value, key) in item.productosXFecha" :key="key"> 
                    <td>{{ value.cantidad  }}</td>
                    <td>S/ {{ value.precio }} </td>
                    <td> {{ value.producto }} </td>
                    <td>S/ {{ value.sumaParcial }} </td>
                    <td>  <v-btn color="primary" dark @click="ira(value.url)" > Ir </v-btn> </td>
                </tr>
            </table>
            <div class="container-button">
              <v-btn
                  color="primary"
                  dark
                  @click="redirect(item)"
              >
                  Ver evolución
              </v-btn>
            </div>
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
  margin: 0px auto;
  width: 160px;
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
}
.contenedor-detalles-button{
  margin: 0px auto;
  width: 100px;
}
</style>