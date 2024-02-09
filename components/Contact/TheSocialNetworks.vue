<script setup lang="ts">
</script>

<template>
    <div class="exchanges">
      <div class="exchanges__container">
        <h2>{{ $t('contact.social_networks.title') }}</h2>
        <div class="exchanges__links">
            <a href="https://t.me/vladimir_lisenko">
              <img class="image" src="/public/images/Telegram.webp"></img>
            </a>
            <a href="https://facebook.com/profile.php?id=100017348404042">
              <img  class="image" src="/public/images/Facebook.webp"></img>
            </a>
          <a href="https://instagram.com/vladimir._lisenko">
            <img  class="image" src="/public/images/Instagram.webp"></img>
          </a>
          <a href="https://linkedin.com/in/vladimir-lisenko-804904202">
            <img  class="image" src="/public/images/LinkedIn.webp"></img>
          </a>
          <a href="https://github.com/morgota199">
            <img  class="image" src="/public/images/github.png"></img>
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
