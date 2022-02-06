<template>
   <main-popup class="promocodes" value="promocode">
      <div class="popup__body block">
         <h3>Мои промокоды</h3>
         <h4>
            вы можете выбрать один промокод и применить при следующем заказе до
            21.12
         </h4>

         <div class="promocodes__body">
            <div
               class="promocode"
               v-for="promocode in promocodes"
               :key="promocode.id"
            >
               <p>
                  <b>{{ promocode.title }}</b> {{ promocode.text }}
               </p>

               <div class="code">
                  {{ promocode.active ? promocode.code : "?" }}
               </div>
            </div>
         </div>

         <button
            @click="$store.commit('setPopup', null)"
            class="button btn-white btn-continue"
         >
            продолжить игру
         </button>

         <p class="promocodes__text">
            Оставьте свой email, чтобы не пришлось где-то записывать выигранные
            промокоды.
            <br />
            <br />
            Мы всё пришлём в почтовый ящик, а вы загляните туда, когда будете
            выбирать подарки к Новому году.
         </p>

         <div class="form">
            <main-input
               class="form-input"
               :error="errors.email"
               v-model="email"
               placeholder="Ваш email"
            />

            <main-checkbox
               :error="errors.accept"
               value="accept"
               v-model="accept"
               class="accept"
            >
               Согласие на обработку персональных данных
            </main-checkbox>

            <button @click="getCode" class="button btn-white">
               завершить и получить промокоды
            </button>
         </div>

         <button
            type="button"
            @click="$store.commit('setPopup', null)"
            :class="
               windowWidth < 992 ? 'popup__close' : 'default__close white-close'
            "
         ></button>
      </div>
   </main-popup>
</template>

<script>
import { mapState } from "vuex";
export default {
   computed: {
      ...mapState({
         windowWidth: (state) => state.windowWidth,
         promocodes: (state) => state.game.promocodes,
         points: (state) => state.game.points,
      }),
   },

   methods: {
      getCode() {
         let count = 0;
         let errors = {
            email: "",
            accept: false,
         };

         if (!/.+@.+\..+/.test(this.email)) {
            errors.email = "Введите корректный email";
            count++;
         }
         if (!this.accept) {
            errors.accept = true;
            count++;
         }
         this.errors = errors;

         if (count === 0) {
            alert("Отправлено");
         }
      },
   },

   data() {
      return {
         email: "",
         accept: false,
         errors: {
            email: "",
            accept: false,
         },
      };
   },
};
</script>

<style lang="scss" scoped>
.popup__body {
   padding: 30px 30px 25px 25px;
   bottom: auto;
}

.accept {
   color: #fff;
   font-size: 12px;
   margin-top: 15px;
}

.btn-white {
   height: 50px;
   margin-bottom: 30px;
}

.form {
   .button {
      margin-top: 40px;
   }
}

.form-input {
   max-width: 352px;
}

.promocodes__text {
   font-size: 15px;
   line-height: 1.6em;
   margin: 40px 0px;

   color: #ffffff;
}

.promocodes__body {
   margin-top: 40px;
}

h3,
h4 {
   font-size: 24px;
   line-height: 1.3em;
   letter-spacing: 0.02em;
   letter-spacing: 0.02em;
   text-transform: uppercase;
   color: #ffffff;
   font-family: "gill-sans-500", serif;
   font-weight: 400;
}

h4 {
   font-size: 16px;
   margin-top: 15px;
}

@media (min-width: 576px) {
   .promocodes__text {
      margin: 35px 0px 25px 0px;
      font-size: 18px;
      line-height: 1.3em;
   }
}

@media (min-width: 768px) {
   .promocodes__body {
      display: grid;
      grid-template-columns: 46% 46%;
      justify-content: space-between;
   }

   .promocode {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-start;

      .code {
         margin-top: 0;
         flex: 0 0 150px;
         margin-right: 16px;
      }
   }

   .btn-continue {
      max-width: 290px;
   }

   .form {
      .button {
         max-width: 420px;
      }
   }
}

@media (min-width: 992px) {
   .promocodes__body {
      grid-template-columns: 48% 48%;
   }

   .promocode {
      justify-content: start;
      margin-bottom: 19px;

      .code {
         margin-top: 0;
         flex: 0 0 180px;
         margin-right: 16px;
      }
   }

   .promocodes__text {
      line-height: 1em;
   }

   .white-close {
      &::after {
         background-color: #fff !important;
      }

      &::before {
         background-color: #fff !important;
      }
   }
}
</style>