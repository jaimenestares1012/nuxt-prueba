<template>
     <v-footer
      color="primary lighten-1"
      padless
    >
     <v-row
        no-gutters
      >
        <div>
          <span class="texto-logo">
            Tesis II
          </span>
        </div>
      </v-row>
      <v-row
        justify="end"
        no-gutters
      >
        <v-btn
          color="white"
          text
          @click="redirectInicio"
          rounded
          class="my-2"
        > Inicio
        </v-btn>
        <v-btn
          color="white"
          text
          @click="redirectHistorico"
          rounded
          class="my-2"
        > Histórico
        </v-btn>
        <v-btn
          color="white"
          text
          @click="redirectNosotros"
          rounded
          class="my-2"
        > Nosotros
        </v-btn>
        <v-btn
          color="white"
          text
          @click="redirectProductos"
          rounded
          class="my-2"
        > Productos
        </v-btn>
      </v-row>
    </v-footer>
</template>

<script>
export default {
  components:{

  },
  computed:{
    
  },
  methods:{
    redirectInicio(){
      this.$router.push('/inicio');
    },
    redirectHistorico(){
      this.$router.push('/historico');
    },
    redirectNosotros(){
      this.$router.push('/nosotros');
    },
    redirectProductos(){
      this.$router.push('/productos');
    }
  },
  data () {
    return {
      links: [
        'Inicio',
        'Nosotros',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }
}
}
</script>

<style>
.texto-logo{
  text-align: center;
  margin-left: 30px;
  font-size: 20px ;
  color: #FFFFFF;
}

</style>