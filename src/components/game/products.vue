<template>
   <div class="products">
      <div
         :class="{
            ice: product.ice,
            shake: product.shake,
         }"
         @click="activateProduct(product)"
         class="products__item"
         v-for="(product, index) in products"
         :key="product.id"
      >
         <div class="image">
            <div v-if="!product.ice" class="melted"><ice-svg /></div>
            <img :src="require(`@/assets/game-${index}.png`)" alt="" />
         </div>
         <h4>{{ product.name }}</h4>
         <p v-if="windowWidth < 992">{{ product.text }}</p>
         <main-tooltip v-if="windowWidth > 992 && product.ice" :close="false">
            <p class="product__tooltip-text">{{ product.text }}</p>
         </main-tooltip>
      </div>
   </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import iceSvg from "./iceSvg.vue";
export default {
   components: { iceSvg },
   methods: {
      ...mapMutations("game", ["setCurrent", "setPoints", "setPromocodes"]),
      ...mapMutations(["setPopup"]),

      activateProduct(el) {
         if (this.points >= this.products.length) {
            return this.setPopup("promocode");
         }
         if (el.id === this.current.id) {
            el.ice = false;
            this.setCurrent();
            this.setPoints(this.points + 1);
            this.setPromocodes();

            if (this.points >= this.products.length) {
               return this.setPopup("promocode");
            }

            if (this.points === 1) {
               setTimeout(() => {
                  this.setPopup("firstPopup");
               }, 600);
            }
         } else {
            el.shake = true;

            setTimeout(() => {
               el.shake = false;
            }, 900);
         }
      },
   },

   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
         points: (state) => state.game.points,
         products: (state) => state.game.products,
         current: (state) => state.game.current,
      }),
   },
};
</script>

<style lang="scss" scoped>
.products {
   display: grid;
   justify-content: space-between;
   grid-template-columns: 45% 45%;
}

.products__item {
   font-size: 12.1484px;
   line-height: 1.2em;
   margin-top: 20px;
   cursor: pointer;
   position: relative;

   text-align: center;
   letter-spacing: 0.02em;

   color: #ffffff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   &.shake {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
   }

   p {
      font-family: "gill-sans-500", serif;
   }

   &.ice {
      .image {
         &::after {
            opacity: 1;
         }

         .melted {
            opacity: 0.9;
         }
      }
   }
}

h4 {
   font-size: 12px;
   letter-spacing: 0.02em;
   line-height: 1.3em;
}

.product__tooltip-text {
   font-size: 12px;
   line-height: 120%;
   text-align: left;
   padding: 12px;
   display: block;

   letter-spacing: 0.02em;

   color: #2b2b2b;
}

.image {
   display: inline-block;
   position: relative;
   overflow: hidden;
   border-radius: 50%;
   width: 85px;
   height: 85px;
   margin-bottom: 16px;

   .melted {
      position: absolute;
      top: 0;
      z-index: 2;
      left: 0;
      opacity: 0.5;
      transition: ease-out 1s;
   }

   img {
      min-width: 120px;
      max-width: 100%;
      display: block;
      position: absolute;
      object-position: center;
      top: -16px;
      left: -19px;
   }

   &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-image: url("~@/assets/ice.png");
      background-repeat: no-repeat;
      background-size: cover;
      object-position: center;
      top: -20px;
      left: -20px;
      opacity: 0;
      min-width: 120px;
      min-height: 120px;
      position: absolute;
      transition: ease-out 1s;
   }
}

@media (min-width: 768px) {
   .products {
      grid-template-columns: 30% 30% 30%;
   }
}

@media (min-width: 992px) {
   .products {
      grid-template-columns: 30% 30% 30%;
      margin-left: 50px;
      align-items: center;
   }

   h4 {
      font-size: 17px;
   }

   .image {
      width: 117px;
      height: 117px;

      img {
         min-width: 158px;
         top: -17px;
         left: -20px;
      }

      &::after {
         min-width: 158px;
         top: 0;
      }
   }
}

@keyframes shake {
   10%,
   90% {
      transform: translate3d(-1px, 0, 0);
   }

   20%,
   80% {
      transform: translate3d(2px, 0, 0);
   }

   30%,
   50%,
   70% {
      transform: translate3d(-4px, 0, 0);
   }

   40%,
   60% {
      transform: translate3d(4px, 0, 0);
   }
}
</style>