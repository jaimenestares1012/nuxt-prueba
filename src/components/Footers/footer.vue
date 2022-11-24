<template>
     <v-footer
      color="primary lighten-1"
      padless
    >
     <v-row
        no-gutters
      >
        <div>
          <img src="" alt="">
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
      console.log("changeButton");
      return 0
    },
    redirectHistorico(){
      console.log("redirectHistorico  ");
      return 0
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

</style>