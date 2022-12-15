<template>
  <v-app dark>
    
    <div>
      <footerInit/>
    </div>
    <LoadingGeneral :is-loading="isLoading" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import footerInit from '@/components/Footers/footer';
import LoadingGeneral from '@/components/Loading/LoadingGeneral';
export default {
  name: 'DefaultLayout',
  components:{
    footerInit,
    LoadingGeneral
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  data () {
    return {
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
