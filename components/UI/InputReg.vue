<template>
  <div class="wrapper-input">
    <p class="wrapper-input__text mt">
      {{ textInput }}
    </p>
    <div class="wrapper-input__block-eye">
      <div class="wrapper-input__eye-click">
        <input
          v-model.trim.lazy="valInput"
          class="wrapper-input__input"
          required
          :name="textName"
          :type="typeInputModel"
          :placeholder="textPlayceholder"
        />

        <div v-if="eyeBool === true">
          <div class="wrapper__eye">
            <svg
              @click="passwordView"
              v-if="eyeDefault === true"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0933 7.63317C17.2416 3.334 13.7583 0.666504 9.99994 0.666504C6.24161 0.666504 2.75827 3.334 0.906606 7.63317C0.856131 7.74882 0.830078 7.87365 0.830078 7.99984C0.830078 8.12602 0.856131 8.25085 0.906606 8.3665C2.75827 12.6657 6.24161 15.3332 9.99994 15.3332C13.7583 15.3332 17.2416 12.6657 19.0933 8.3665C19.1437 8.25085 19.1698 8.12602 19.1698 7.99984C19.1698 7.87365 19.1437 7.74882 19.0933 7.63317V7.63317ZM9.99994 13.4998C7.08494 13.4998 4.34411 11.4007 2.75827 7.99984C4.34411 4.599 7.08494 2.49984 9.99994 2.49984C12.9149 2.49984 15.6558 4.599 17.2416 7.99984C15.6558 11.4007 12.9149 13.4998 9.99994 13.4998ZM9.99994 4.33317C9.27474 4.33317 8.56583 4.54822 7.96285 4.95112C7.35987 5.35401 6.8899 5.92667 6.61238 6.59666C6.33486 7.26666 6.26225 8.0039 6.40373 8.71517C6.5452 9.42643 6.89442 10.0798 7.40721 10.5926C7.92001 11.1054 8.57334 11.4546 9.28461 11.5961C9.99587 11.7375 10.7331 11.6649 11.4031 11.3874C12.0731 11.1099 12.6458 10.6399 13.0487 10.0369C13.4516 9.43395 13.6666 8.72504 13.6666 7.99984C13.6666 7.02738 13.2803 6.09475 12.5927 5.40711C11.905 4.71948 10.9724 4.33317 9.99994 4.33317V4.33317ZM9.99994 9.83317C9.63734 9.83317 9.28288 9.72565 8.98139 9.5242C8.6799 9.32275 8.44492 9.03642 8.30616 8.70142C8.1674 8.36643 8.13109 7.9978 8.20183 7.64217C8.27257 7.28654 8.44718 6.95987 8.70358 6.70348C8.95997 6.44708 9.28664 6.27247 9.64227 6.20173C9.99791 6.13099 10.3665 6.1673 10.7015 6.30606C11.0365 6.44482 11.3229 6.6798 11.5243 6.98129C11.7257 7.28278 11.8333 7.63724 11.8333 7.99984C11.8333 8.48607 11.6401 8.95238 11.2963 9.2962C10.9525 9.64002 10.4862 9.83317 9.99994 9.83317Z"
                fill="#83868B"
              />
            </svg>
          </div>
          <div class="wrapper__eye">
            <svg
              @click="passwordView"
              v-if="eyeDefault === false"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0933 7.63317C17.2416 3.334 13.7583 0.666504 9.99994 0.666504C6.24161 0.666504 2.75827 3.334 0.906606 7.63317C0.856131 7.74882 0.830078 7.87365 0.830078 7.99984C0.830078 8.12602 0.856131 8.25085 0.906606 8.3665C2.75827 12.6657 6.24161 15.3332 9.99994 15.3332C13.7583 15.3332 17.2416 12.6657 19.0933 8.3665C19.1437 8.25085 19.1698 8.12602 19.1698 7.99984C19.1698 7.87365 19.1437 7.74882 19.0933 7.63317ZM9.99994 13.4998C7.08494 13.4998 4.34411 11.4007 2.75827 7.99984C4.34411 4.599 7.08494 2.49984 9.99994 2.49984C12.9149 2.49984 15.6558 4.599 17.2416 7.99984C15.6558 11.4007 12.9149 13.4998 9.99994 13.4998Z"
                fill="#83868B"
              />
              <path d="M2 8L18 8" stroke="#83868B" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>

      <p v-if="errorValidate" class="color-red fs">Поле заполнено не верно</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textInput: {
      type: String,
      required: true,
    },
    typeInput: {
      type: String,
      required: true,
    },
    eyeBool: {
      type: Boolean,
      required: true,
    },
    deletValInput: {
      type: Boolean,
    },
    errorValidate: {
      type: Boolean,
      default: false,
    },
    textPlayceholder: {
      type: String,
      default: "",
    },
    textName: {
      type: String,
      default: "",
    }
  },

  data() {
    return {
      valInput: "",
      //Иконка для показа пароля
      eyeDefault: false,
      typeInputModel: this.typeInput,
    };
  },

  methods: {
    passwordView() {
      //Меняем фазу глаза инпута
      this.eyeDefault = !this.eyeDefault;
      if (this.typeInputModel === "password") {
        this.typeInputModel = "text";
      } else {
        this.typeInputModel = "password";
      }
    },
  },

  watch: {
    valInput(newQuestion, oldQuestion) {
      //Генерация объекта инпута
      const obj = {
        textInput: this.valInput,
        nameInput: this.textInput,
      };
      //Передаем объект в родительский компонент
      this.$emit("newValueInput", obj);
    },
    deletValInput(newQuestion, oldQuestion) {
      //Очистка инпута
      this.valInput = "";
    },
  },
};
</script>

<style>
</style>