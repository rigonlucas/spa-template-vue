<template>
    <button :class="['btn', variantClass, variantOutlineClass, sizeClass]" :disabled="disabled">
        <slot name="icon"/>
        <slot />
        <div class="spinner-border spinner-border-sm" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div>
    </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: null,
      validator: function (value) {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "link",
        ].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value){
        return [
            "sm",
            "md",
            "lg",
        ].indexOf(value) !== -1
      },
    },
    variantOutline: {
      type: String,
      default: null,
      validator: function (value) {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "link",
        ].indexOf(value) !== - 1
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variantClass() {
      if (!this.variant) {
        return
      }

      return `btn-${this.variant}`
    },
    variantOutlineClass(){
      if (!this.variantOutline)
        {return}

      return `btn-outline-${this.variantOutline}`
    },
    sizeClass() {
      if (!this.size){
        return
      }

      return `btn-${this.size}`
    },
  },
}
</script>

<style scoped>

</style>
