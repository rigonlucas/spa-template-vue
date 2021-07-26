<template>
    <div>
        <transition name="slide-fade">
            <div class="modal fade show" aria-modal="true" v-show="visible" >
                <div :class="['modal-dialog', variantModalClass, centralizedClass, scroolableClass]">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <slot name="header"/>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                        </div>
                        <div class="modal-body">
                            <slot/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Fechar</button>
                            <slot name="footer"/>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    visible:{
      type: Boolean,
      default: false,
    },
    variantModal: {
      type: String,
      default: "md",
      validator: function (value) {
        return [
          "sm",
          "md",
          "lg",
          "xl",
          "fullscreen",
        ].indexOf(value) !== -1
      },
    },
    centralized: {
      type: Boolean,
      default: true,
    },
    scroolable:{
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal")
    },
  },
  computed: {
    variantModalClass() {
      if (!this.variantModal) {
        return
      }

      return `modal-${this.variantModal}`
    },
    centralizedClass(){
      if (!this.centralized) {
        return
      }

      return "modal-dialog-centered"
    },
    scroolableClass() {
      if (!this.scroolable)
        {return}

      return "modal-dialog-scrollable"
    },
  },
  watch:{
    visible: function (newValue){
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