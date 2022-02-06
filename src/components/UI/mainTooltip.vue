<template>
   <div v-if="clickEvent" class="tooltip__wrapper" @click="active = true"></div>
   <div
      class="tooltip"
      @mouseenter="windowWidth > 992 && !clickEvent ? (active = true) : ''"
      @mouseleave="windowWidth > 992 && !clickEvent ? (active = false) : ''"
   >
      <transition name="zoom" mode="out-in">
         <div v-if="active" class="tooltip__wrapper">
            <div class="tooltip__body" :class="'tooltip-' + position">
               <slot></slot>

               <div
                  v-if="close"
                  @click="active = false"
                  class="default__close"
               ></div>
            </div>
         </div>
      </transition>
   </div>
</template>

<script>
import { mapState } from "vuex";
export default {
   name: "main-tooltip",
   props: {
      position: {
         type: String,
         default: () => "left",
      },

      close: {
         type: Boolean,
         default: () => true,
      },
      clickEvent: {
         type: Boolean,
         default: () => false,
      },
   },

   data() {
      return {
         active: false,
      };
   },

   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
      }),
   },
};
</script>

<style lang="scss" scoped>
.tooltip__wrapper {
   z-index: 100;
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
}

.tooltip {
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
}

.tooltip__body {
   width: 73vw;
   border-radius: 0;
   background-color: #fff;
   z-index: 100;

   position: absolute;

   &.tooltip-left {
      right: 50%;
      transform: translate(0, 100%);
      bottom: 0;

      &::before {
         top: -19px;
         right: 0px;
         clip-path: polygon(100% 0%, 0 100%, 100% 100%);
      }
   }

   &.tooltip-right {
      left: 50%;
      transform: translate(0, -100%);
      bottom: 40%;

      &::before {
         bottom: -19px;
         left: 0px;
         clip-path: polygon(100% 0%, 0 0, 0% 100%);
      }
   }

   &::before {
      content: "";
      background-color: #fff;
      width: 20px;
      height: 20px;
      position: absolute;
   }
}

@media (min-width: 576px) {
   .tooltip__body {
      width: 45vw;
   }
}

@media (min-width: 992px) {
   .tooltip__body {
      width: 214px;
   }
}
</style>