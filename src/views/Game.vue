<template>
   <div class="game">
      <div class="container">
         <div class="block">
            <div class="game__body">
               <game-top-content class="game__control" />

               <products class="game__products" />
            </div>

            <button
               v-if="windowWidth < 992"
               @click="$store.commit('setPopup', 'promocode')"
               type="button"
               class="button btn-transparent"
            >
               мои промокоды
            </button>
         </div>
         <promocodes />
         <default-popup
            value="firstPopup"
            :title="'У ВАС УЖЕ ЕСТЬ ОДИН ПРАВИЛЬНЫЙ ОТВЕТ – И ВАМ ДОСТУПЕН ПОДАРОК!'"
            :text="'Вы уже сейчас можете перейти в раздел «Мои промокоды» внизу экрана, забрать подарок и завершить игру, перейдя к покупкам. Либо вы можете вернуться к игре и постараться выиграть другие призы: выйти из раздела «Мои промокоды» можно, нажав на кнопку «Продолжить игру».'"
         />
      </div>
   </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import promocodes from "@/components/game/promocodes";
import gameTopContent from "@/components/game/gameTopContent";
import products from "@/components/game/products.vue";

export default {
   components: {
      promocodes,
      gameTopContent,
      products,
   },

   methods: {
      ...mapMutations("game", ["setCurrent"]),
   },

   mounted() {
      this.setCurrent();
   },

   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
         products: (state) => state.game.products,
         current: (state) => state.game.current,
      }),
   },
};
</script>

<style lang="scss" scoped>
.block {
   padding: 30px 15px 40px 20px;
}

.game {
   background: url(~@/assets/game_bg.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   margin: 0 auto;
}

.btn-transparent {
   padding: 16px;
   width: 100%;
   margin-top: 32px;
}

@media (min-width: 992px) {
   .game__body {
      display: flex;
      justify-content: space-between;
   }

   .block {
      padding: 60px;
   }

   .game__products {
      width: 45%;
   }

   .game__control {
      width: 55%;
   }

   .container {
      padding: 40px 60px;
   }
}
</style>