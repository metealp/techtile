<template>
  <div>
      Please
      <ul>
          <li v-for="item in cars" :key="item.objectId">
              <h5>{{item.name}}</h5>
              <h5>{{item.description}}</h5>
              <img :src="item.imageUrl" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        cars: Array,
    }
}
</script>

<style>

</style>