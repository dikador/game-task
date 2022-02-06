<template>
   <div class="content">
      <div class="content__title">
         <h1>
            ЧТО ВАША КОЖА ЗАГАДАЕТ НА НОВЫЙ ГОД?
            <img src="@/assets/gift.png" alt="" />
         </h1>
      </div>

      <p class="block__number">
         {{ points > 9 ? points : `0${points}` }}
         <span
            >/{{
               products.length > 9 ? products.length : `0${products.length}`
            }}</span
         >
      </p>

      <h2 class="block__title second-title">
         Выберите, какой набор средств поможет исполнить это желание кожи:
      </h2>

      <div class="game__button">
         <p class="button btn-rounded btn-white">
            {{ current.title }}
         </p>

         <div v-if="windowWidth < 992" class="info">
            <main-tooltip clickEvent>
               <div class="info__body">
                  <h5>ПОДСКАЗКА</h5>

                  <p>
                     {{ current.help }}
                  </p>
               </div>
            </main-tooltip>
         </div>

         <p
            @click="$store.commit('setPopup', 'help')"
            v-if="windowWidth > 992"
            class="text-border help-text"
         >
            подсказка
         </p>
      </div>

      <div v-if="windowWidth > 992" class="promocodes__body">
         <div
            class="promocode"
            :class="promocode.active ? '' : 'disable'"
            v-for="promocode in promocodes"
            :key="promocode.id"
         >
            <div class="code">
               {{ promocode.active ? promocode.code : "promocode" }}
            </div>
         </div>
      </div>

      <p
         @click="$store.commit('setPopup', 'promocode')"
         v-if="windowWidth > 992"
         class="text-border"
      >
         Узнать про подарки и забрать промокоды
      </p>

      <default-popup value="help" title="Подсказка" :text="current.help" />
   </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
         products: (state) => state.game.products,
         promocodes: (state) => state.game.promocodes,
         points: (state) => state.game.points,
         current: (state) => state.game.current,
      }),
   },
};
</script>

<style lang="scss" scoped>
@import "~@/style/mixins.scss";
.block__number {
   text-align: left;
}

.second-title {
   font-size: 16px;
   margin-top: 8px;
   margin-bottom: 15px;
}

.content__title {
   h1 {
      font-size: 38px;
      text-transform: uppercase;
      margin-bottom: 24px;
      font-family: "gill-sans-pro-300", sans-serif;
      font-weight: 300;
      color: #fff;
      padding-bottom: 40px;
      border-bottom: 1px solid #fff;

      img {
         width: 30px;
      }
   }
}

.info {
   width: 26px;
   height: 26px;
   border: 1px solid #fff;
   border-radius: 50%;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   margin-left: 15px;
   position: relative;
   flex: 0 0 26px;

   .info__body {
      padding: 28px 20px 20px;
   }

   h5 {
      margin-bottom: 10px;
      font-size: 12px;
      font-family: "gill-sans-500", serif;
      letter-spacing: 0.1em;
   }

   p {
      font-family: "gill-sans-500", serif;
   }

   &::before {
      content: "i";
      cursor: pointer;
      font-size: 14.95px;
      line-height: 100%;
      margin-left: 1px;
      margin-top: 1px;
      font-family: "Montserrat", sans-serif;
      color: #ffffff;
   }
}

.game__button {
   display: flex;
   align-items: center;
}

.btn-rounded {
   max-width: 100%;
   font-size: 13px;
   letter-spacing: 0.06em;
   color: #2b2b2b;
   font-family: "gill-sans-300", serif;
   text-transform: uppercase;
   transform: scale(1) !important;
   cursor: default;
   padding: 10px 20px;

   @include adaptiv_font(18, 13);
}

.text-border {
   font-size: 18px;
   line-height: 116%;
   color: #fff;
   display: inline-block;
   cursor: pointer;

   letter-spacing: 0.02em;
   border-bottom: 1px solid #fff;
}

.help-text {
   margin-left: 17px;
}

@media (min-width: 992px) {
   .promocodes__body {
      display: grid;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20px;
      grid-template-columns: 180px 180px;
   }

   .promocode {
      margin-left: 14px;
      margin-bottom: 15px;

      &:nth-child(odd) {
         margin-left: 0;
      }

      .code {
         margin-top: 0;
      }

      &.disable {
         opacity: 0.5;
      }
   }

   .second-title {
      font-size: 30px;
      line-height: 116%;
      margin-top: 15px;
      margin-bottom: 30px;
      font-family: "gill-sans-pro-500", sans-serif;

      letter-spacing: 0.02em;
   }

   .btn-rounded {
      width: auto;
      font-family: "gill-sans-pro-500", sans-serif;
      padding: 14px 40px;
      font-weight: 500;
   }
}
</style>