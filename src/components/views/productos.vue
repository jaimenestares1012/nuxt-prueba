<template>
  <div class="contenedor-productos">
        <div class="contenedor-botones">
            <div style="margin: auto">
                <v-btn depressed color="info" @click="asignacion(5)" > 5 </v-btn>
            </div>
            <div style="margin: auto">
                <v-btn depressed color="info" @click="asignacion(10)" > 10 </v-btn>
            </div>
            <div style="margin: auto">
                <v-btn depressed color="info" @click="asignacion(15)" > 15 </v-btn>
            </div>
            <div style="margin: auto">
                <v-btn depressed color="info" @click="asignacion(20)" > 20 </v-btn>
            </div>
            <div style="">
                ==> {{dias}} Últimos Días
            </div>
            
        </div>
        <div class="contenedor-buscador">
            <v-text-field
                v-model="choose"
                outlined
                dense
                class="text-field"
                label="Producto a buscar"
                color="orange"
            />
            <v-btn depressed color="error" @click="chooseProduct(choose)" > Buscar </v-btn>
        </div>
       
    <div class="contenedor-card-productos">
        
        <v-card
            v-for="(item, key) in productos"
            :key="key"
            class="card-nativo" 
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
           
            </v-img>
            <v-card-title>{{item.nombre}}</v-card-title>

            <v-card-text class="text--primary">
            <div><b>Tienda: </b>{{item.tienda}}</div>

            <div><b>Categoría: </b>{{item.categoria}}</div>
            </v-card-text>
            <table style=" width: 90%; margin:auto; text-align: center">
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio</th>
                
                </tr>
                <tr v-for="(value, key) in item.listPrecios[0]" :key="key"> 
                    <td>{{ key }}</td>
                    <td>S/ {{ value }} </td>
                </tr>
            </table>
            <v-card-actions>
            <v-btn
                color="orange"
                text
                @click="redirect(item.url)"
            >
                Ir a comprar
            </v-btn>

            </v-card-actions>
        </v-card>
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
        productos: { type: Array, default: () => []  },
    },
    methods:{
        redirect(url){
            window.open(url, '_blank')
        },
        async chooseProduct(choose){
            let paylodad = {
                "nombreProducto": choose,
                "categoria": "abarrotes",
                "numeroDias": this.dias
            }
            await this.$store.dispatch('producto/getProducto',paylodad);
        },
        asignacion(numero){
            this.dias = numero
            console.log("this.dias", this.dias);
        }   
    },
    computed:{

    },
    data(){
        return{
            choose: null,
            dias: 10
        }
    }
  
}
</script>
    
<style>
.contenedor-productos{
    padding-top: 50px;
}
.contenedor-card-productos{
    width: 95%;
    margin: auto;
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;
}
.card-nativo{
    width: 300px;
    margin: 10px;
}
.contenedor-buscador{
    width: 500px;
    display: flex;
    margin: auto;
}
.contenedor-botones{
    width: 420px;
    display: flex;
    margin: auto ;
    margin-bottom: 10px;
    margin-top: -10px;
    align-items: center;
}

</style>