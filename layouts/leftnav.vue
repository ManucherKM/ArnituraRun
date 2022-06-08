<template>
  <div>
    <NavBar :textLinkMenu="'Выйти'" />
    <main class="container">
      <div class="wrapper-contents">
        <div class="wrapper-contents__navigatiov">
          <BtnRouter
            :LinkPath="item.LinkPath"
            :textLink="item.textLink"
            v-for="item of massLinks"
            :key="item.textLink"
          />
        </div>
        <div class="wrapper-contents__components">
          <Nuxt />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import BtnRouter from "../components/UI/BtnRouter.vue";
export default {
  components: { NavBar, BtnRouter },
  data() {
    return {
      massLinks: [
        { textLink: "Учетная запись", LinkPath: "/Account" },
        { textLink: "Товары", LinkPath: "/SiteProducts" },
        { textLink: "Материалы", LinkPath: "/Account" },
        { textLink: "Поддержка", LinkPath: "/Account" },
      ],
    };
  },
};
</script>

<style scoped>
</style>