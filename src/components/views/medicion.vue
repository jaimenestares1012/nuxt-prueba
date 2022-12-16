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
     
        <v-card
          v-for="(item, key) in data"
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
            <div><b>Categoría: </b>{{item.categoria}}</div>
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
        this.$router.push('/mediciones/crear');
      }
    },
    computed:{

    },
    data(){
        return{
            data :[
              {
                "nombreProducto": "555",
                "categoria": "abarrotes",
                "title": "Productos Clásicos",
                "creador": "Administrador",
                "tienda": "won",
                "numeroDias": "13",
                "productosList": [
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Arroz Extra Paisana Bolsa 1 kg",
                    "cantidad": 10
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Tortillas de Maíz Queso Atrevido Doritos 210g",
                    "cantidad": 2
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Galletas Danesas Castillos Famosos 340g",
                    "cantidad": 4
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Pastina Codo Rayado Don Vittorio 500g",
                    "cantidad": 3
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Fideo Spaghetti Nicolini 950g",
                    "cantidad": 4
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Lenteja Costeño Bolsa 500 g",
                    "cantidad": 6
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Garbanzos Costeño Bolsa 500 g",
                    "cantidad": 2
                  },
                  {
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Pollo Entero sin Menudencia x kg",
                    "cantidad": 6
                  },
                  {
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Carne Molida de Pavita San Fernando Bolsa 500 g",
                    "cantidad": 2
                  }
                  ,{
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Nuggets de Pollo con Quinua Avinka Bolsa 300 g",
                    "cantidad": 6
                  }
                ]
              },
              {
                "nombreProducto": "555",
                "categoria": "abarrotes",
                "tienda": "won",
                "title": "Productos dietéticos",
                "creador": "Administrador",
                "numeroDias": "13",
                "productosList": [
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Arroz Extra Paisana Bolsa 1 kg",
                    "cantidad": 10
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Tortillas de Maíz Queso Atrevido Doritos 210g",
                    "cantidad": 2
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Galletas Danesas Castillos Famosos 340g",
                    "cantidad": 4
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Pastina Codo Rayado Don Vittorio 500g",
                    "cantidad": 3
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Fideo Spaghetti Nicolini 950g",
                    "cantidad": 4
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Lenteja Costeño Bolsa 500 g",
                    "cantidad": 6
                  },
                  {
                    "typeCategory": "abarrotes",
                    "prod": "Garbanzos Costeño Bolsa 500 g",
                    "cantidad": 2
                  },
                  {
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Pollo Entero sin Menudencia x kg",
                    "cantidad": 6
                  },
                  {
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Carne Molida de Pavita San Fernando Bolsa 500 g",
                    "cantidad": 2
                  }
                  ,{
                    "typeCategory": "carnes-aves-y-pescados",
                    "prod": "Nuggets de Pollo con Quinua Avinka Bolsa 300 g",
                    "cantidad": 6
                  }
                ]
              }
            ]
        }
    }
  
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