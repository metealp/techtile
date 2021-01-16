<template>
    <masonry
    :cols="{default: 6, 1200: 4, 700: 2, 400: 1}"
    :gutter="30"
    >
        <div v-for="(item, index) in cars" :key="index">
            <router-link :to="'/car/'+item.objectId">
                <q-card class="q-mx-xs q-my-sm">
                    <q-img
                        :src="item.imageURL"
                        basic
                    >
                    </q-img>
                </q-card>
            </router-link>
        </div>
    </masonry>

</template>

<script>
export default {
    props: {
        cars: Array,
    },
}
</script>

<style>

</style>