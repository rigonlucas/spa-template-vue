<template>
    <div>
        <slot name="trigger" v-bind="{ closeToast, openToast, id, visible }"></slot>
        <div :class="['toast fade show', positionClass, positionYClass, positionXClass, positionMClass]" role="alert" aria-live="assertive" aria-atomic="true" v-if="visible">
            <div :class="['toast-header', textVariantClass, colorVariantClass]">
                <i class="rounded me-2" alt="..."></i>
                <strong class="me-auto">
                    <slot name="title"/>
                </strong>
                <small>
                    <slot name="time"/>
                </small>
                <button type="button" :class="['btn-close', textWhiteClass]" data-bs-dismiss="toast" aria-label="Close" id="tes" @click="closeToast"></button>
            </div>
            <div class="toast-body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * The only true button.
 * @displayName Best Button
 */
export default {
  name: "BaseToast",
  data(){
    return {
      visible: true,
    }
  },
  props: {
    id: {
      type: String,
      default: () => "toast_" + Math.ceil(Math.random() * 10000),
    },
    position: {
      type: String,
      default: "fixed",
      validator: function(value) {
        return [
            "fixed",
            "absolute",
            "relative",
            "static",
            "sticky",
        ].indexOf(value) !== -1
      },
    },
    positionX: {
      type: String,
      default: "end-0",
      validator: function(value){
        return [
            "start-0",
            "start-50",
            "start-100",
            "end-0",
            "end-50",
            "end-100",
        ].indexOf(value) !== -1
      },
    },
    positionY: {
      type: String,
      default: "bottom-0",
      validator: function (value){
        return [
          "top-0",
          "top-50",
          "top-100",
          "bottom-0",
          "bottom-50",
          "bottom-100",
        ].indexOf(value) !== -1
      },
    },
    positionM: {
      type: String,
      default: null,
      validator: function(value) {
        return [
            "",
        ].indexOf(value) !== -1
      },
    },
    textVariant: {
      type: String,
      default: "dark",
      validator: function(value){
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "white",
        ].indexOf(value) !== -1
      },
    },
    colorVariant: {
      type: String,
      default: "light",
      validator: function(value){
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "white",
        ].indexOf(value) !== -1
      },
    },
  },
  computed: {
    positionMClass(){
      if (!this.positionM){
        return
      }

      return this.positionM
    },
    positionYClass(){
      if (!this.positionY){
        return
      }

      return this.positionY
    },
    positionXClass(){
      if (!this.positionX){
        return
      }

      return this.positionX
    },
    positionClass(){
      if (!this.position){
        return
      }

      return `position-${this.position}`
    },
    textVariantClass() {
      if (!this.textVariant){
        return
      }

      return `text-${this.textVariant}`
    },
    colorVariantClass() {
      if (!this.colorVariant){
        return
      }

      return `bg-${this.colorVariant}`
    },
    textWhiteClass(){
      if (this.textVariant !== "white"){
        return
      }

      return "btn-close-white"
    },
  },
  methods: {
    closeToast() {
      this.$emit("close", this.id)
      this.visible = false
    },
    openToast(){
      this.visible = true
    },
  },
}
</script>

<style scoped>

</style>
