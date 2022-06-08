<template>
  <div>
    <NavBar :textLinkMenu="'Войти'" :textPathMenu="'/SingIn'" />
    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
</style>