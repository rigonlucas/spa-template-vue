<template>
    <div></div>
</template>

<script>
import { getCepInfo } from "@/services/externals/CepService"
// import { createAddress } from "@/services/AddressService"

export default {
  name: "AddressForm",

  data() {
    return {
      form: {
        alias: "",
        cep: "",
        address: "",
        number: null,
        complement: "",
        district: "",
        city: null,
        state: null,
        money: 0,
      },
      blockCepRelatedFields: false,
    }
  },
  watch: {
    "form.cep"(cep) {
      const cleanCep = cep.replace("-", "")
      if (cleanCep.length === 8) {
        this.fetchCepInfo(cleanCep)
      }
    },
  },
  methods: {
    async fetchCepInfo(cep) {
      try {
        const data = await getCepInfo(cep)

        this.form.address = data.logradouro
        this.form.city = data.localidade
        this.form.state = data.uf

        this.blockCepRelatedFields = true
      }  catch (e) {
        console.log(e)
      }
    },
    async saveAddress() {
      // const { data } = await createAddress(this.form)
    },
  },
}
</script>

<style scoped>

</style>
