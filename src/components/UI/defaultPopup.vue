<template>
   <main-popup :value="value">
      <div class="defaultPopup popup__body">
         <h4>{{ title }}</h4>

         <p>{{ text }}</p>
         <div
            @click="$store.commit('setPopup', null)"
            class="default__close"
         ></div>
      </div>
   </main-popup>
</template>

<script>
export default {
   name: "default-popup",

   props: {
      title: String,
      text: String,
      value: String,
   },
};
</script>

<style lang="scss" scoped>
.defaultPopup {
   background-color: #fff;
   color: #000;
   width: calc(100% - 22px);
   padding: 40px 20px 20px;
   border-radius: 20px;
   top: 50%;
   left: 50%;
   overflow: hidden;
   transform: translate(-50%, -50%);
   bottom: auto;
   max-width: 560px;

   h4 {
      margin-bottom: 10px;
      font-family: "gill-sans-pro-500", sans-serif;
      font-size: 16px;
      text-transform: uppercase;
   }

   p {
      color: #000;
      font-family: "gill-sans-pro-500", sans-serif;
      font-size: 16px;
      line-height: 1.6em;
      font-weight: 300;
   }
}

@media (min-width: 992px) {
   .defaultPopup {
      padding: 48px 55px 44px 55px;

      h4 {
         margin-bottom: 15px;
         font-size: 24px;
         line-height: 110%;

         font-weight: 300;
         letter-spacing: 0.02em;
      }

      p {
         color: #000;
         font-family: "gill-sans-pro-300", sans-serif;
         font-size: 16px;
         line-height: 1.6em;
      }
   }
}
</style>