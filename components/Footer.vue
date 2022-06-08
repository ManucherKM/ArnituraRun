<template>
  <footer class="footer">
    <hr class="footer__hr" />
    <div class="footer-content">
      <a href="#">
        <img src="@/assets/img/footer__logo.png" alt="Photo" class="footer__logo" />
      </a>
      <ul class="footer-items">
        <li class="footer-item">
          <nuxt-link to="/SingUp" class="footer-item__link text">Зарегестрироваться</nuxt-link>
          <nuxt-link to="/SingIn" class="footer-item__link text">Войти</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>