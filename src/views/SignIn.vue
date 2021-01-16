<template>
  <div>
    <main-layout>
      <template v-slot:main>
        <auth submission="signin"></auth>
      </template>
    </main-layout>
  </div>
</template>

<script>
import Auth from '@/components/Auth.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
    components: { 
        Auth,
        MainLayout
    },
    data(){
        return {
        }
    }
}
</script>

<style>

</style>