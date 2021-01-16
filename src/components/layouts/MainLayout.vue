<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" height-hint="98">
        <q-toolbar>
            <q-tabs align="right">
                <q-route-tab to="/" label="Home" />
                <q-route-tab to="/signin" label="Sign In" v-show="!LogStatus"/>
                <q-route-tab to="/signup" label="Sign Up" v-show="!LogStatus"/>
                <q-route-tab to="/" label="Log Out" @click="Logout" v-show="LogStatus"/>
            </q-tabs>
        </q-toolbar>

    </q-header>

    <q-page-container>
        <slot name="main"/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
    computed: {
        LogStatus(){
            return this.$store.state.authStore.isLoggedIn
        }
    },
    methods: {
        Logout(){
            this.$store.dispatch("authStore/logUserOut")
        }
    }

}
</script>

<style>

</style>