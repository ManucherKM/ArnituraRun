<template>
  <div class="wrapper-sing-up wrapper-res">
    <div class="wrapper-res__center">
      <h3 class="wrapper-res__title title">Регистрация</h3>
      <form id="Auth" name="PageAuthorizate" action="#">
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
        <ButtonSite
          type="submit"
          class="wrapper-res__btn btn"
          :textBtn="'Зарегестрироваться'"
          @btnClick="Send"
        />
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
  layout: "singup",
  mixins: [validate],

  data() {
    return {
      //Массив для отрисовки
      massListinput: [
        { text: "ИНН", type: "text", eye: false, textName: "RegInn" },
        {
          text: "Наименование организации",
          type: "text",
          eye: false,
          textName: "RegNameCompany",
        },
        { text: "Адрес", type: "text", eye: false, textName: "RegAddress" },
        {
          text: "Пароль",
          type: "password",
          eye: true,
          textName: "RegPass",
        },
        {
          text: "Подтвердите пароль",
          type: "password",
          eye: true,
          textName: "RegRepeatPass",
        },
      ],
      massBdSingUp: [],
      objInn: {},
      objAddress: {},
      objNameCompany: {},
      objPassword: {},
      objVerPassword: {},
      deletValInput: false,
      errorValidate: false,
    };
  },
  methods: {
    createObj(obj) {
      if (obj.nameInput === "ИНН") {
        this.objInn = obj;
      } else if (obj.nameInput === "Наименование организации") {
        this.objNameCompany = obj;
      } else if (obj.nameInput === "Адрес") {
        this.objAddress = obj;
      } else if (obj.nameInput === "Пароль") {
        this.objPassword = obj;
      } else if (obj.nameInput === "Подтвердите пароль") {
        this.objVerPassword = obj;
      }
    },

    Send() {
      //Валидация
      if (
        !this.ValidateInput(this.objInn) ||
        !this.ValidateInput(this.objAddress) ||
        !this.ValidateInput(this.objNameCompany) ||
        !this.ValidateInput(this.objPassword) ||
        !this.ValidateInput(this.objVerPassword)
      ) {
        this.errorValidate = true;
        return;
      }
      //Пушим объекты инпутов в один массив
      this.massBdSingUp.push(this.objInn);
      this.massBdSingUp.push(this.objAddress);
      this.massBdSingUp.push(this.objNameCompany);
      this.massBdSingUp.push(this.objPassword);
      this.massBdSingUp.push(this.objVerPassword);

      console.log(this.massBdSingUp);
      this.$router.push("/SingIn");
      //Очистка массива
      this.massBdSingUp = [];
      //Очистка инпутов
      this.deletValInput = !this.deletValInput;
    },
  },
};
</script>

<style>
</style>
