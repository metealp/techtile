<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title> -->
        <q-tabs align="right">
          <q-route-tab to="/signin" label="Sign In" />
          <q-route-tab to="/signup" label="Sign Up" />
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

}
</script>

<style>

</style>