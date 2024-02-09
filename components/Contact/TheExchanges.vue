<script setup lang="ts"></script>

<template>
  <div class="exchanges">
    <div class="exchanges__container">
      <h2>{{ $t('contact.exchanges.title') }}</h2>
      <div class="exchanges__links">
        <a href="https://www.upwork.com/freelancers/~0118e98179ca4eb8d2">
          <img class="image" src="/public/images/upwork.webp"></img>
        </a>
        <a href="https://freelancehunt.com/freelancer/vladimir_3531.html">
          <img  class="image" src="/public/images/freelancehunt.png"></img>
        </a>
        <a href="https://freelance.ua/ru/user/morgota199">
          <img  class="image" src="/public/images/freelanceua.png"></img>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.exchanges {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  .exchanges__container {
    max-width: 500px;
    width: 100%;

    .exchanges__links {
      width: 100%;
      display: flex;
      justify-content: space-between;

      a {
        .image {
          border-radius: 50%;
          width: 60px;
          height: auto;
          transition: all .3s ease-in;

          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }
    }
  }

  @media (min-width: $mobile-min) and (max-width: $mobile-max) {
    .exchanges__container {
      h2 {
        font-size: 20px;
      }

      .exchanges__links {
        a > .image {
          width: 40px;
        }
      }
    }
  }
  @media (min-width: $tablet-min) and (max-width: $tablet-max) {

  }
  @media (min-width: $laptop-min) and (max-width: $laptop-max) {

  }
  @media (min-width: $desktop-min) and (max-width: $desktop-max) {

  }
  @media (min-width: $tv-min) {

  }
}
</style>
