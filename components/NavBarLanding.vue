<template>
  <nav class="header__nav nav">
    <div class="nav__wrapper-logo">
      <nuxt-link to="/">
        <img
          src="@/assets/img/ThreeBlock/Logo.svg"
          alt="Logo"
          class="nav-logo"
        />
      </nuxt-link>
    </div>
    <div class="nav__wrapper-text">
      <nuxt-link to="/SingUp" class="nav__text text"
        >Зарегестрироваться</nuxt-link
      >
      <nuxt-link to="/SingIn" class="nav__text text">Войти</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>