<template>
  <div class="wrapper-sing-in wrapper-res">
    <div class="wrapper-res__center">
      <h3 class="wrapper-res__title title">Авторизация</h3>
      <form id="Reg" name="PageRegestration" action="#">
        <div class="wrapper-res__inputs">
          <InputReg
            v-for="item of massListinput"
            :key="item.text"
            :textInput="item.text"
            :typeInput="item.type"
            :eyeBool="item.eye"
            @newValueInput="createObj"
            :deletValInput="deletValInput"
            :errorValidate="errorValidate"
            :textName="item.textName"
          />
        </div>
        <div class="checkbox">
          <label class="custom-checkbox">
            <input type="checkbox" name="color-1" value="indigo" />
            <span>Запомнить меня</span>
          </label>
        </div>
        <div class="wrapper-sing-in__btns">
          <ButtonSite
            @btnClick="Send"
            type="submit"
            class="wrapper-res__btn btn btn-one"
            :textBtn="'Войти'"
          />
          <nuxt-link class="link-btn btn" to="SingUp"
            >Зарегестрироваться</nuxt-link
          >
        </div>
        <div class="wrapper__link">
          <nuxt-link to="/PasswordReset" class="wrapper-sing-in__link">
            Забыли пароль ?
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonSite from "../components/UI/ButtonSite.vue";
import InputReg from "../components/UI/InputReg.vue";
import { validate } from "../mixins/Validate";
export default {
  components: { ButtonSite, InputReg },
  layout: "singin",
  mixins: [validate],
  data() {
    return {
      massListinput: [
        { text: "ИНН", type: "text", eye: false, textName: "AuthoInn" },
        {
          text: "Пароль",
          type: "password",
          eye: true,
          textName: "AuthoPassword",
        },
      ],
      massBdSingIn: [],
      objInn: {},
      objPassword: {},
      //Модель для очистки
      deletValInput: false,
      //Флаг для появления текста ошибки
      errorValidate: false,
    };
  },

  methods: {
    createObj(obj) {
      if (obj.nameInput === "ИНН") {
        this.objInn = obj;
      } else if (obj.nameInput === "Пароль") {
        this.objPassword = obj;
      }
    },

    Send() {
      if (
        !this.ValidateInput(this.objInn) ||
        !this.ValidateInput(this.objPassword)
      ) {
        this.errorValidate = true;
        return;
      }

      //Пушим в массив данные из инпутов
      this.massBdSingIn.push(this.objInn);
      this.massBdSingIn.push(this.objPassword);
      console.log(this.massBdSingIn);
      //Очистка инпутов и массива
      this.massBdSingIn = [];
      this.deletValInput = !this.deletValInput;
      this.$router.push("/Account");
    },
  },
};
</script>

<style>
</style>
