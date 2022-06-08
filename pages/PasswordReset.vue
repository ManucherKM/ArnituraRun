<template>
  <div class="wrapper-res">
    <div class="wrapper-res__center">
      <h3 class="wrapper-res__title title">Сброс пароля</h3>
      <p class="wrapper-res__text text">
        Для сброса пароля ведите адрес электронной почты
      </p>
      <input
        @input="createObj"
        v-model="emailReset"
        class="wrapper-res__input"
        type="email"
        placeholder="Адрес электронной почты"
      />
      <ButtonSite
        class="wrapper-res__btn btn"
        :textBtn="'Сбросить мой пароль'"
        @btnClick="Send"
      />
    </div>
  </div>
</template>

<script>
import ButtonSite from "../components/UI/ButtonSite.vue";
export default {
  components: { ButtonSite },
  layout: "singup",
  data() {
    return {
      emailReset: "",
      massReset: [],
      objRes: {
        textInput: "",
        nameInput: "",
      },
    };
  },
  methods: {
    createObj() {
      const obj = {
        textInput: this.emailReset,
        nameInput: "Сброс пароля",
      };
      this.objRes = obj;
    },

    Send() {
      // if (this.objRes.textInput.indexOf("@") === "-1") {
      //   console.log("Ошибка");
      //   console.log(this.objRes.textInput);
      //   return;
      // } else if (
      //   this.objRes.textInput.indexOf(
      //     "",
      //     ";",
      //     ":",
      //     "'",
      //     " ",
      //     "'|'",
      //     "'/'",
      //     ",",
      //     "*",
      //     "%",
      //     "$",
      //     "&",
      //     "^",
      //     "#",
      //     "!"
      //   ) === "-1"
      // ) {
      //   console.log("Не верно");
      //   console.log(this.objRes.textInput);
      //   return;
      // }
      this.massReset.push(this.objRes);
      console.log(this.massReset);
      this.massReset = [];
      this.emailReset = ""
    },
  },
};
</script>

<style>
</style>