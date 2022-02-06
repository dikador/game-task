<template>
   <div :class="{ active, error }" class="input">
      <input
         :value="modelValue"
         @input="updateInput"
         @focus="active = true"
         @blur="active = $event.target.value ? true : false"
         type="text"
      />

      <p>{{ error ? error : placeholder }}</p>
   </div>
</template>

<script>
export default {
   name: "main-input",
   data() {
      return {
         active: false,
      };
   },

   props: {
      placeholder: String,
      error: String,
      modelValue: [String, Number],
   },

   methods: {
      updateInput(e) {
         this.$emit("update:modelValue", e.target.value);
      },
   },
   mounted() {
      this.active = this.$el.children[0].value ? true : false;
   },
};
</script>

<style lang="scss" scoped>
.input {
   position: relative;

   p {
      position: absolute;
      top: 50%;
      left: 0px;
      font-size: 16px;
      line-height: 1.2em;
      pointer-events: none;
      transform: translate(0, -50%);
      transition: 0.2s;
      color: #fff;
   }
   &.active {
      p {
         transform: translate(0, 0%);
         top: 0px;
         font-size: 10px;
      }
   }

   &.error {
      input {
         border-bottom: 1px solid #ff0000;
      }

      p {
         color: #ff0000;
      }
   }
}

input {
   border-bottom: 1px solid #f1f1f1;
   background: transparent;
   font-size: 16px;
   max-width: 100%;
   width: 100%;
   outline: none;
   padding: 20px 0px 7px 0px;
   transition: 0.2s;
   color: #fff;
   font-weight: 300;

   &:focus {
      border-bottom: 1px solid #cecece;
   }
}
</style>