<template>
  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
         <NuxtLogo /> 
        <VuetifyLogo /> 


      </v-card>
    </v-col>
  </v-row> -->
  <div class="contenedor-principal">
    <v-carousel >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="contenedor-subtitle">
      PRODUCTOS MÁS BUSCADOS
    </div>
    <div>
      <div>
         <v-card
          class="mx-auto"
          max-width="344"
          >
          <v-card-text>
            <div>Producto</div>
            <p class="text-h4 text--primary">
              Papas 1 kg
            </p>
            <p>Precio histórico</p>
            <div class="text--primary">
             grafico de historicos
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Ir a producto
            </v-btn>
          </v-card-actions>
          </v-card>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
        items: [
          {
            src: 'https://acceso.com.pe/wp-admin/images/jaime/fondo-prueba.png',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
  }
}
</script>
<style>
.contenedor-principal{
  max-width: 100%  !important;
  margin: auto;
  margin-bottom: 100px ;
}
.contenedor-subtitle{
  color: #000000;
  text-align: center;
  padding: 30px 0px;
}
</style>
