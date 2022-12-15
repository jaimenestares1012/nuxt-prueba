<template>
  <div>
    <medicion :poder="poder"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import medicion from '@/components/views/medicion';
export default {
    computed:{
    ...mapGetters('producto', ['poder']),
   },
    components:{
        medicion,
    },
}
</script>

<style>

</style>