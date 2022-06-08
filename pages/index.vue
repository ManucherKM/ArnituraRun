<template>
  <div class="main">
    <div class="header">
      <div class="header-bg-img">
        <div class="header-bg">
          <div class="container">
            <NavBarLanding />
            <h1 class="header__title">НЕ ТРАТЬ ВРЕМЯ – СОЗДАВАЙ УЮТ</h1>
            <p class="header__subtitle">
              Не выходя из дома благодаря технологии дополненной реальности!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="container">
        <div class="about-us__description description">
          <div class="description__item">
            <img
              src="@/assets/img/ThreeBlock/img-list/office.svg"
              alt="Item"
              class="description-img"
            />
            <h3 class="description__title title">ПОЛЕЗНОСТЬ</h3>
            <ul class="description__list">
              <li class="description__list-item text">
                Экономия времени на поездках
              </li>
              <li class="description__list-item text">
                Экономия денег на поездках
              </li>
              <li class="description__list-item text">
                Экономия личной энергии на поездках
              </li>
              <li class="description__list-item text">
                Забота о своём здоровье за счет избегания посещения больших
                магазинов
              </li>
              <li class="description__list-item marg-none text">
                Большой выбор мебели разных производителей
              </li>
            </ul>
          </div>
          <div class="description__item">
            <img
              src="@/assets/img/ThreeBlock/img-list/table.svg"
              alt="Item"
              class="description-img"
            />
            <h3 class="description__title title">УНИКАЛЬНОСТЬ</h3>
            <ul class="description__list">
              <li class="description__list-item text">
                Технология дополненной реальности
              </li>
              <li class="description__list-item text">
                Вся мебель, не выходя из дома
              </li>
              <li class="description__list-item text">3D виртуальная модель</li>
              <li class="description__list-item text marg-none">
                Виртуальная модель мебели
              </li>
            </ul>
          </div>
          <div class="description__item">
            <img
              src="@/assets/img/ThreeBlock/img-list/desk.svg"
              alt="Item"
              class="description-img"
            />
            <h3 class="description__title title">СПЕЦИФИЧНОСТЬ</h3>
            <ul class="description__list">
              <li class="description__list-item text">
                Большой выбор производителей
              </li>
              <li class="description__list-item text">
                Вся мебель, не выходя из дома
              </li>
              <li class="description__list-item text marg-none">
                Сервис KRESLO
              </li>
            </ul>
          </div>
        </div>
        <div class="about-us__QR QR">
          <div class="about-us__download download">
            <p class="download__subtitle">Создай уют в два клика</p>
            <p class="download__title">Создай уют в два клика</p>
            <img
              src="@/assets/img/ThreeBlock/QR.png"
              alt="QR-code"
              class="download__img-QR"
            />
            <div class="download__wrapper-store">
              <a href="#"
                ><img
                  src="@/assets/img/ThreeBlock/Google-play.png"
                  alt="Google Play"
                  class="download__google-play"
              /></a>
              <a href="#"
                ><img
                  src="@/assets/img/ThreeBlock/App-store.png"
                  alt="App Store"
                  class="download__app-store"
              /></a>
            </div>
          </div>
          <div class="about-us__phone">
            <img
              src="@/assets/img/ThreeBlock/Phone.png"
              alt="Phone"
              class="phone-img"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="video-block">
      <div class="container">
        <div class="viedeo-block__wrapper-flex">
          <p class="video-block__text title d-block">
            Приложение для покупки мебели, которое изменит будущее бизнеса...
          </p>
          <p class="video-block__text title">Приложение для покупки мебели,</p>
          <img
            src="@/assets/img/ThreeBlock/Phone-next-video.png"
            alt="Video"
            class="video-block__video"
          />
          <!-- В будущем это будет видео -->
          <p class="video-block__text title">
            которое изменит будущее бизнеса...
          </p>
          <div class="download__wrapper-store">
            <a href="#"
              ><img
                src="@/assets/img/mobile/appStore.png"
                alt="Google Play"
                class="download__google-play"
            /></a>
            <a href="#"
              ><img
                src="@/assets/img/mobile/google.png"
                alt="App Store"
                class="download__app-store"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <section class="partner container">
      <h3 class="partner__title title">
        Стань партнером и продавай больше совместно с ARNITURA уже через 7 дней
      </h3>
      <div class="partner-items">
        <div class="partner-item">
          <img
            src="@/assets/img/partner__img1.svg"
            alt=""
            class="partner-item__img"
          />
          <h3 class="partner-item__title title">ПЛЮСЫ ДЛЯ ПРОДАВЦА</h3>
          <p class="partner__text text">Новых клиентов и увеличение продаж.</p>
          <p class="partner__text text">Бесплатный сервис с AR.</p>
          <p class="partner__text text">
            Повышение лояльности клиентов за счёт наличия сервиса с AR.
          </p>
          <p class="partner__text text">
            Экономия средств на разработке и поддержке своего приложения с AR.
          </p>
        </div>
        <div class="partner-item">
          <img
            src="@/assets/img/partner__img1.svg"
            alt=""
            class="partner-item__img"
          />
          <h3 class="partner-item__title title">ПЛЮСЫ ДЛЯ ARNITURA</h3>
          <p class="partner__text text">Увеличение базы продавцов.</p>
          <p class="partner__text text">Увеличение базы клиентов.</p>
          <p class="partner__text text">
            Повышение лояльности потребительского рынка.
          </p>
          <p class="partner__text text">
            Повышение инвестиционной привлекательности.
          </p>
        </div>
      </div>
    </section>
    <section class="road-map">
      <h3 class="road-map__title title">Для сотрудничества</h3>
      <img src="@/assets/img/road-map.png" alt="" class="road-map__img" />
      <button class="btn">СТАТЬ ПАРТНЕРОМ</button>
    </section>
    <div class="mobile-map d-none">
      <h2 class="title">Для сотрудничества</h2>
      <div class="mobile-map__item">
        <img
          src="@/assets/img/mobile/map/friend.svg"
          alt="Photo"
          class="mobile-map__img"
        />
        <p class="text">Зарегестрироваться<br />в качестве партнера</p>
        <img
          src="@/assets/img/mobile/map/arrow.svg"
          alt="Photo"
          class="mobile-map__img"
        />
      </div>
      <div class="mobile-map__item">
        <img
          src="@/assets/img/mobile/map/cloud.svg"
          alt="Photo"
          class="mobile-map__img"
        />
        <p class="text">
          Загрузить информацию о своих<br />товарах на сайт ARNITURA
        </p>
        <img
          src="@/assets/img/mobile/map/arrow.svg"
          alt="Photo"
          class="mobile-map__img"
        />
      </div>
      <div class="mobile-map__item">
        <img
          src="@/assets/img/mobile/map/site.svg"
          alt="Photo"
          class="mobile-map__img"
        />
        <p class="text">
          Разместить информацию <br />о приложении ARNITURA <br />в шоуруме и на
          сайте
        </p>
        <img
          src="@/assets/img/mobile/map/arrow.svg"
          alt="Photo"
          class="mobile-map__img"
        />
      </div>
      <div class="mobile-map__item">
        <img
          src="@/assets/img/mobile/map/phone.svg"
          alt="Photo"
          class="mobile-map__img"
        />
        <p class="text">
          Предлагать покупателям скачат<br />
          приложение ARNITURA <br />и смотреть товары в AR
        </p>
      </div>
      <div class="mobile-card__wrapper-btn">
        <nuxt-link to="#" class="mobile-map__btn btn"
          >Стать партнером</nuxt-link
        >
      </div>
    </div>
    <section class="about">
      <h3 class="about__title title">О компании</h3>
      <div class="about-content">
        <div class="about-item">
          <div class="about-item-content">
            <img
              src="@/assets/img/about__logo.png"
              alt=""
              class="about__logo"
            />
            <div class="about__text">Мы – компания Arnitura.</div>
            <div class="about__text">
              Создать для вас комфортный и доступный способ сделать свое
              жизненное пространство лучше – наша главная цель.
            </div>
            <div class="about__text">Миссия компании –</div>
          </div>
        </div>
        <img
          src="@/assets/img/about-item__img.png"
          alt="Photo"
          class="about-item__img"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBarLanding from "../components/NavBarLanding.vue";
export default {
  name: "IndexPage",
  components: { NavBarLanding, Footer },
};
</script>
