<template>
  <div>
    <main-layout>
      <template v-slot:main>
        <wall-layout v-if="CarList.length>0" :cars="CarList"></wall-layout>
        <q-card flat v-else style="max-width: 300px">
          Hello
          <q-skeleton height="150px" square />
        </q-card>
      </template>
    </main-layout>
  </div>
</template>

<script>

import MainLayout from '@/components/layouts/MainLayout.vue'
import WallLayout from '@/components/layouts/WallLayout.vue'

export default {
  name: 'Home',
  components: {
    MainLayout,
    WallLayout
  },
  computed: {
    CarList(){
      return this.$store.state.carStore.cars
    }
  },
  methods: {

  },
  created: async function(){
    await this.$store.dispatch("carStore/getCars");
  },
}
</script>
