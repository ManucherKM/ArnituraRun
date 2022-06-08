<template>
  <button class="wrapper-res__btn btn" @click.prevent="btnClick">
    {{ textBtn }}
  </button>
</template>

<script>
export default {
  props: {
    textBtn: {
      required: true,
      type: String,
    },
  },
  methods: {
    btnClick() {
      this.$emit("btnClick", "Нажатие");
    },
  },
};
</script>

<style>
</style>