<template>
  <div class="contenedor-medicion">
    <div class="contenedor-textos">
      <div class="contenedor-titulo-medicion">
          Bienvenido a la medición de precios 
      </div>
      <div class="contenedor-subtitulo-medicion">
          Aquí podrás ver, cómo varían los precios de tu canasta
      </div>
      <div class="contenedor-medicion-button">
          <v-btn
              color="primary"
              dark
              @click="redirectCrear()"
          >
              Crear Canasta
          </v-btn>
      </div>
    </div>
    
    <div class="contenedor-card-medicion">
      <!-- {{dataAdministrador.data}} -->
        <v-card
          v-for="(item, key) in dataAdministrador"
          :key="key"
        
          class="card-nativo-medicion" 
        > 
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
           
            </v-img>
            
            <div class="titulo-medicion">
               {{item.title}}
            </div>
            <v-card-text class="text--primary ">
            <div><b>Tienda: </b>{{item.tienda}}</div>
            <div><b> Creación: {{item.creador}}  </b></div>
            </v-card-text>
            <table style=" width: 95%; margin:auto; text-align: center">
                <tr style="background: #488FEF; color: white">
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio</th>
                    <th scope="col"> Cantidad </th>
                
                </tr>
                <tr v-for="(value, key) in item.productosList" :key="key"> 
                    <td>{{ value.typeCategory  }}</td>
                    <td>{{ value.prod }} </td>
                    <td>{{ value.cantidad }} </td>
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
     <div class="contenedor-card-medicion">
      <!-- {{dataAdministrador.data}} -->
        <v-card
          v-for="(item, key) in dataUsuario"
          :key="key"
        
          class="card-nativo-medicion" 
        > 
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
           
            </v-img>
            
            <div class="titulo-medicion">
               {{item.title}}
            </div>
            <v-card-text class="text--primary ">
            <div><b>Tienda: </b>{{item.tienda}}</div>
            <div><b> Creación: {{item.creador}}  </b></div>
            </v-card-text>
            <table style=" width: 95%; margin:auto; text-align: center">
                <tr style="background: #488FEF; color: white">
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio</th>
                    <th scope="col"> Cantidad </th>
                
                </tr>
                <tr v-for="(value, key) in item.productosList" :key="key"> 
                    <td>{{ value.typeCategory  }}</td>
                    <td>{{ value.prod }} </td>
                    <td>{{ value.cantidad }} </td>
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
    props: {
        poder: { type: Array, default: () => []  },
    },
    methods:{
      async redirect(item){
        this.$showSpinner(true);
        const response  = await this.$store.dispatch('producto/getPoderAquisitivo', item);
        this.$router.push('/mediciones/detalles');
        this.$showSpinner(false);
      },
      redirectCrear(){
        const prueba = 221323
        this.$router.push(`/mediciones/crear/?key=${prueba}`);
      }
    },
    computed:{
      ...mapGetters('producto', [ 'catalogue' ]),

      dataAdministrador(){
        const array = this.catalogue.filter(item => item.creador == 'administrador' )
        // console.log("array[0]", array[0].data);
        return array[0] ?  array[0].data : []
      },
      dataUsuario(){
        const array = this.catalogue.filter(item => item.creador == 'usuarioGenerico' )
        // console.log("array[0]", array[0].data);
        return array[0] ?  array[0].data : []
      }

    },
    data(){
        return{
        }
    },
    async mounted(){
      this.$store.commit('producto/SET_CLEAR');
      this.$showSpinner(true);
      let paylodad = {
          "colecciones":["administrador", "usuarioGenerico"],
          "categorias": "bolsaProductos",
          "tipo": "2",
        }
      await this.$store.dispatch('producto/getCatalogos',paylodad);
      this.$showSpinner(false);
  },
  
}
</script>
    
<style>
.contenedor-medicion{
    padding-top: 30px;
} 
.contenedor-card-medicion{
    width: 95%;
    margin: auto;
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;
}
.contenedor-titulo-medicion{
  color: #00498B;
  margin: 10px auto;
  font-size: 40px;
  text-align:left;
  font-weight: 600;
}
.contenedor-textos{
  width: 500px;
  margin: 20px auto;
  background: #f9f3f3;
  border-radius: 20px;
  border: 1px solid #488FEF;
  padding: 20px;
}
.contenedor-subtitulo-medicion{
  color: #00498B;
  margin: 10px auto;
  font-size: 20px;
  text-align: left;
}
.card-nativo-medicion{
  width: 550px;
  margin: 10px;
}
.contenedor-medicion-button{
  margin: 0px auto;
  width: 160px;
}
.titulo-medicion{
  margin-top: 10px ;
  text-align: center;
  font-size: 30px;
}
table, th, td {
  border: 1px solid rgb(67, 89, 198);
  border-collapse: collapse;
}
.container-button{
  margin: 20px auto;
  width: 155px;
}

</style>