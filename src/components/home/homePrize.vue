<template>
   <main-popup class="prize-popup" value="prize">
      <div class="popup__body block">
         <h2 class="block__title">КАКИЕ ПРИЗЫ Я МОГУ ПОЛУЧИТЬ?</h2>
         <ul class="block__list">
            <li><b>HYALU B5,</b> МИНИАТЮРА СЫВОРОТКИ, 10 МЛ</li>
            <li><b>3 ДОПОЛНИТЕЛЬНЫХ ПРОБНИКА</b> К ЗАКАЗУ</li>
            <li><b>LIPIKAR XERAND,</b> КРЕМ ДЛЯ РУК, 50 МЛ</li>
            <li><b>CICAPLAST B5,</b> СПРЕЙ, 100 МЛ</li>
         </ul>
         <p class="block__text">
            Чем больше правильных ответов — тем больше подарков на выбор вы
            получите. С каждым угаданным набором во вкладке "Мои промо-коды"
            будут появляться новые коды на подарки. Вы сможете выбрать один
            промо-код и применить его при оформлении заказа. Игру можно
            завершить в любой момент
         </p>

         <button
            type="button"
            @click="$store.commit('setPopup', null)"
            class="popup__close"
         ></button>
      </div>
   </main-popup>
</template>

<script>
export default {
   emits: ["nextLink"],
   props: {
      title: String,
      text: String,
      button: String,
      link: String,
      number: String || Number,
   },
};
</script>

<style lang="scss" scoped>
.popup__body {
   top: auto;
   bottom: 21px;
}

@media (min-width: 768px) {
   .popup__body {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
}
</style>