<template>
   <div class="block">
      <h2 class="block__title">
         Ваша любовь <br />
         вдохновляет <br />
         и согревает нас <img src="@/assets/heart.png" alt="" />
      </h2>
      <p class="block__text">
         Мы хотим ответить вам взаимностью и предложить подарки к следующему
         заказу — участвуйте в новогодней игре и
         <b> выигрывайте призы!</b>
      </p>

      <button @click="nextBlock" class="button btn-intro btn-white">
         далее
      </button>
      <p
         v-if="windowWidth < 768"
         @click="$store.commit('setPopup', 'prize')"
         class="block__link"
      >
         ПРАВИЛА АКЦИИ
      </p>
      <p class="block__number">01 <span>/01</span></p>
   </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
      }),
   },

   methods: {
      nextBlock() {
         this.$emit("nextBlock");
      },
   },
};
</script>

<style lang="scss" scoped>
</style>