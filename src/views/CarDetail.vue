<template>
    <main-layout>
        <template v-slot:main>
            <div class="row">
                <div class="col-xs-12 col-md-6 order-first q-px-md q-py-md">
                    <q-img
                        id="carDetailInfo"
                        :src="car.imageURL"
                        rounded
                        img-class="fitToContainer"
                    basic
                    >
                    </q-img>
                </div>
                <div id="carDetailInfo" class="col-xs-12 col-md-6 q-px-md q-py-md">
                    <h5>Manufacturer</h5>
                    <p>{{ car.name }}</p>
                    <h5>Description</h5>
                    <p>{{ car.description }}</p>
                    <h5>Created at</h5>
                    <p>{{ transformToLocal(car.created) }}</p>
                </div>
            </div>
        </template>
    </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
    components: {
        MainLayout,
    },
    computed: {
        car(){
            const cars = this.$store.state.carStore.cars;
            const car = cars.filter( x => x.objectId === this.$route.params.id)
            return car[0]
        }
    },
    methods: {
        transformToLocal(unix){
            const dateObj = new Date(unix);
            return dateObj.toLocaleString('en-GB', { timeZone: 'UTC' })
        }
    }
}
</script>

<style>

</style>