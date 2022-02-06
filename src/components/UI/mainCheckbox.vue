<template>
   <div :class="{ error }" class="checkbox">
      <input
         :value="modelValue"
         @change="updateValue"
         :id="$attrs.value"
         type="checkbox"
      />
      <label :for="$attrs.value">
         <slot></slot>
      </label>
   </div>
</template>

<script>
export default {
   name: "main-checkbox",

   props: {
      modelValue: Boolean,
      error: Boolean,
   },

   methods: {
      updateValue(e) {
         this.$emit("update:modelValue", e.target.checked);
      },
   },
};
</script>

<style lang="scss" scoped>
.checkbox {
   text-align: center;
   user-select: none;

   &.error {
      label:before {
         border: 1px solid #ff0000;
      }
      label {
         color: #ff0000;
      }
   }
}

input {
   display: none;
}

label {
   display: flex;
   align-items: center;
   position: relative;
   padding-left: 24px;
   cursor: pointer;
   min-height: 18px;
}

label:before {
   content: "";
   position: absolute;
   left: 0px;
   top: 0px;
   width: 14px;
   height: 14px;
   border: 1px solid #ffffff;
   background-color: #00a7ff;
}

label:after {
   content: "";
   position: absolute;
   transition: all 0.2s ease;
}

.checkbox {
   input:checked + label:after {
      left: 3px;
      top: 3.7px;
      width: 9.4px;
      height: 4.3px;
      border-radius: 1px;
      border-left: 2px solid #ffffff;
      border-bottom: 2px solid #ffffff;
      transform: rotate(-45deg);
   }
}
</style>