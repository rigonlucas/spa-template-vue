<template>
    <div>
        <slot name="trigger" v-bind="{ openMessagem, closeMessage, visible }"></slot>
        <transition name="fade">
            <div :class="['modal fade show', variantTextClass]" aria-modal="true" v-show="visible" >
                <div class="modal-dialog modal-sm modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeMessage"></button>
                            </div>
                            <div class="d-grid gap-2 py-1">
                                <slot name="icon"/>
                            </div>
                            <div class="d-grid gap-2 py-4">
                                <h4>
                                    <slot/>
                                </h4>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button
                                    :class="['btn', variantButtonClass]"
                                    @click="closeMessage()">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "BaseMessage",
  data() {
    return {
      visible: false,
    }
  },
  props:{
    emitClose: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "primary",
      validator: function (value){
        return [
          "primary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].indexOf(value) !== -1
      },
    },
  },
  computed: {
      variantTextClass() {
        if (!this.variant){
          return
        }

        return `text-${this.variant}`
      },
      variantButtonClass() {
        if (!this.variant){
          return
        }

        return `btn-${this.variant}`
      },
  },
  methods: {
    closeMessage(){
      if (this.emitClose){
        this.$emit("close-message")
      }
      this.visible = false
    },
    openMessagem(){
      this.visible = true
    },
  },
  watch:{
    visible: function (newValue) {
      if (newValue){
        document.querySelector("body").classList.add("overflow-hidden")
      } else {
        document.querySelector("body").classList.remove("overflow-hidden")
      }
    },
  },
}
</script>

<style scoped>

</style>