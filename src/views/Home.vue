<template>
    <section class="container">
        <h1 class="text-dark text-center">Home page</h1>
        <!--        <base-modal-->
        <!--            :visible="showModal"-->
        <!--            @close-modal="closeModal"-->
        <!--            variant-modal="md"-->
        <!--            :scroolable="true"-->
        <!--            :centralized="true"-->

        <!--        >-->
        <!--            <template slot="header">-->
        <!--                Login-->
        <!--            </template>-->

        <!--            <form-->
        <!--                class="login-form"-->
        <!--            >-->
        <!--                <div class="mb-3">-->
        <!--                    <base-input-->
        <!--                        id="email"-->
        <!--                        type="email"-->
        <!--                        name="email"-->
        <!--                        required-->
        <!--                        v-model="form.email"-->
        <!--                        label="Email"-->
        <!--                        :errors="errors.email"-->
        <!--                    />-->
        <!--                </div>-->
        <!--                <div class="mb-3">-->
        <!--                    <base-input-->
        <!--                        id="password"-->
        <!--                        type="password"-->
        <!--                        name="password"-->
        <!--                        required-->
        <!--                        v-model="form.password"-->
        <!--                        label="Password"-->
        <!--                        :errors="errors.password"-->
        <!--                    />-->
        <!--                </div>-->
        <!--            </form>-->
        <!--            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->

        <!--            <template slot="footer">-->
        <!--                <base-button-->
        <!--                    type="submit"-->
        <!--                    variant="primary"-->
        <!--                    @click.native.prevent="teste"-->
        <!--                >-->
        <!--                    Entrar-->
        <!--                </base-button>-->
        <!--            </template>-->

        <!--        </base-modal>-->

        <!--        <base-button-->
        <!--            variant="primary"-->
        <!--            @click.native.prevent="openModal">-->
        <!--            Modal-->
        <!--        </base-button>-->
        <!--        {{ ativo }}-->
        <!--        <base-button-->
        <!--            variant= "danger"-->
        <!--            :confirmAction= true-->
        <!--            confirmActionTitle = "Título da confirmação"-->
        <!--            confirmActionBody = "Corpo confirmação"-->
        <!--            @ativado= "ativo = !ativo">-->
        <!--            Confirmar-->
        <!--            <template name="confirmBody"></template>-->
        <!--        </base-button>-->
        <!--        <br>-->
        <!--        <br>-->
        <div class="row">
            <div class="col-md-12">
                <base-toast
                    color-variant="primary"
                    text-variant="white"
                    @close="closeToast($event)">
                    <template v-slot:trigger="{ openToast }">
                        <base-button
                            variant="danger"
                            :disabled="false"
                            @click.native="openToast">
                            Abrir toast
                        </base-button>
                    </template>
                    <template v-slot:title>
                        Mensagem
                    </template>
                    <template v-slot:time>
                        11 mins ago
                    </template>
                    Hello, world! Toast aqui.
                </base-toast>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <base-confirm @confirmed="confirmed" @not-confirmed="notconfirmed" @close-confirm="closeconfirm" size="sm" button-variant="info">
                    <template v-slot:trigger="{ openConfirm }">
                        <div class="d-grid gap-2">
                            <base-button
                                variant="info"
                                :disabled="false"
                                :block="true"
                                @click.native="openConfirm"
                                :loading="false">
                                <template slot="icon">
                                    <i class="mdi mdi-check"></i>
                                </template>
                                Teste 21
                            </base-button>
                        </div>
                    </template>
                    <template slot="icon-header">
                        <i class="mdi mdi-comment-question text-info"></i>
                    </template>
                    Texto do corpo da mensagem
                </base-confirm>
            </div>
            <div class="col-md-2">
                <base-confirm @confirmed="confirmed" @not-confirmed="notconfirmed" @close-confirm="closeconfirm" size="sm" button-variant="danger">
                    <template v-slot:trigger="{ openConfirm }">
                        <base-button
                            variant="danger"
                            :disabled="false"
                            @click.native="openConfirm">
                            Teste
                        </base-button>
                    </template>
                    <template slot="icon-header">
                        <i class="mdi mdi-delete text-danger"></i>
                    </template>
                    Texto do corpo da mensagem
                </base-confirm>
            </div>
            <div class="col-md-2">
                <base-confirm @confirmed="confirmed" @not-confirmed="notconfirmed" @close-confirm="closeconfirm"  size="sm" button-variant="warning">
                    <template v-slot:trigger="{ openConfirm }">
                        <base-button
                            @click.native="openConfirm"
                            variant="warning"
                        >
                            Click to confirm
                        </base-button>
                    </template>
                    Teste
                </base-confirm>
            </div>
            <div class="col-md-2">
                <base-confirm size="sm" button-variant="success" @confirmed="confirmed" @not-confirmed="notconfirmed" @close-confirm="closeconfirm">
                    <template v-slot:trigger="{ openConfirm }">
                        <base-button
                            variant-outline="success"
                            @click.native="openConfirm">
                            Confirmar
                        </base-button>
                    </template>
                </base-confirm>
            </div>
            <div class="col-md-2">
                <base-message :emit-close="false" variant="primary">
                    <template v-slot:trigger="{ openMessagem }">
                        <base-button @click.native="openMessagem" variant="success">Abrir mensagem</base-button>
                    </template>
                    <template slot="icon">
                        <i class="mdi mdi-check mdi-48px"></i>
                    </template>
                    Erro a asda sd a dsadasda asd
                </base-message>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "primary"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "warning"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "success"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "light"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "dark"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
            <div class="col-md-2">
                <base-button
                    @click.native="simpleClick"
                    variant= "link"
                    @ativado= "ativo = !ativo">
                    Olá
                </base-button>
            </div>
        </div>
    </section>
</template>

<script>

// import { fetchProducts } from "@/services/ProductService"
// import { mapActions } from "vuex"

//import BaseModal from "@/components/Base/BaseModal"
import BaseButton from "@/components/Base/BaseButton"
import BaseConfirm from "@/components/Base/BaseConfirm"
import BaseMessage from "@/components/Base/BaseMessage"
import BaseToast from "@/components/Base/BaseToast"
//import BaseInput from "@/components/Base/BaseInput"
//import BaseConfirm from "@/components/Base/BaseConfirm"

export default {
  name: "Home",
  components: {
    BaseToast,
    BaseMessage,
    BaseConfirm,
    //BaseConfirm,
    //BaseInput,
    BaseButton,
    //BaseModal,
  },
  data() {
    return {
      products: [],
      form: {
        email: "",
        password: "",
      },
      confirmVisible: false,
      confirmEvent: null,
      ativo: false,
      errors: {},
      showModal: false,
    }
  },

  methods: {
    // ...mapActions({
    //   dispatchLogin: "Auth/login",
    // }),
    // async teste() {
    //   try {
    //     await this.dispatchLogin(this.form)
    //
    //     this.$router.push({ name: "user-account" })
    //   } catch ({ response }) {
    //     if (response.data.errors) {
    //       this.errors = response.data.errors
    //     } else {
    //       this.errors["password"] = [response.data.message]
    //     }
    //   }
    // },
    // async fetchProducts() {
    //   const { data } = await fetchProducts()
    //
    //   this.products = data.data
    // },

    /**
     * Modal
     */
    // openModal() {
    //   this.showModal = true
    // },
    // closeModal() {
    //   this.showModal = false
    // },

    /**
     * Confirm
     */
    confirmed() {
      console.log("confirmado")
    },
    notconfirmed() {
      console.log("não confirmado")
    },
    closeconfirm() {
      console.log("close confirmado")
    },

    /**
     * Toast
     */
    closeToast(id) {
      console.log("toast close" + id)
    },


    simpleClick(){
      alert()
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
