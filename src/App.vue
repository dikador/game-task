<template>
   <div class="wrapper">
      <router-view />
   </div>
</template>

<script>
export default {
   created() {
      window.addEventListener("resize", this.getWindowWidth);
   },

   methods: {
      getWindowWidth() {
         this.$store.commit("setWindowWidth", window.innerWidth);
      },
   },
};
</script>

<style lang="scss">
@import "style/style.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
</style>
