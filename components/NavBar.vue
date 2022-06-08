<template>
  <nav class="header__nav nav containernav">
    <div class="nav__wrapper-logo">
      <nuxt-link to="/"
        ><img
          src="@/assets/img/ThreeBlock/Logo.svg"
          alt="Logo"
          class="nav-logo"
      /></nuxt-link>
    </div>
    <div class="nav__wrapper-text">
      <nuxt-link :to="textPathMenu" class="nav__text text">{{
        textLinkMenu
      }}</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    textLinkMenu: {
      type: String,
      required: true,
    },
    textPathMenu: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.containernav {
  padding: 0 160px;
}
.header__nav {
  padding-top: 26px;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(35, 99, 157);
  .nav__text:nth-child(1) {
    margin-right: 33px;
  }

  .nav__text {
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
  .nav__wrapper-text {
    a {
      color: #fff;
      margin: 0;
    }
  }
}
</style>