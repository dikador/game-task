<template>
   <div class="block">
      <h2 class="block__title">
         что ваша кожа загадает на новый год?
         <img src="@/assets/gift.png" alt="" />
      </h2>
      <p class="block__text">
         Мы подготовили наборы ваших любимых средств, которые исполнят заветные
         желания кожи. Помогите растопить лёд и освободите средства из морозного
         плена.
         <br />
         <br />
         Правила игры просты — на экране будет появляться новогоднее желание
         кожи, а вам нужно выбрать, какой набор средств La Roche-Posay поможет
         претворить его в реальность.
      </p>

      <router-link to="/game" class="button btn-intro btn-white">
         Растопить лед
      </router-link>

      <p
         v-if="windowWidth > 768"
         @click="$store.commit('setPopup', 'prize')"
         class="block__link"
      >
         ПРАВИЛА АКЦИИ
      </p>

      <p class="block__number">02 <span>/02</span></p>
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
};
</script>