<template>
  <nuxt-link
    class="btn-link"
    :to="LinkPath"
    >{{ textLink }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    textLink: {
      type: String,
      required: true,
    },
    LinkPath: {
      type: String,
      required: true,
    },
  },

};
</script>

<style>
</style>