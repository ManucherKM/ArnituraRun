<template>
  <div class="wrapper-product">
    <table class="wrapper-product__table">
      <tbody>
        <tr class="wrapper-product__line">
          <td
            class="wrapper-product__column title-table wrapper-product__null"
          ></td>
          <td class="wrapper-product__column title-table wrapper-product__name">
            Наименование
          </td>
          <td
            class="
              wrapper-product__column
              title-table
              wrapper-product__category
            "
          >
            Категория
          </td>
          <td class="wrapper-product__column title-table wrapper-product__type">
            Тип
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__width"
          >
            Ширина
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__length"
          >
            Длина
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__height"
          >
            Высота
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__file-3D"
          >
            Файл 3D модели
          </td>
          <td
            class="
              wrapper-product__column
              title-table
              wrapper-product__material
            "
          >
            Материал
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__price"
          >
            Цена товара
          </td>
          <td class="wrapper-product__column title-table wrapper-product__desc">
            Описание
          </td>
          <td class="wrapper-product__column title-table wrapper-product__time">
            Дата и время публикации
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__stats"
          >
            Статус
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__photo"
          >
            Фото
          </td>
          <td
            class="wrapper-product__column title-table wrapper-product__null"
          ></td>
        </tr>
        <Table
          :dateTable="item.dateTable"
          :StatsModeration="item.statsModeration"
          :StatsVerify="item.statsVerify"
          :Statsreject="item.statsreject"
          :massLine="item"
          v-for="item in massLine"
          :key="item.name"
        />
      </tbody>
    </table>

    <AddTable @newObj="newObj" />
  </div>
</template>

<script>
import AddTable from "../components/addTable.vue";
import Table from "../components/Table.vue";
export default {
  components: { Table, AddTable },
  layout: "leftnav",
  data() {
    return {
      massLine: [
        {
          name: "Ivan",
          caregoty: "one",
          width: 120,
          length: 123,
          height: 123,
          material: {
            Кожа: "Кожа",
            Вельвет: "Вельвет",
          },
          price: 123,
          description: "Пример",
          time: "Дата",
          statsModeration: true,
          statsVerify: false,
          statsreject: false,
          dateTable: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ],
    };
  },
  methods: {
    newObj(obj) {
      console.log(this.massLine);
      this.massLine.push(obj);
    },
  },
};
</script> 

<style>
</style>>
