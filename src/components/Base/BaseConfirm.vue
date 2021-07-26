<template>
    <div>
        <slot name="trigger" v-bind="{ openConfirm, closeConfirm, visible }"></slot>
        <transition name="fade">
            <div class="modal fade show" aria-modal="true" v-show="visible" >
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 :class="['modal-title', textBaseClass]">
                                <slot name="icon-header"/>
                                {{ title }}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeConfirm(true)"></button>
                        </div>
                        <div class="modal-body" v-if="hasSlotContentDefault">
                            <slot/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" :class="['btn', buttonVariantCancelarClass, sizeClass]" data-bs-dismiss="modal" @click="notconfirm">
                                <i class="mdi mdi-cancel"></i>
                                Não
                            </button>
                            <button type="button" :class="['btn', buttonVariantClass, sizeClass]" data-bs-dismiss="modal" @click="acceptConfirm">
                                <i class="mdi mdi-check"></i>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "BaseConfirm",
  data() {
    return {
      visible: false,
    }
  },
  props: {
    title: {
      type: String,
      default: "Você deseja confirmar?",
    },
    buttonVariant: {
      type:String,
      default: "primary",
      variant: function (value){
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
      default: "sm",
      validator: function (value){
        return [
          "sm",
          "md",
          "lg",
        ].indexOf(value) !== -1
      },
    },
    confirmVariant: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonVariantClass() {
      if (this.buttonVariant == 0){
        return "btn-primary"
      }

      return `btn-${this.buttonVariant}`
    },
    buttonVariantCancelarClass() {
      if (this.buttonVariant == "danger"){
        return "btn-primary"
      }

      return "btn-secondary"
    },
    hasSlotContentDefault() {
      //console.log(this.$slots)
      return !!this.$slots.default
    },
    textBaseClass (){
      if (!this.buttonVariant || !this.confirmVariant){
        return
      }

      return `text-${this.buttonVariant}`
    },
    sizeClass (){
      if (!this.size){
        return
      }

      return `btn-${this.size}`
    },
  },
  methods:{
    openConfirm() {
      this.visible = true
    },
    closeConfirm(emit = false){
      if (emit){
        this.$emit("close-confirm")
      }
      this.visible = false
    },
    acceptConfirm() {
      this.$emit("confirmed")
      this.closeConfirm()
    },
    notconfirm() {
      this.$emit("not-confirmed")
      this.closeConfirm()
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
