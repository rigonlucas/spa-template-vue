<template>
    <v-flex
        fill-height
        align="center">
        <v-card :loading="isLoading">
            <v-card-text class="pt-4">
                <div>
                    <v-form
                        ref="form"
                        v-model="valid">
                        <v-text-field
                            v-model="form.email"
                            label="E-mail"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            :rules="passwordRules"
                            label="Senha"
                            min="8"
                            counter
                            required
                            @click:append="showPassword = !showPassword"

                        ></v-text-field>
                        <v-layout justify-space-between>
                            <router-link to="/">esqueci minha senha</router-link>
                            <v-btn
                                :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }"
                                @click="login">
                                Login
                            </v-btn>
                        </v-layout>
                    </v-form>
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
//import BaseButton from "@/components/Base/BaseButton"
import { mapActions } from "vuex"
//import BaseInput from "@/components/Base/BaseInput"

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      valid: false,
      e1: true,
      showPassword: false,
      passwordRules: [
          (v) => !!v || "Senha obrigatório",
      ],
      emailRules: [
        (v) => !!v || "E-mail obrigatóriio",
      ],
      isLoading: false,
    }
  },
  methods: {
    ...mapActions({
      dispatchLogin: "Auth/login",
    }),
    async login() {
      this.isLoading = true

      try {
        await this.dispatchLogin(this.form)

        this.$router.push({ name: "home" })
      } catch ({ response }) {
        if (response.data.errors) {
          this.errors = response.data.errors
        } else {
          this.errors["password"] = [response.data.message]
        }
      }

      this.isLoading = false
    },
  },
}
</script>

<style scoped>
</style>
