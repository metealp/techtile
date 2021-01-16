<template>
  <div>
    <main-layout>
      <template v-slot:main>
        <wall-layout v-if="CarList.length>0" :cars="CarList"></wall-layout>
        <div v-else class="row justify-center q-ma-lg">
          <div class="col-auto">
            <q-spinner
              color="primary"
              size="10em"
            />
          </div>
        </div>
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
