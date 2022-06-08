<template>
  <div class="wrapper-form">
    <h2 class="wrapper-form__title">Добавить товар</h2>
    <div class="wrapper-form__form">
      <form id="newProduct" class="wrapper-form__container" action="#" name="newProduct">
        <div class="wrapper-form__wrapper-info">
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Наименование</p>
            <input
              v-model="modelName"
              type="text"
              placeholder="Иван Иванов"
              class="wrapper-form__input" 
              name="namePeople"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Категория</p>
            <input
              v-model="modelCategory"
              type="text"
              placeholder="Для спальни"
              class="wrapper-form__input"
              name="Category"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Тип</p>
            <input
              v-model="modelType"
              type="text"
              placeholder="Кресло"
              class="wrapper-form__input"
              name="Type"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Ширина</p>
            <input
              v-model="modelWidth"
              type="number"
              placeholder="65"
              class="wrapper-form__input"
              name="Width"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Длина</p>
            <input
              v-model="modelLength"
              type="number"
              placeholder="80"
              class="wrapper-form__input"
              name="Length"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Высота</p>
            <input
              v-model="modelHeight"
              type="number"
              placeholder="80"
              class="wrapper-form__input"
              name="Height"
            />
          </div>

          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Материал</p>
            <input
              v-model="modelMaterial"
              type="text"
              placeholder="Иван Иванов"
              class="wrapper-form__input"
              name="Material"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Цена товара</p>
            <input
              v-model="modelPrice"
              type="text"
              placeholder="Иван Иванов"
              class="wrapper-form__input"
              name="Price"
            />
          </div>
          <div class="wrapper-form__wrapper-inpt pb">
            <p class="text name">Описание</p>
            <input
              v-model="modelDecription"
              type="text"
              placeholder="Иван Иванов"
              class="wrapper-form__input"
              name="Description"
            />
          </div>
        </div>

        <div class="wrapper-form__wrapper-file">
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Фото</p>
            <label
              for="Photoinpt"
              class="label-input-file"
              :class="{ 'drag-drop': dragDropOne }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#ccc"
                  d="M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4l77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"
                />
              </svg>
              <p v-if="this.file !== null" class="textinput">Файл выбран</p>
              <input
                @dragenter="classBgOne"
                @dragleave="classBgOne"
                @change="addFile"
                id="Photoinpt"
                type="file"
                placeholder="Иван Иванов"
                class="wrapper-form__input"
                name="PhotoProduct"
            /></label>
          </div>
          <div class="wrapper-form__wrapper-inpt">
            <p class="text name">Файл 3D модели</p>
            <label
              for="File3D"
              class="label-input-file"
              :class="{ 'drag-drop': dragDropTwo }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="#ccc">
                  <path
                    d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"
                  />
                  <path
                    d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                  />
                </g>
              </svg>
              <p v-if="this.file3D !== null" class="textinput">Файл выбран</p>
              <input
                @dragenter="classBgTwo"
                @dragleave="classBgTwo"
                @change="addFile3D"
                id="File3D"
                type="file"
                placeholder="Иван Иванов"
                class="wrapper-form__input"
                name="FileProduct"
              />
            </label>
          </div>
          <button type="submit" @click.prevent="createObj" class="btn">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelName: "",
      modelCategory: "",
      modelType: "",
      modelWidth: "",
      modelLength: "",
      modelHeight: "",
      file: null,
      modelMaterial: "",
      modelPrice: "",
      modelDecription: "",
      modelTime: "",
      StatsModeration: true,
      StatsVerify: false,
      Statsreject: false,
      Photo: {
        name: "Фото",
      },
      file3D: null,
      dragDropOne: false,
      dragDropTwo: false,
    };
  },
  methods: {
    addFile(event) {
      this.file = event.target.files[0].name;
    },
    addFile3D(event) {
      this.file3D = event.target.files[0].name;
    },
    createObj() {
      const obj = {
        name: this.modelName,
        caregoty: this.modelCategory,
        type: this.modelType,
        width: this.modelWidth,
        length: this.modelLength,
        height: this.modelHeight,
        time: this.modelType,
        material: {
          Кожа: "Кожа",
          Вельвет: "Вельвет",
        },
        price: this.modelPrice,
        description: this.modelDecription,
        statsModeration: true,
        statsVerify: false,
        statsreject: false,
        dateTable: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      this.$emit("newObj", obj);
    },
    classBgOne() {
      this.dragDropOne = !this.dragDropOne;
    },
    classBgTwo() {
      this.dragDropTwo = !this.dragDropTwo;
    },
  },
};
</script>

<style>
</style>
