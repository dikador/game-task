<template>
   <div class="home">
      <div class="container">
         <transition-group name="fade" mode="out-in">
            <home-first-block
               key="first"
               @nextBlock="next = true"
               v-if="!next"
            />
            <home-second-block key="second" v-else />
         </transition-group>

         <button
            type="button"
            v-if="windowWidth < 768"
            @click="$store.commit('setPopup', 'prize')"
            class="open-popup"
         >
            <img src="@/assets/gift.png" alt="" />
         </button>

         <home-prize />
      </div>
   </div>
</template>

<script>
import { mapState } from "vuex";
import HomeFirstBlock from "../components/home/homeFirstBlock.vue";
import homePrize from "../components/home/homePrize.vue";
import HomeSecondBlock from "../components/home/homeSecondBlock.vue";
export default {
   components: { homePrize, HomeFirstBlock, HomeSecondBlock },
   name: "Home",

   data() {
      return {
         next: false,
      };
   },

   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
      }),
   },
};
</script>

<style lang="scss">
.home {
   width: 100%;
   background-image: url(../assets/intro_m.jpg);
   background-size: 100% 100%;
   background-repeat: no-repeat;
   min-height: 100vh;

   .block__text {
      margin-top: 20px;
   }

   .block {
      padding: 30px 25px 15px 25px;
      max-width: 545px;
   }
}

.block {
   &__list {
      li {
         color: #fff;
         position: relative;
         margin-top: 14px;
         font-family: "gill-sans-300", sans-serif;
         padding-left: 26px;

         &::before {
            content: "";
            position: absolute;
            top: 9px;
            left: 0;
            width: 16px;
            height: 1px;
            background-color: #fff;
         }

         &:first-child {
            margin-top: 20px;
         }
      }
   }

   &__title {
      font-family: "gill-sans-500", serif;
      font-weight: 400;

      img {
         width: 35px;
         height: 35px;
      }
   }

   &__link {
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;

      text-decoration-line: underline;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 11px;
      color: #fff;
   }

   &__number {
      font-size: 24px;
      font-weight: 300;
      color: #fff;
      text-align: center;
      font-family: "gill-sans-300", serif;
      font-weight: 500;

      span {
         font-size: 15px;
         line-height: 150%;
         font-weight: 300;

         color: #ffffff;
      }
   }
}

.open-popup {
   position: fixed;
   bottom: 21px;
   right: 10px;
   width: 48px;
   height: 48px;
   border-radius: 50%;

   background-color: #01a0e4;
   display: flex;
   justify-content: center;
   cursor: pointer;
   align-items: center;
}

.btn-intro {
   max-width: 100%;
   height: 50px;
   width: 100%;
   margin: 25px 0px 15px 0px;
}

@media (min-width: 768px) {
   .home {
      background-image: url(~@/assets/intro.jpg);

      .block {
         max-width: 670px;
         padding: 78px 40px 33px 61px;
         position: fixed;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }

   .popup__body {
      bottom: auto !important;
      top: 50%;
   }

   .block__number {
      text-align: right;
   }

   .block__link {
      cursor: pointer;
      margin-left: 25px;
      display: inline-block;
   }

   .btn-intro {
      display: inline-flex;
      max-width: 211px !important;
   }
}
</style>