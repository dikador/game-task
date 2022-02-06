<template>
   <div>
      <transition name="fade" mode="out-in" class="popup">
         <div v-if="popup === $attrs.value">
            <slot></slot>

            <div
               @click="$store.commit('setPopup', null)"
               class="popup__background"
            ></div>
         </div>
      </transition>
   </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   name: "main-popup",
   computed: {
      ...mapState({
         popup: (state) => state.popup,
      }),
   },
};
</script>

<style lang="scss">
.popup {
   position: relative;
   z-index: 1000;
}

.popup__body {
   top: 20px;
   z-index: 1001;
   position: fixed;
   max-height: 95%;
   margin-bottom: 10px;
   transform: translate(-50%, 0%);
   width: calc(100% - 20px);
   left: 50%;

   overflow-y: auto;
}

.popup__background {
   width: 100%;
   height: 100%;
   background: rgba(240, 240, 240, 0.7);
   position: fixed;
   top: 0;
   left: 0;
}

.popup__close {
   width: 48px;
   height: 48px;
   position: relative;
   border: 1px solid #fff;
   border-radius: 50%;
   text-align: center;
   margin: 13px auto 0px auto;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      transform: scale(0.97);
   }

   &:active {
      transform: scale(0.93);
   }

   &::before,
   &::after {
      content: "";
      position: absolute;
      width: 21px;
      background: #fff;
      top: 50%;
      left: 50%;
      height: 1px;
      transform: translate(-50%, 0) rotate(-135deg);
   }

   &::after {
      transform: translate(-50%, 0) rotate(-45deg);
   }
}

@media (min-width: 992px) {
   .popup__body {
      top: 40px;
      width: calc(100% - 200px);
   }
}
</style>