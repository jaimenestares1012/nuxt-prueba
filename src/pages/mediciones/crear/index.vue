<template>
   <div class="contenedor-crear">
    <div class="contenedor-textos-crear">
      <div class="contenedor-titulo-crear">
          {{ tittle }}
      </div>
       <form>
            <div v-if="existeBolsa">
              <v-text-field
                v-model="nombreCanasta"
                :error-messages="nombreCanastaErrors"
                label="Título de su canasta"
                outlined      
                dense
                color="#488FEF"
                background-color="#E6E6E6"
                required
                @input="$v.nombreCanasta.$touch()"
                @blur="$v.nombreCanasta.$touch()"
              ></v-text-field>
              <v-select
                v-model="tiendaSelect"
                :items="listTiendas"
                item-text="nombre"
                item-value="id"
                :error-messages="tiendaErrors"
                outlined
                color="#488FEF"
                background-color="#E6E6E6"
                dense
                label="Tienda de su preferencia"
                required
                @change="handleTiendaPreference"
                @blur="$v.tiendaSelect.$touch()"
              ></v-select>
            </div>
           
            <!-- <hr style="border: 1px solid red; margin:20px -20px"> -->
            <div class="productos-adicionar"  v-if="!existeBolsa">
              <v-select
                  v-model="categoriaSelect"
                  :items="categoriaFiltrada"
                  item-text="nombre"
                  item-value="id"
                  color="#488FEF"
                  background-color="#E6E6E6"
                  :error-messages="categoriaSelectErrors"
                  label="Categoría"
                  outlined
                  dense
                  required
                  @change="$v.categoriaSelect.$touch()"
                  @blur="$v.categoriaSelect.$touch()"
              ></v-select>
              <v-text-field
                v-model="cantidad"
                :error-messages="cantidadErrors"
                label="Ingrese la cantidad deseada de este producto"
                outlined      
                dense
                color="#488FEF"
                background-color="#E6E6E6"
                required
                @input="$v.cantidad.$touch()"
                @blur="$v.cantidad.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="producto"
                :error-messages="productoErrors"
                label="Ingrese el nombre de su producto"
                outlined      
                dense
                color="#488FEF"
                background-color="#E6E6E6"
                required
                @input="$v.producto.$touch()"
                @blur="$v.producto.$touch()"
              ></v-text-field>
              <div style="margin-left: auto; width: 100px">
                <v-btn
                  outlined
                  color="indigo"
                  @click="buscarProducto"
                >
                    Buscar
                </v-btn>
              </div>
              <div>
                 <div class="contenedor-card-detalles">    
                    <v-card
                        v-for="(item, key) in productos"
                        :key="key"
                        class="card-nativo" 
                    >
                        <v-card-text class="text--primary">
                        <div style="text-align: center"> <b> {{item.nombre}} </b> </div> 
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
                       
                        <div class="contenedor-botones-crear">
                          <v-btn
                              color="orange"
                              
                              outlined
                              @click="redirect(item)"
                          >
                              Añadir
                          </v-btn>
                        </div>
                    </v-card>
                </div>
              </div>
            </div>
        </form>
      <div class="contenedor-detalles-button" v-if="existeBolsa">
          <v-btn
              color="primary"
              dark
             @click="submit"
          >
              registrar
          </v-btn>
      </div>
    </div>
   
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex';
export default {
   mixins: [validationMixin],
  data(){
    return{
        usuario: "usuarioGenerico",
        idCanasta : "",
        cantidad : null,
        idUsuario: 1341111123,
        name: '',
        nombreCanasta: '',
        condicion: false,
        tiendaSelect: null,
        producto: null,
        categoriaSelect: null,
        categoriaFiltrada: [],
        arrayProductos: []
    }
  },
  validations: {
      name: { required, maxLength: maxLength(10) },
      nombreCanasta: { required, email },
      tiendaSelect: { required },
      cantidad: { required, numeric },
      categoriaSelect: { required },
      producto: {required}, 
      checkbox: {
        checked (val) {
          return val
        },
      },
    },
  computed:{
    ...mapGetters('producto', [ 'catalogue', 'productos', 'bolsa']),
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      tiendaErrors () {
        const errors = []
        if (!this.$v.tiendaSelect.$dirty) return errors
        !this.$v.tiendaSelect.required && errors.push('Este campo es requerido')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Este campo es requerido')
        console.log("errors", errors);
        return errors
      },
      categoriaSelectErrors () {
        const errors = []
        if (!this.$v.categoriaSelect.$dirty) return errors
        !this.$v.categoriaSelect.required && errors.push('Este campo es requerido')
        console.log("errors", errors);
        return errors
      },
      nombreCanastaErrors () {
        const errors = []
        if (!this.$v.nombreCanasta.$dirty) return errors
        !this.$v.nombreCanasta.required && errors.push('Este campo es requerido')
        return errors
      },
      tittle(){
        return this.existeBolsa ?  "Crea tu canasta" : "Ya haz creado tu canasta, ahora añade algunos productos"
      },
      productoErrors(){
        const errors = []
        if (!this.$v.producto.$dirty) return errors
        !this.$v.producto.required && errors.push('Este campo es requerido')
        return errors
      },
      cantidadErrors(){
        const errors = []
        if (!this.$v.cantidad.$dirty) return errors
        !this.$v.cantidad.required && errors.push('Este campo es requerido')
        !this.$v.cantidad.numeric && errors.push('Este campo debe ser númerico')
        return errors
      },
      listTiendas (){
        const array = this.catalogue.filter(item => item.idTienda == 'tiendas' )
        return array[0] ?  array[0].categorias : []
      },
      existeBolsa(){
        return this.bolsa.title ? false : true
      }
      
   },
  props: {
  },
  components:{
  },
  async mounted(){
      const jwt = this.$route.query.key;
      this.idCanasta =  jwt
      this.$store.commit('producto/SET_CLEAR');
      this.$showSpinner(true);
      let paylodad = {
          "colecciones":["won", "metro", "tottus", "tiendas"],
          "categorias": "categorias",
          "tipo": "1"
        }
      await this.$store.dispatch('producto/getCatalogos',paylodad);
      await this.$store.dispatch('producto/datosCanasta', this.idCanasta);
      console.log("bolsa", this.bolsa);
      if (this.bolsa.title) {
        this.tiendaSelect = this.bolsa.tiendaSelect
        this.categoriaFiltrada = []
        console.log("this.catalogue.", this.catalogue);
        console.log("this.catalogue.filter(item => item.idTienda == this.tiendaSelect )[0].", this.catalogue.filter(item => item.idTienda == this.tiendaSelect ));
        try {
          console.log("this.tiendaSelect", this.tiendaSelect);
          this.categoriaFiltrada = this.catalogue.filter(item => item.idTienda == "won")[0].categorias
        } catch (error) {
          this.categoriaFiltrada = []
        }
      }
      this.$showSpinner(false);
  },
  methods:{
    submirForm(){
    //    this.$router.push('/mediciones');
    },
    async submit () {
        this.$v.$touch()
        if (this.nombreCanasta && this.tiendaSelect ) {
          this.$showSpinner(true);
          console.log("solo así se puede avanzaer");
          const body = {
              "title": this.nombreCanasta,
              "tiendaSelect": this.tiendaSelect,
              "creador": this.usuario,
              "idCreador":this.idUsuario,
              "_id": this.idCanasta
          }
          console.log("body", body);
          await this.$store.dispatch('producto/registrarBolsa', body);
          await this.$store.dispatch('producto/datosCanasta', this.idCanasta);
          this.$showSpinner(false);
        }
      },
    handleTiendaPreference(){
        this.categoriaFiltrada = []
        this.categoriaFiltrada = this.catalogue.filter(item => item.idTienda == this.tiendaSelect )[0].categorias
    },
    async buscarProducto(){
      this.$v.$touch()
      if (this.categoriaSelect  && this.producto) {
        this.$showSpinner(true);
        console.log("this.producto,", this.producto);
        console.log("this.categoriaSelect", this.categoriaSelect);
        let paylodad = {
            "nombreProducto": this.producto,
            "categoria": this.categoriaSelect,
            "numeroDias": "10",
        }
        await this.$store.dispatch('producto/getProducto',paylodad);
        this.$showSpinner(false);
      }
    },
    async redirect(value){
      this.$showSpinner(true);
        console.log("value", value);
        let paylodad = {
            "_id": this.idCanasta,
            "cantidad": this.cantidad,
            "typeCategory": value.categoria,
            "tienda": value.tienda,
            "prod": value.nombre,
        }
        console.log("<------------------------>");
        console.log("paylodad", paylodad);
        const response = await this.$store.dispatch('producto/insertProductos',paylodad);
        if (response == "correct") {
          console.log("COREEEESTTTTTTTTTTTTTTTP");
          this.categoriaSelect =  null
          this.producto= null
          this.cantidad = null
        }
        console.log("RESPONSEEEEEEEEEEEEEEEEE", response);
        this.$showSpinner(false);
    }
  }
}
</script>

<style>
.productos-adicionar{
}
.contenedor-crear{
    padding-top: 30px;
} 
.contenedor-textos-crear{
  width: 750px;
  margin: 20px auto;
  background: #f9f3f3;
  border-radius: 20px;
  border: 1px solid #488FEF;
  padding: 20px;
}
.contenedor-card-detalles{
    width: 95%;
    margin: auto;
    display: flex; 
    justify-content: center; 
    flex-wrap: wrap;
}
.contenedor-crear-button{
  margin: 0px auto;
  width: 160px;
}
.contenedor-botones-crear{
    width: 100px;
    display: flex;
    margin: auto ;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
}
.contenedor-titulo-crear{
  color: #00498B;
  margin: 10px auto;
  font-size: 40px;
  text-align:center;
  font-weight: 600;
}
.contenedor-subtitulo-crear{
  color: #00498B;
  margin: 10px auto;
  font-size: 20px;
  text-align: left;
}
.contenedor-crear-button{
  margin: 0px auto;
  width: 100px;
}
</style>